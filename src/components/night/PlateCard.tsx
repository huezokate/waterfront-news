import { Link } from 'react-router-dom';
import { asset } from '../../lib/asset';

/* One plate in the browse masonry: picture, year, and a two-or-three word
   title. Nothing else — who tells the chapter is a discovery you make on the
   chapter page, not a spec on the grid. */

export interface PlateCardProps {
  to: string;
  image: string;
  years: string;
  title: string;
  /** Staggers the scroll-reveal across a row. */
  delayMs?: number;
}

export default function PlateCard({ to, image, years, title, delayMs = 0 }: PlateCardProps) {
  return (
    <Link
      className="nx-stack dx-reveal"
      to={to}
      onClick={() => navigator.vibrate?.(10)}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <img src={asset(image)} alt={`${title}, ${years}`} loading="lazy" />
      <span className="nx-stack__year">{years}</span>
      <span className="nx-stack__title">{title}</span>
    </Link>
  );
}
