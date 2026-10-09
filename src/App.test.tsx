import { fireEvent, render, screen, within } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import App from './App';
import { MySkills } from './Constants/MySkills';

it('renders every section', () => {
  render(<App />);
  for (const name of ['About Me', 'My Skills', 'My Work', 'Contact Me']) {
    expect(screen.getByRole('heading', { name })).toBeDefined();
  }
});

it('renders every skill', () => {
  render(<App />);
  const list = within(document.getElementById('skills-list')!);
  for (const { title } of MySkills) {
    expect(list.getByText(title)).toBeDefined();
  }
});

it('scrolls to and focuses a section picked from the menu', () => {
  const scrollIntoView = vi.spyOn(Element.prototype, 'scrollIntoView');
  const { container } = render(<App />);
  const about = container.querySelector('.about')!;

  fireEvent.click(screen.getByRole('button', { name: 'About Me' }));

  expect(scrollIntoView.mock.contexts).toEqual([about]);
  expect(document.activeElement).toBe(about);
});
