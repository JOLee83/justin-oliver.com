import { act, fireEvent, render, screen } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import PopMenu from './PopMenu';

const setup = () => {
  const scroll = vi.fn();
  render(
    <>
      <PopMenu scroll={scroll} />
      <div className="about" tabIndex={-1} />
    </>
  );
  const toggles = screen.getAllByRole('button', { name: 'opens navigation menu' });
  const panel = document.getElementById('nav-menu')!;
  const isOpen = () => {
    const expanded = toggles.map(t => t.getAttribute('aria-expanded'));
    expect(new Set(expanded).size).toBe(1);
    expect(panel.hasAttribute('inert')).toBe(expanded[0] === 'false');
    return expanded[0] === 'true';
  };

  return { scroll, toggles, isOpen };
};

it('opens and closes from either toggle button', () => {
  const { toggles, isOpen } = setup();
  expect(isOpen()).toBe(false);

  fireEvent.click(toggles[0]);
  expect(isOpen()).toBe(true);

  fireEvent.click(toggles[1]);
  expect(isOpen()).toBe(false);
});

it('swaps the desktop label after it fades out', () => {
  vi.useFakeTimers();
  const { toggles } = setup();

  fireEvent.click(toggles[1]);
  expect(toggles[1].textContent).toBe('Menu');

  act(() => vi.advanceTimersByTime(500));
  expect(toggles[1].textContent).toBe('Close');
});

it('scrolls to the picked section, focuses it, and closes', () => {
  const { scroll, toggles, isOpen } = setup();
  fireEvent.click(toggles[0]);

  fireEvent.click(screen.getByRole('button', { name: 'About Me' }));

  expect(scroll).toHaveBeenCalledWith('.about');
  expect(document.activeElement).toBe(document.querySelector('.about'));
  expect(isOpen()).toBe(false);
});

it('closes when the resume link is clicked', () => {
  const { toggles, isOpen } = setup();
  fireEvent.click(toggles[0]);

  fireEvent.click(screen.getByRole('link', { name: 'My Resume' }));

  expect(isOpen()).toBe(false);
});

it('closes when the page scrolls', () => {
  const { toggles, isOpen } = setup();
  fireEvent.click(toggles[0]);

  fireEvent.scroll(window);

  expect(isOpen()).toBe(false);
});
