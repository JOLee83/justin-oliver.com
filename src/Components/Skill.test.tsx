import { act, fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, expect, it, vi } from 'vitest';
import Skill from './Skill';

const skill = { title: 'React', link: '', imgSrc: './img/icons/react.png' };

const placeAt = (y: number) =>
  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({ y } as DOMRect);

const isShown = () => !screen.getByText(skill.title).classList.contains('scale-0');

beforeEach(() => {
  vi.useFakeTimers();
});

it('pops in shortly after load when already on screen', () => {
  placeAt(0);
  render(<Skill skill={skill} />);
  expect(isShown()).toBe(false);

  act(() => vi.advanceTimersByTime(1000));
  expect(isShown()).toBe(true);
});

it('waits until scrolled into view when below the fold', () => {
  const rect = placeAt(window.innerHeight);
  render(<Skill skill={skill} />);

  act(() => vi.advanceTimersByTime(1000));
  expect(isShown()).toBe(false);

  rect.mockReturnValue({ y: window.innerHeight - 101 } as DOMRect);
  fireEvent.scroll(document);
  expect(isShown()).toBe(true);
});
