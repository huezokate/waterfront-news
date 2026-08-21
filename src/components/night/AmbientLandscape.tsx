import { useState } from 'react';
import { asset } from '../../lib/asset';

/* The ambient landscape — the chapter's opening move.

   Full-bleed, cinematic, and quiet: it plays itself. There is no big play
   button because there is nothing to start; the only control is a single
   "still / motion" toggle for anyone who wants the picture to hold still.

   `video` is the finished loop. Until one is shot, `poster` gets a slow Ken
   Burns push, which is what the prototype ships with today. */

export interface AmbientLandscapeProps {
  poster: string;
  /** public/ path to a silent looping clip. Falls back to a Ken Burns poster. */
  video?: string;
  years: string;
  title: string;
  /** "told by …" credit under the title — rebinds when the reader picks a hero. */
  credit?: string;
}

export default function AmbientLandscape({
  poster,
  video,
  years,
  title,
  credit,
}: AmbientLandscapeProps) {
  const [still, setStill] = useState(false);

  return (
    <figure className={`nx-land${still ? ' is-still' : ''}`}>
      <div className="nx-land__frame">
        {video ? (
          <video
            className="nx-land__media"
            src={asset(video)}
            poster={asset(poster)}
            autoPlay={!still}
            muted
            loop
            playsInline
            aria-label={`${title}, ${years}`}
          />
        ) : (
          <img className="nx-land__media" src={asset(poster)} alt={`${title}, ${years}`} />
        )}

        <div className="nx-land__scrim" aria-hidden="true" />

        <figcaption className="nx-land__plate">
          <p className="nx-land__years">{years}</p>
          <h1 className="nx-land__title">{title}</h1>
          {credit && <p className="nx-land__credit">{credit}</p>}
        </figcaption>

        <button
          type="button"
          className="nx-land__toggle"
          onClick={() => {
            navigator.vibrate?.(8);
            setStill((s) => !s);
          }}
          aria-pressed={still}
        >
          {still ? 'Motion' : 'Hold still'}
        </button>
      </div>
    </figure>
  );
}
