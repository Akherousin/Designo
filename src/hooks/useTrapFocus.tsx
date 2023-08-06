import { RefObject, useCallback, useEffect, useRef } from 'react';

export function useTrapFocus() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // get all focusable elements
    const element = ref.current;

    if (!element) return;

    const focusableEls = element.querySelectorAll(
      'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
    );

    // Save first and last focusable elements
    const firstFocusableEl = focusableEls[0] as HTMLElement;
    const lastFocusableEl = focusableEls[
      focusableEls.length - 1
    ] as HTMLElement;
    const KEYCODE_TAB = 9;

    const trapFocus = (e: KeyboardEvent) => {
      const isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

      // if the key pressed is not TAB, stop function execution
      if (!isTabPressed) {
        return;
      }

      // if shift + tab
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      }
      // else if tab
      else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    };

    element.addEventListener('keydown', trapFocus);

    return () => element.removeEventListener('keydown', trapFocus);
  }, []);

  return ref;
}
