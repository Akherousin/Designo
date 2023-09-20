'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { usePreviousRoute } from '@/hooks/usePreviousRoute';

function FocusOnHeading() {
  const pathname = usePathname();
  const prevPath = usePreviousRoute();

  useEffect(() => {
    if (!prevPath || window.location.hash) return;

    let heading = document.querySelector('h1');
    if (!heading) {
      heading = document.querySelector('h2');
    }
    if (!heading) return;

    heading.tabIndex = -1;
    heading.focus();
  }, [pathname, prevPath]);

  return <></>;
}

export default FocusOnHeading;
