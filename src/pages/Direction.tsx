import { Link, Navigate, useParams } from 'react-router-dom';
import '../styles/directions.css';
import { DIRECTIONS } from '../data/directions';

/* Identical sample front page rendered per direction — same copy, same layout,
   only the theme (fonts / palette / ornament) changes, so directions compare
   apples-to-apples. */
export default function Direction() {
  const { id } = useParams();
  const idx = DIRECTIONS.findIndex((d) => d.id === id);
  if (idx === -1) return <Navigate to="/directions" replace />;
  const d = DIRECTIONS[idx];
  const prev = DIRECTIONS[(idx + DIRECTIONS.length - 1) % DIRECTIONS.length];
  const next = DIRECTIONS[(idx + 1) % DIRECTIONS.length];

  return (
    <div className={`dx dx--${d.id}`}>
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
            {d.recommended && ' · ★ recommended'} — {d.name}
          </div>
          <h1 className="dx-masthead__name">The Waterfront Times</h1>
          <div className="dx-masthead__rule">
            <span className="dx-fleuron">❦</span> San Francisco · Vol. I, No. 1 · Price One Dime{' '}
            <span className="dx-fleuron">❦</span>
          </div>
        </header>

        <article className="dx-article">
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

        <section className="dx-section" aria-label="Palette">
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

        <section className="dx-section" aria-label="Typography">
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

        <section className="dx-section" aria-label="Notes">
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
