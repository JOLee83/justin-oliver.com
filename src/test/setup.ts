import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// jsdom has no ResizeObserver or scrollIntoView
vi.stubGlobal('ResizeObserver', class {
  observe() {}
  disconnect() {}
});
Element.prototype.scrollIntoView = () => {};

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
});
