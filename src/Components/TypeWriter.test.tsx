import { act, render } from '@testing-library/react';
import { beforeEach, expect, it, vi } from 'vitest';
import TypeWriter from './TypeWriter';

beforeEach(() => {
  vi.useFakeTimers();
});

// each step's timer is only scheduled after the previous step re-renders, so advance
// one timer at a time
const advance = (ms: number, steps = 1) => {
  for (let i = 0; i < steps; i++) {
    act(() => vi.advanceTimersByTime(ms));
  }
};

it('types, pauses, erases, then moves on to the next title', () => {
  const { container } = render(<TypeWriter />);
  const text = () => container.textContent;

  expect(text()).toBe('');

  // start delay + empty pause before the first letter
  advance(1499);
  expect(text()).toBe('');
  advance(1);
  expect(text()).toBe('P');

  // remaining 13 letters of "Problem Solver"
  advance(125, 13);
  expect(text()).toBe('Problem Solver');

  // holds the full word before erasing
  advance(3074);
  expect(text()).toBe('Problem Solver');
  advance(1);
  expect(text()).toBe('Problem Solve');

  advance(75, 13);
  expect(text()).toBe('');

  // next title starts after the empty pause, without the initial start delay
  advance(1125);
  expect(text()).toBe('U');
});
