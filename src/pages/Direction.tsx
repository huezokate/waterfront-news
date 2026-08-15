import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import '../styles/directions.css';
import { DIRECTIONS } from '../data/directions';
import { asset } from '../lib/asset';
import { useCameraFocus, useScrollReveal } from '../lib/nightFx';
import ScrollProgress from '../components/ScrollProgress';

/* Identical sample front page rendered per direction — same copy, same layout,
   only the theme (fonts / palette / ornament) changes, so directions compare
   apples-to-apples. Interactive directions (D) layer scroll reveals, a scroll
   progress bar, and a tap-to-ignite living image on top of the same skeleton. */

/* Tap-to-ignite living image: desaturated at rest; tap returns the color with an
   ember pulse + a haptic tick where the Vibration API exists (Android). */
function LivingImage() {
  const [alive, setAlive] = useState(false);
  const ignite = () => {
    navigator.vibrate?.(alive ? 8 : [12, 40, 8]);
    setAlive((a) => !a);
  };
  return (
    <figure className="dx-living">
      <button
        type="button"
        className={`dx-living__frame${alive ? ' is-alive' : ''}`}
        onClick={ignite}
        aria-pressed={alive}
        aria-label="Historic plate of the May 4th 1851 fire — tap to bring it alive"
      >
        <img
          src={asset('historic/4-2-2b-1851-may-4th-fire-from-long-wharf-commercial-st.jpg')}
          alt="The May 4th 1851 fire seen from Long Wharf at Commercial Street"
          loading="lazy"
        />
        <span className="dx-living__hint">{alive ? 'burning' : 'tap to ignite'}</span>
      </button>
      <figcaption className="dx-living__caption">
        The Great Fire from Long Wharf, May 4, 1851 — tap the plate to ignite it.
      </figcaption>
    </figure>
  );
}

/* Grid-of-plates picker (from the stakeholder sketches): bright, saturated
   thumbnails to choose a location + year. Tap selects with a haptic tick. */
const PLATES = [
  { src: 'historic/4-1-1a-1797-la-perous-sf-bay.jpg', label: 'San Francisco Bay', year: '1797' },
  { src: 'historic/4-1-4b-1848-sf-view-from-russian-hill.jpeg', label: 'Russian Hill', year: '1848' },
  { src: 'historic/4-1-5a-1849-eddy-1st-edition-of-sf.jpg', label: 'Eddy’s First Map', year: '1849' },
  { src: 'historic/4-2-3c-1850-sf-bay-with-abandoned-ships.jpeg', label: 'The Abandoned Fleet', year: '1850' },
  { src: 'historic/4-2-2d-1851-view-north-from-powell-to-tel-hill-in-san-franci.jpg', label: 'Telegraph Hill', year: '1851' },
  { src: 'historic/4-2-5c-photo-1867-sf-waterfront-scan.jpg', label: 'The Waterfront', year: '1867' },
];

function PlateGrid() {
  const [picked, setPicked] = useState<number | null>(null);
  const pick = (i: number) => {
    navigator.vibrate?.(10);
    setPicked((p) => (p === i ? null : i));
  };
  return (
    <div className="dx-plates-wrap">
      <p className="dx-plates-intro">
        Every plate is a doorway: pick the ground you are standing on, then the year you want to
        stand in. Bright, saturated, colorfully dramatic — scroll and the plates blur like a
        camera in motion; stop, and they snap into focus.
      </p>
      <div className="dx-plates" role="group" aria-label="Choose a location and year">
        {PLATES.map((p, i) => (
          <button
            key={p.src}
            type="button"
            className={`dx-plate${picked === i ? ' is-picked' : ''}`}
            onClick={() => pick(i)}
            aria-pressed={picked === i}
          >
            <img src={asset(p.src)} alt={`${p.label}, ${p.year}`} loading="lazy" />
            <span className="dx-plate__label">
              {p.label}
              <span className="dx-plate__year">{p.year}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Direction() {
  const { id } = useParams();
  const idx = DIRECTIONS.findIndex((d) => d.id === id);
  const d = idx === -1 ? null : DIRECTIONS[idx];
  const rootRef = useScrollReveal(Boolean(d?.interactive));
  useCameraFocus(Boolean(d?.interactive), rootRef);
  if (!d) return <Navigate to="/directions" replace />;
  const prev = DIRECTIONS[(idx + DIRECTIONS.length - 1) % DIRECTIONS.length];
  const next = DIRECTIONS[(idx + 1) % DIRECTIONS.length];
  const rv = d.interactive ? ' dx-reveal' : '';

  return (
    <div className={`dx dx--${d.id}`} ref={rootRef}>
      {d.interactive && <ScrollProgress />}
      <div className="dx-page">
        <nav className="dx-bar" aria-label="Directions">
          <Link to="/directions">← All directions</Link>
          <div className="dx-bar__tabs">
            {DIRECTIONS.map((t) => (
              <Link
                key={t.id}
                className="dx-bar__tab"
                to={`/directions/${t.id}`}
                aria-current={t.id === d.id ? 'page' : undefined}
              >
                {t.letter}
              </Link>
            ))}
          </div>
        </nav>

        <header className="dx-masthead">
          <div className="dx-masthead__kicker">
            Direction {d.letter}
            {d.recommended && ' · ★ recommended'}
            {d.badge && ` · ${d.badge}`} — {d.name}
          </div>
          <h1 className="dx-masthead__name">The Waterfront Times</h1>
          <div className="dx-masthead__rule">
            <span className="dx-fleuron">❦</span> San Francisco · Vol. I, No. 1 · Price One Dime{' '}
            <span className="dx-fleuron">❦</span>
          </div>
        </header>

        <article className={`dx-article${rv}`}>
          <h2 className="dx-headline">Gold Fleet Crowds the Cove; A Forest of Masts off Yerba Buena</h2>
          <p className="dx-dateline">Pier 43 — Tuesday Morning, June 3, 1851</p>
          <p>
            Scarce two years since the first cry of gold went up from the American River, and the
            once-quiet anchorage of Yerba Buena Cove now bristles with upwards of five hundred
            vessels, abandoned by crews who fled to the diggings the hour they dropped anchor.
            Enterprising citizens have taken to converting the derelict hulls into storehouses,
            hotels, and — in one celebrated case — a gaol.
          </p>
          <p>
            The waterfront advances into the bay almost weekly, as sand from the dunes is carted
            down to fill the shallows and new wharves stride out upon piles. Old mariners complain
            they can no longer find the shoreline where they first came ashore; the city, it seems,
            is determined to walk out and meet its ships halfway.
          </p>
          <span className="dx-end" aria-hidden="true">⁂</span>
        </article>

        {d.interactive && (
          <section className={`dx-section${rv}`} aria-label="Living image">
            <h3 className="dx-section__title">Living Image</h3>
            <LivingImage />
          </section>
        )}

        {d.interactive && (
          <section className={`dx-section${rv}`} aria-label="Location and year picker">
            <h3 className="dx-section__title">Pick a Location &amp; Year</h3>
            <PlateGrid />
          </section>
        )}

        {d.interactive && (
          <div className={`dx-cta-wrap${rv}`}>
            <Link className="dx-cta" to="/night/yerba-buena">
              Enter the prototype: Yerba Buena Cove →
            </Link>
          </div>
        )}

        <section className={`dx-section${rv}`} aria-label="Palette">
          <h3 className="dx-section__title">Palette</h3>
          <div className="dx-swatches">
            {d.palette.map((s) => (
              <div key={s.hex + s.name} className="dx-swatch">
                <div className="dx-swatch__chip" style={{ background: s.hex }} />
                <div className="dx-swatch__label">
                  {s.name} · {s.role}
                  <span className="dx-swatch__hex">{s.hex}</span>
                  {s.ratio && <span className="dx-swatch__ratio">AA {s.ratio}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={`dx-section${rv}`} aria-label="Typography">
          <h3 className="dx-section__title">Typography</h3>
          <dl className="dx-typelist">
            {d.type.map((t) => (
              <div key={t.role}>
                <dt>{t.role}</dt>
                <dd>{t.spec}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={`dx-section${rv}`} aria-label="Notes">
          <h3 className="dx-section__title">Ornament &amp; Notes</h3>
          <p className="dx-note">
            <strong>Ornament:</strong> {d.ornament}
          </p>
          <p className="dx-note" style={{ marginTop: 10 }}>{d.summary}</p>
          <p className="dx-note dx-note--risk" style={{ marginTop: 10 }}>
            <strong>Risk:</strong> {d.risk}
          </p>
        </section>

        <nav className="dx-foot" aria-label="More directions">
          <Link to={`/directions/${prev.id}`}>← {prev.letter}: {prev.name}</Link>
          <Link to={`/directions/${next.id}`}>{next.letter}: {next.name} →</Link>
        </nav>
      </div>
    </div>
  );
}
