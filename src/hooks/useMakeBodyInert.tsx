import { useEffect } from 'react';

export function useMakeBodyInert(condition: boolean) {
  useEffect(() => {
    const elements = document.querySelectorAll('body > *');

    elements.forEach((element) => {
      if (
        element.tagName !== 'HEADER' &&
        element.tagName !== 'SCRIPT' &&
        element.tagName !== 'NEXT-ROUTE-ANNOUNCER'
      ) {
        condition
          ? element.setAttribute('inert', '')
          : element.removeAttribute('inert');
      }
    });
  }, [condition]);
}
