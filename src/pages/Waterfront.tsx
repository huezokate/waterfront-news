import { Link } from 'react-router-dom';
import '../styles/victorian.css';
import rawData from '../data/yerbaBuena.json';
import { VbNav } from './Explore';

/* ── Types (subset of yerbaBuena.json we read here) ─────────────── */
interface YBEvent { id: string; year: string; title: string; images: string[]; }
interface Period { id: string; range: string; title: string; events: YBEvent[]; }
interface YBData { location: { id: string; name: string; city: string }; periods: Period[]; }

const data = rawData as unknown as YBData;
const asset = (p: string) => import.meta.env.BASE_URL + p.replace(/^\//, '');

/* placeholder teaser copy — structure over content per the brief */
const TEASER =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
  'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

/* ── Arched blackletter nameplate (SVG textPath on an upward arc) ── */
function ArchedTitle({ text }: { text: string }) {
  return (
    <svg
      className="wf-arch"
      viewBox="0 0 800 250"
      role="img"
      aria-label={text}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* upward arch: rises from lower-left to a peak, back down to lower-right */}
        <path id="wf-arch-path" d="M 50 235 Q 400 25 750 235" fill="none" />
      </defs>
      <text className="wf-arch__text" textAnchor="middle">
        <textPath href="#wf-arch-path" startOffset="50%">{text}</textPath>
      </text>
    </svg>
  );
}

/* ── A single repeatable period block ──────────────────────────────
   2×3 sub-grid: thumbnail in the top-left third, headline beside it,
   body text spanning the full width below. One block per period. */
function PeriodBlock({ period, index }: { period: Period; index: number }) {
  const romans = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
  const thumb = period.events[0]?.images[0];
  return (
    <Link className="wf-card" to="/yerba-buena" aria-label={`${period.title} — ${period.range}`}>
      <figure className="wf-card__thumb">
        {thumb && <img src={asset(thumb)} alt="" loading="lazy" />}
        <span className="wf-card__halftone" aria-hidden="true" />
        <span className="wf-card__play" aria-hidden="true">▶</span>
      </figure>

      <div className="wf-card__head">
        <div className="wf-card__kicker">
          <span className="vb-fleuron" aria-hidden="true">❦</span> Chapter {romans[index]}
        </div>
        <h2 className="wf-card__title">{period.title}</h2>
        <div className="wf-card__range">{period.range}</div>
      </div>

      <div className="wf-card__body">
        <p className="wf-card__teaser">{TEASER}</p>
        <span className="wf-card__more">
          Read {period.events.length} dispatches <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */
export default function Waterfront() {
  return (
    <div className="vb">
      {/* Arched masthead */}
      <header className="wf-masthead">
        <div className="wf-masthead__kicker">San Francisco · Illustrated</div>
        <ArchedTitle text="Waterfront" />
      </header>

      {/* Hero visual — block-print woodcut transitioning into modern photo.
          Placeholder for now; real art drops into .wf-hero__art. */}
      <section className="wf-hero" aria-label="Feature illustration (coming soon)">
        <div className="wf-hero__art">
          <span className="wf-hero__side wf-hero__side--woodcut">The Woodcut</span>
          <span className="wf-hero__arrow" aria-hidden="true">→</span>
          <span className="wf-hero__side wf-hero__side--modern">The Photograph</span>
        </div>
        <p className="wf-hero__note">Feature illustration — block-print fading into modern photo · to come</p>
      </section>

      {/* Folio / issue rule — the bold printer's line under the hero */}
      <div className="wf-folio">
        <span>No. 1 · Vol. I</span>
        <span className="wf-folio__center">San Francisco · Saturday</span>
        <span>Five Cents</span>
      </div>

      {/* Repeatable period grid — one block per historic period */}
      <div className="wf-grid">
        {data.periods.map((p, i) => (
          <PeriodBlock key={p.id} period={p} index={i} />
        ))}
      </div>

      <VbNav active="explore" />
    </div>
  );
}
