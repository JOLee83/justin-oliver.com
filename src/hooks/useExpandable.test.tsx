import { act, fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, expect, it, vi } from 'vitest';
import { useExpandable } from './useExpandable';

// controllable ResizeObserver so tests can trigger re-measures
class FakeResizeObserver {
  static instances: FakeResizeObserver[] = [];
  observed: Element[] = [];
  disconnected = false;
  constructor(public callback: () => void) {
    FakeResizeObserver.instances.push(this);
  }
  observe(el: Element) {
    this.observed.push(el);
  }
  disconnect() {
    this.disconnected = true;
  }
}
vi.stubGlobal('ResizeObserver', FakeResizeObserver);
const latestObserver = () => FakeResizeObserver.instances.at(-1)!;

const Harness = ({ onCollapse = () => {} }: { onCollapse?: () => void }) => {
  const { expanded, labelExpanded, fading, toggle, containerRef, previewRef, contentId } =
    useExpandable<HTMLParagraphElement>(onCollapse);

  return (
    <>
      <div id={contentId} data-testid="container" ref={containerRef}>
        <p ref={previewRef}><a href="#preview">preview</a></p>
        <div><a href="#revealed">revealed</a></div>
      </div>
      <button onClick={toggle}>toggle</button>
      <output>{JSON.stringify({ expanded, labelExpanded, fading })}</output>
    </>
  );
};

const state = () => JSON.parse(screen.getByRole('status').textContent!);
const toggle = () => fireEvent.click(screen.getByRole('button', { name: 'toggle' }));
const maxHeight = () => screen.getByTestId('container').style.maxHeight;

let scrollHeight: number;

beforeEach(() => {
  FakeResizeObserver.instances = [];
  scrollHeight = 400;
  vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(50);
  vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockImplementation(() => scrollHeight);
});

it('clamps to the preview height while collapsed and the full height while expanded', () => {
  render(<Harness />);
  expect(maxHeight()).toBe('50px');

  toggle();
  expect(maxHeight()).toBe('400px');

  toggle();
  expect(maxHeight()).toBe('50px');
});

it('re-measures when the content resizes', () => {
  render(<Harness />);
  toggle();

  scrollHeight = 600;
  act(() => latestObserver().callback());

  expect(maxHeight()).toBe('600px');
});

it('observes every child and disconnects stale observers', () => {
  const { unmount } = render(<Harness />);
  const container = screen.getByTestId('container');
  const first = latestObserver();
  expect(first.observed).toEqual(Array.from(container.children));

  toggle();
  expect(first.disconnected).toBe(true);

  unmount();
  expect(latestObserver().disconnected).toBe(true);
});

it('focuses the first revealed link on expand, skipping the preview', () => {
  render(<Harness />);

  toggle();
  expect(document.activeElement).toBe(screen.getByRole('link', { name: 'revealed' }));
});

it('leaves focus alone on collapse', () => {
  render(<Harness />);
  toggle();
  const button = screen.getByRole('button', { name: 'toggle' });
  button.focus();

  toggle();
  expect(document.activeElement).toBe(button);
});

it('calls onCollapse only when collapsing', () => {
  const onCollapse = vi.fn();
  render(<Harness onCollapse={onCollapse} />);

  toggle();
  expect(onCollapse).not.toHaveBeenCalled();

  toggle();
  expect(onCollapse).toHaveBeenCalledOnce();
});

it('lags the label behind expanded while fading', () => {
  vi.useFakeTimers();
  render(<Harness />);
  expect(state()).toEqual({ expanded: false, labelExpanded: false, fading: false });

  toggle();
  expect(state()).toEqual({ expanded: true, labelExpanded: false, fading: true });

  act(() => vi.advanceTimersByTime(1099));
  expect(state().labelExpanded).toBe(false);

  act(() => vi.advanceTimersByTime(1));
  expect(state()).toEqual({ expanded: true, labelExpanded: true, fading: false });
});

it('keeps the label when toggled back before the fade finishes', () => {
  vi.useFakeTimers();
  render(<Harness />);

  toggle();
  act(() => vi.advanceTimersByTime(500));
  toggle();
  act(() => vi.advanceTimersByTime(1100));

  expect(state()).toEqual({ expanded: false, labelExpanded: false, fading: false });
});

it('gives each instance its own content id', () => {
  render(<><Harness /><Harness /></>);
  const [a, b] = screen.getAllByTestId('container');

  expect(a.id).toBeTruthy();
  expect(a.id).not.toBe(b.id);
});
