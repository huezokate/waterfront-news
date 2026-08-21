import type { Hero } from '../../data/heroes';
import { asset } from '../../lib/asset';

/* The one place a hero becomes a face.

   Today that face is an initialled circle. When a Meshy figurine render lands at
   `hero.figurine`, this component swaps to it everywhere at once — grid teaser,
   hero select, chat header, audio tour — so no other file needs to change. */

export type HeroAvatarSize = 'xs' | 'sm' | 'lg';

export interface HeroAvatarProps {
  hero: Hero;
  size?: HeroAvatarSize;
  /** Draws the selection ring. */
  selected?: boolean;
  /** Dims to a resting state — used for the heroes you did NOT pick. */
  dimmed?: boolean;
}

export default function HeroAvatar({
  hero,
  size = 'lg',
  selected = false,
  dimmed = false,
}: HeroAvatarProps) {
  const cls = [
    'nx-avatar',
    `nx-avatar--${size}`,
    `nx-avatar--${hero.standing}`,
    selected ? 'is-selected' : '',
    dimmed ? 'is-dimmed' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={cls} aria-hidden="true">
      {hero.figurine ? (
        <img className="nx-avatar__figurine" src={asset(hero.figurine)} alt="" loading="lazy" />
      ) : (
        <span className="nx-avatar__initials">{hero.initials}</span>
      )}
    </span>
  );
}
