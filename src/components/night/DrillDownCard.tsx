import type { ReactNode } from 'react';
import { asset } from '../../lib/asset';
import { CommentaryIcon, FilmIcon, HeadphonesIcon } from './icons';

/* One way further into a chapter: the audio walk, the historian's reaction, or
   the film about how the trail was made.

   `pending` is load-bearing. Most of this material has not been recorded yet,
   and a card that pretends otherwise makes the prototype lie to whoever is
   reviewing it — so an unfilled card says so, and does not accept a click. */

export type DrillKind = 'audio' | 'historian' | 'film';

const ICON: Record<DrillKind, ReactNode> = {
  audio: <HeadphonesIcon />,
  historian: <CommentaryIcon />,
  film: <FilmIcon />,
};

const KICKER: Record<DrillKind, string> = {
  audio: 'Audio walk',
  historian: 'Historian reacts',
  film: 'Behind the trail',
};

export interface DrillDownCardProps {
  kind: DrillKind;
  title: string;
  /** Runtime, or whatever belongs next to the kicker. */
  meta: string;
  blurb: string;
  /** public/ path to a thumbnail. */
  thumb?: string;
  pending?: boolean;
  onOpen?: () => void;
}

export default function DrillDownCard({
  kind,
  title,
  meta,
  blurb,
  thumb,
  pending = false,
  onOpen,
}: DrillDownCardProps) {
  return (
    <button
      type="button"
      className={`nx-drill nx-drill--${kind}${pending ? ' is-pending' : ''}`}
      aria-disabled={pending || undefined}
      onClick={() => {
        if (pending) return;
        navigator.vibrate?.(10);
        onOpen?.();
      }}
    >
      {thumb ? (
        <span className="nx-drill__thumb">
          <img src={asset(thumb)} alt="" loading="lazy" />
          <span className="nx-drill__icon">{ICON[kind]}</span>
        </span>
      ) : (
        <span className="nx-drill__thumb nx-drill__thumb--bare">
          <span className="nx-drill__icon">{ICON[kind]}</span>
        </span>
      )}

      <span className="nx-drill__body">
        <span className="nx-drill__kicker">
          {KICKER[kind]} <span className="nx-drill__meta">· {meta}</span>
        </span>
        <span className="nx-drill__title">{title}</span>
        <span className="nx-drill__blurb">{blurb}</span>
        <span className="nx-drill__cta">{pending ? 'Not yet recorded' : 'Open'}</span>
      </span>
    </button>
  );
}
