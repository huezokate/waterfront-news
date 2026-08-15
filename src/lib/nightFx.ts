import { useEffect, useRef } from 'react';

/* Shared Direction D motion system (specimen page + Yerba Buena prototype). */

/* Adds .is-in to .dx-reveal elements as they enter the viewport; with reduced
   motion (or no IO) everything is shown immediately. */
export function useScrollReveal(enabled: boolean) {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!enabled || !rootRef.current) return;
    const targets = Array.from(rootRef.current.querySelectorAll<HTMLElement>('.dx-reveal'));
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach((t) => t.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [enabled]);
  return rootRef;
}

/* "Blur the pic, as if camera stopped": while the page scrolls, imagery motion-
   blurs; ~160ms after scrolling stops it snaps back into focus. */
export function useCameraFocus(enabled: boolean, rootRef: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    if (!enabled || !rootRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = rootRef.current;
    let timer: number;
    const onScroll = () => {
      root.classList.add('is-scrolling');
      window.clearTimeout(timer);
      timer = window.setTimeout(() => root.classList.remove('is-scrolling'), 160);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(timer);
    };
  }, [enabled, rootRef]);
}
