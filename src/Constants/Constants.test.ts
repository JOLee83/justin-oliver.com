import { describe, expect, it } from 'vitest';
import { MySkills } from './MySkills';
import { Projects } from './Projects';

const publicFiles = new Set(
  Object.keys(import.meta.glob('/public/img/**/*')).map(path => path.replace('/public/', './'))
);

describe.each([
  ['MySkills', MySkills],
  ['Projects', Projects],
])('%s', (_, items) => {
  it.each(items.map(item => [item.title, item.imgSrc]))('%s image exists in public/', (_, imgSrc) => {
    expect(publicFiles).toContain(imgSrc);
  });

  it('has unique titles', () => {
    const titles = items.map(item => item.title.trim());
    expect(new Set(titles).size).toBe(titles.length);
  });
});
