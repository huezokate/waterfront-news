import type { Hero } from '../../data/heroes';
import { STANDING_LABEL } from '../../data/heroes';
import HeroAvatar from './HeroAvatar';
import SectionHead from './SectionHead';

/* "Select the hero" — the chapter's one act of play.

   Three people who were all standing here in the same years, one from office,
   one from trade, one from the street. Picking one re-narrates everything
   below: the dispatch, the audio walk, the questions you can ask.

   The row is a radiogroup, not a set of buttons, so arrow keys move between
   heroes the way a character select should. */

export interface HeroSelectProps {
  heroes: Hero[];
  selectedId: string;
  onSelect: (heroId: string) => void;
}

export default function HeroSelect({ heroes, selectedId, onSelect }: HeroSelectProps) {
  const selected = heroes.find((h) => h.id === selectedId) ?? heroes[0];

  const move = (delta: number) => {
    const i = heroes.findIndex((h) => h.id === selected.id);
    const next = heroes[(i + delta + heroes.length) % heroes.length];
    navigator.vibrate?.(8);
    onSelect(next.id);
  };

  return (
    <section className="nx-heroes" aria-label="Choose who tells this chapter">
      <SectionHead label="Select the hero" hint="Three people were here. They do not agree." />

      <div
        className="nx-heroes__row"
        role="radiogroup"
        aria-label="Storyteller"
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            move(1);
          } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            move(-1);
          }
        }}
      >
        {heroes.map((h) => {
          const isSel = h.id === selected.id;
          return (
            <button
              key={h.id}
              type="button"
              role="radio"
              aria-checked={isSel}
              tabIndex={isSel ? 0 : -1}
              className={`nx-heropick${isSel ? ' is-selected' : ''}`}
              onClick={() => {
                navigator.vibrate?.(10);
                onSelect(h.id);
              }}
            >
              <HeroAvatar hero={h} size="lg" selected={isSel} dimmed={!isSel} />
              <span className="nx-heropick__standing">{STANDING_LABEL[h.standing]}</span>
              <span className="nx-heropick__name">{h.name}</span>
            </button>
          );
        })}
      </div>

      <div className="nx-herocard" aria-live="polite">
        <p className="nx-herocard__role">
          {selected.role} <span className="nx-herocard__years">· {selected.lifespan}</span>
        </p>
        <p className="nx-herocard__bio">{selected.bio}</p>
      </div>
    </section>
  );
}
