import { fireEvent, render, screen } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import { Projects } from '../Constants/Projects';
import MyWork from './MyWork';

const setup = () => {
  const scroll = vi.fn();
  const { container } = render(<MyWork scroll={scroll} />);
  const sections = Array.from(container.querySelectorAll('section'));
  const button = screen.getByRole('button');

  return { scroll, sections, button };
};

it('renders every project', () => {
  setup();
  for (const { imgAlt, title } of Projects) {
    expect(screen.getByAltText(imgAlt)).toBeDefined();
    expect(screen.getByText(title.trim(), { selector: 'a' })).toBeDefined();
  }
});

it('only leaves the first project interactive while collapsed', () => {
  const { sections } = setup();

  expect(sections.map(s => s.hasAttribute('inert'))).toEqual(
    sections.map((_, i) => i !== 0)
  );
});

it('focuses the first revealed link on expand', () => {
  const { sections, button } = setup();

  fireEvent.click(button);

  expect(sections.some(s => s.hasAttribute('inert'))).toBe(false);
  expect(document.activeElement).toBe(sections[1].querySelector('a'));
  expect(document.activeElement?.getAttribute('href')).toBe(Projects[1].href);
});

it('scrolls back to the section when collapsing', () => {
  const { scroll, button } = setup();

  fireEvent.click(button);
  fireEvent.click(button);

  expect(scroll).toHaveBeenCalledExactlyOnceWith('.work');
});
