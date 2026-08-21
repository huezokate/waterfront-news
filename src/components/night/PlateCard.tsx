import { Link } from 'react-router-dom';
import type { Hero } from '../../data/heroes';
import { asset } from '../../lib/asset';
import HeroAvatar from './HeroAvatar';

/* One plate in the browse masonry: the picture and the date, which together
   are the tap target. The three small faces under the title are the teaser for
   the mechanic — you can see before you open it that this chapter has three
   tellers waiting. */

export interface PlateCardProps {
  to: string;
  image: string;
  years: string;
  title: string;
  heroes: Hero[];
  /** Staggers the scroll-reveal across a row. */
  delayMs?: number;
}

export default function PlateCard({
  to,
  image,
  years,
  title,
  heroes,
  delayMs = 0,
}: PlateCardProps) {
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
      <span className="nx-stack__tellers">
        <span className="nx-stack__faces">
          {heroes.map((h) => (
            <HeroAvatar key={h.id} hero={h} size="xs" />
          ))}
        </span>
        {heroes.length} tellers
      </span>
    </Link>
  );
}
