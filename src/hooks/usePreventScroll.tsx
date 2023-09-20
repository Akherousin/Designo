import { useEffect } from 'react';

export function usePreventScroll(condition: boolean) {
  useEffect(() => {
    document.body.style.overflow = condition ? 'hidden' : 'unset';
  }, [condition]);
}
