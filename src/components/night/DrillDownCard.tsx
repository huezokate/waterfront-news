import type { ReactNode } from 'react';
import { asset } from '../../lib/asset';
import { ArchiveIcon, CommentaryIcon, FilmIcon, HeadphonesIcon } from './icons';

/* One way further into a chapter: the audio walk, the historian's reaction, or
   the film about how the trail was made.

   `pending` is load-bearing. Most of this material has not been recorded yet,
   and a card that pretends otherwise makes the prototype lie to whoever is
   reviewing it — so an unfilled card says so, and does not accept a click. */

export type DrillKind = 'archive' | 'audio' | 'historian' | 'film';

const ICON: Record<DrillKind, ReactNode> = {
  archive: <ArchiveIcon />,
  audio: <HeadphonesIcon />,
  historian: <CommentaryIcon />,
  film: <FilmIcon />,
};

const KICKER: Record<DrillKind, string> = {
  archive: 'Historic materials',
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
  /** 'primary' outlines the card in the rust accent — the one thing in the
      section that is the main way in. Everything else stays secondary. */
  emphasis?: 'primary' | 'secondary';
  /** Replaces the "Open" call to action. */
  cta?: string;
  /** Reflected as aria-expanded when the card toggles something open. */
  expanded?: boolean;
  onOpen?: () => void;
}

export default function DrillDownCard({
  kind,
  title,
  meta,
  blurb,
  thumb,
  pending = false,
  emphasis = 'secondary',
  cta,
  expanded,
  onOpen,
}: DrillDownCardProps) {
  return (
    <button
      type="button"
      className={`nx-drill nx-drill--${kind} nx-drill--${emphasis}${pending ? ' is-pending' : ''}`}
      aria-disabled={pending || undefined}
      aria-expanded={expanded}
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
        <span className="nx-drill__cta">{pending ? 'Not yet recorded' : cta ?? 'Open'}</span>
      </span>
    </button>
  );
}
