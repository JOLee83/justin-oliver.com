import { useCallback, useEffect, useId, useRef, useState } from 'react';

// Collapsible section: the container's max-height is clamped to the preview element's
// height while collapsed, and to its full content height while expanded. `labelExpanded`
// lags `expanded` so the button text can fade out before it swaps.
export const useExpandable = <P extends HTMLElement>(onCollapse: () => void) => {
  const [expanded, setExpanded] = useState(false);
  const [labelExpanded, setLabelExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<P>(null);
  const focusOnExpand = useRef(false);
  const contentId = useId();

  const setHeight = useCallback(() => {
    const container = containerRef.current;
    if (container && previewRef.current) {
      container.style.maxHeight = `${expanded ? container.scrollHeight : previewRef.current.clientHeight}px`;
    }
  }, [expanded]);

  useEffect(() => {
    setHeight();
    // re-measure whenever the content reflows: resizes, font loads, images loading
    const observer = new ResizeObserver(setHeight);
    for (const child of containerRef.current?.children ?? []) {
      observer.observe(child);
    }

    return () => observer.disconnect();
  }, [setHeight]);

  // after expanding, move keyboard focus to the first newly revealed link so tabbing
  // continues down the list instead of jumping past it
  useEffect(() => {
    if (!expanded || !focusOnExpand.current) {
      return;
    }
    focusOnExpand.current = false;
    const revealed = Array.from(containerRef.current?.querySelectorAll<HTMLElement>('a[href], button') ?? [])
      .find(el => !previewRef.current?.contains(el));
    // preventScroll: the target is still clipped by the animating container, and focusing
    // it would otherwise scroll the overflow-hidden container itself
    revealed?.focus({ preventScroll: true });
  }, [expanded]);

  useEffect(() => {
    if (labelExpanded === expanded) {
      return;
    }
    const timeout = setTimeout(() => setLabelExpanded(expanded), 1100);

    return () => clearTimeout(timeout);
  }, [expanded, labelExpanded]);

  const toggle = () => {
    if (expanded) {
      onCollapse();
    } else {
      focusOnExpand.current = true;
    }
    setExpanded(!expanded);
  }

  return {
    expanded,
    labelExpanded,
    fading: labelExpanded !== expanded,
    toggle,
    containerRef,
    previewRef,
    contentId,
  };
}
