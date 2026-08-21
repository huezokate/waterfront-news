import type { ReactNode } from 'react';

/* Two-column masonry of plates. CSS columns, so the plates keep their natural
   heights and the eye falls down the page rather than across it. */

export interface MasonryGridProps {
  children: ReactNode;
}

export default function MasonryGrid({ children }: MasonryGridProps) {
  return <div className="nx-masonry">{children}</div>;
}
