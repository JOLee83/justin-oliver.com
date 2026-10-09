import { act, fireEvent, render, screen } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import About from './About';

const setup = () => {
  const scroll = vi.fn();
  render(<About scroll={scroll} />);
  const button = screen.getByRole('button');
  const content = document.getElementById(button.getAttribute('aria-controls')!)!;
  // everything after the preview paragraph
  const rest = content.children[1];

  return { scroll, button, rest };
};

it('starts collapsed with the rest of the text inert', () => {
  const { button, rest } = setup();

  expect(button.getAttribute('aria-expanded')).toBe('false');
  expect(button.textContent).toBe('Read More');
  expect(rest.hasAttribute('inert')).toBe(true);
});

it('expands, then swaps the label after it fades out', () => {
  vi.useFakeTimers();
  const { button, rest } = setup();

  fireEvent.click(button);

  expect(button.getAttribute('aria-expanded')).toBe('true');
  expect(rest.hasAttribute('inert')).toBe(false);
  expect(button.textContent).toBe('Read More');

  act(() => vi.advanceTimersByTime(1100));
  expect(button.textContent).toBe('Read Less');
});

it('scrolls back to the section only when collapsing', () => {
  const { scroll, button, rest } = setup();

  fireEvent.click(button);
  expect(scroll).not.toHaveBeenCalled();

  fireEvent.click(button);
  expect(scroll).toHaveBeenCalledWith('.about');
  expect(rest.hasAttribute('inert')).toBe(true);
});
