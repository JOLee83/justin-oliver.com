import { render, screen } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import App from './App';

// jsdom has no ResizeObserver
vi.stubGlobal('ResizeObserver', class {
  observe() {}
  disconnect() {}
});

it('renders without crashing', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'About Me' })).toBeDefined();
});
