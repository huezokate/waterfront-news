import { Link } from 'react-router-dom';
import '../styles/directions.css';
import { DIRECTIONS } from '../data/directions';

/* Index of the T-001-02 design-direction exercise. Each card previews its own
   direction's masthead font, ground, and palette chips; the linked page is the
   full live specimen. */
export default function Directions() {
  return (
    <div className="dx">
      <div className="dx-page">
        <nav className="dx-bar" aria-label="Directions">
          <Link to="/">← TimeLens</Link>
          <span>T-001-02 · Design Directions</span>
        </nav>

        <header className="dx-masthead">
          <div className="dx-masthead__kicker">TimeLens · Waterfront</div>
          <h1 className="dx-masthead__name" style={{ fontFamily: 'var(--dx-font-display)' }}>
            Victorian Newspaper — Three Directions
          </h1>
          <div className="dx-masthead__rule">
            <span className="dx-fleuron">❦</span> Pick one before the design system is built{' '}
            <span className="dx-fleuron">❦</span>
          </div>
        </header>

        <p style={{ margin: '20px 0 0', textAlign: 'center' }}>
          Three distinct, WCAG 2.2 AA-verified directions. All share the same skeleton — single
          cream column, printer's-rule timeline, living-image hero, drop-cap article blocks —
          and differ in <strong>type personality, palette warmth, and ornament level</strong>.
          Each page below renders live in its own fonts and colors.
        </p>

        <div className="dxi-cards">
          {DIRECTIONS.map((d) => (
            <Link key={d.id} className={`dx dx--${d.id} dx-card`} to={`/directions/${d.id}`}>
              <div className="dx-card__kicker">
                Direction {d.letter}
                {d.recommended && ' · ★ recommended'}
              </div>
              <h2 className="dx-card__name">{d.name}</h2>
              <p className="dx-card__tagline">{d.tagline}</p>
              <div className="dx-card__chips" aria-hidden="true">
                {d.palette.map((s) => (
                  <span key={s.hex + s.name} className="dx-card__chip" style={{ background: s.hex }} />
                ))}
              </div>
              <div className="dx-card__cta">View live specimen →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
