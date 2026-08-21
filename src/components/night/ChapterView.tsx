import { useEffect, useState } from 'react';
import { useScrollReveal } from '../../lib/nightFx';
import type { NightEventData } from '../../data/nightYerbaBuena';
import { MAKING_OF } from '../../data/nightYerbaBuena';
import { heroById } from '../../data/heroes';
import AmbientLandscape from './AmbientLandscape';
import HeroSelect from './HeroSelect';
import HeroChat from './HeroChat';
import SectionHead from './SectionHead';
import TimelineStep from './TimelineStep';
import DrillDownCard from './DrillDownCard';
import ArchiveShelf from './ArchiveShelf';

/* The whole chapter, top to bottom:

     ambient landscape  →  select the hero  →  the dispatch, in their voice
     →  ask them  →  the date before / the date after  →  drill down

   Everything under the hero select is bound to the chosen hero — that is the
   point of choosing. The route wrapper (pages/NightEvent) only resolves the
   chapter and its neighbours; the flow lives here so Storybook renders the
   real page rather than a copy of it.

   The pick follows the reader down the trail: if the hero they chose in the
   last chapter is also cast in this one, they stay selected. */

const LAST_HERO_KEY = 'timelens:lastHero';

const readLastHero = () => {
  try {
    return sessionStorage.getItem(LAST_HERO_KEY);
  } catch {
    return null; // private mode — the pick just doesn't follow them
  }
};

/** Which hero should open this chapter: the carried-over pick, or the first
    of the cast. */
const openingHero = (event: NightEventData, current?: string) => {
  if (current && event.heroes.some((c) => c.heroId === current)) return current;
  const last = readLastHero();
  if (last && event.heroes.some((c) => c.heroId === last)) return last;
  return event.heroes[0].heroId;
};

export interface ChapterViewProps {
  event: NightEventData;
  prev?: NightEventData;
  next?: NightEventData;
  /** Builds the route for a chapter id. */
  hrefFor?: (id: string) => string;
}

export default function ChapterView({
  event,
  prev,
  next,
  hrefFor = (id) => `/night/yerba-buena/${id}`,
}: ChapterViewProps) {
  // The reveal hook lives here rather than in the route wrapper: it owns every
  // .dx-reveal on the page, so Storybook gets the same behaviour the app does.
  const revealRef = useScrollReveal(true);
  const [heroId, setHeroId] = useState(() => openingHero(event));

  // Re-seat the pick when the reader moves to another chapter.
  useEffect(() => {
    setHeroId((current) => openingHero(event, current));
  }, [event]);

  useEffect(() => {
    try {
      sessionStorage.setItem(LAST_HERO_KEY, heroId);
    } catch {
      /* no-op */
    }
  }, [heroId]);

  const cast = event.heroes.map((c) => heroById(c.heroId));
  const activeCast = event.heroes.find((c) => c.heroId === heroId) ?? event.heroes[0];
  const hero = heroById(activeCast.heroId);

  return (
    <div ref={revealRef}>
      <AmbientLandscape
        poster={event.image}
        video={event.video}
        years={event.years}
        title={event.title}
        credit={`told by ${hero.name}`}
      />

      <div className="dx-reveal">
        <HeroSelect heroes={cast} selectedId={hero.id} onSelect={setHeroId} />
      </div>

      <article className="dx-article nx-telling dx-reveal">
        <p className="dx-dateline">{event.years} — {event.title}</p>
        <p className="nx-telling__lens">{activeCast.lens}</p>
        {event.script.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
        <span className="dx-end" aria-hidden="true">⁂</span>
      </article>

      <div className="dx-reveal">
        <HeroChat hero={hero} years={event.years} clipTitle={event.title} />
      </div>

      <section className="nx-timeline dx-reveal" aria-label="Move along the trail">
        <SectionHead label="Along the water" hint="The same shoreline, one step either way." />
        <div className="nx-timeline__row">
          {prev ? (
            <TimelineStep
              direction="before"
              to={hrefFor(prev.id)}
              image={prev.image}
              years={prev.years}
              title={prev.title}
            />
          ) : (
            <p className="nx-step nx-step--empty">The trail begins here.</p>
          )}
          {next ? (
            <TimelineStep
              direction="after"
              to={hrefFor(next.id)}
              image={next.image}
              years={next.years}
              title={next.title}
            />
          ) : (
            <p className="nx-step nx-step--empty">The trail ends here — for now.</p>
          )}
        </div>
      </section>

      <section className="nx-drills dx-reveal" aria-label="Drill down into the history">
        <SectionHead
          label="Drill down into the history"
          hint={`Start with the sheets themselves; the rest of ${event.years} is still being made.`}
        />
        <div className="nx-drills__stack">
          <ArchiveShelf chapterId={event.id} years={event.years} />
          <DrillDownCard
            kind="audio"
            title={`Walk ${event.title} with ${hero.short}`}
            meta={`${activeCast.tourMinutes} min`}
            blurb={`${hero.name} takes the whole chapter at walking pace — the parts a thirty-second dispatch has to leave out.`}
            thumb={event.image}
            pending
          />
          <DrillDownCard
            kind="historian"
            title={event.historian.field}
            meta={event.historian.runtime}
            blurb={event.historian.angle}
            pending={event.historian.pending}
          />
          <DrillDownCard
            kind="film"
            title={MAKING_OF.title}
            meta={MAKING_OF.runtime}
            blurb={MAKING_OF.blurb}
            thumb={MAKING_OF.poster}
            pending={!MAKING_OF.youtubeId}
          />
        </div>
      </section>
    </div>
  );
}
