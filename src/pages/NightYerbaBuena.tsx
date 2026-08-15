import { Link } from 'react-router-dom';
import '../styles/directions.css';
import '../styles/night.css';
import { YERBA_BUENA_EVENTS } from '../data/nightYerbaBuena';
import { asset } from '../lib/asset';
import { useCameraFocus, useScrollReveal } from '../lib/nightFx';
import ScrollProgress from '../components/ScrollProgress';

/* Yerba Buena browse — Direction D prototype. Masonry of historic plates;
   each stack = image / year / 2–3 word title. Tap a plate to open its chapter. */
export default function NightYerbaBuena() {
  const rootRef = useScrollReveal(true);
  useCameraFocus(true, rootRef);

  return (
    <div className="dx dx--d nx" ref={rootRef}>
      <ScrollProgress />
      <div className="dx-page">
        <nav className="dx-bar" aria-label="Prototype">
          <Link to="/directions/d">← Direction D</Link>
          <span>Waterfront Trail · Prototype</span>
        </nav>

        <header className="dx-masthead">
          <div className="dx-masthead__kicker">TimeLens · Chapter One of the Trail</div>
          <h1 className="dx-masthead__name">Yerba Buena Cove</h1>
          <div className="dx-masthead__rule">
            <span className="dx-fleuron">❦</span> 1833–1870 · Nine chapters · Tap a plate{' '}
            <span className="dx-fleuron">❦</span>
          </div>
        </header>

        <div className="nx-masonry">
          {YERBA_BUENA_EVENTS.map((e, i) => (
            <Link
              key={e.id}
              className="nx-stack dx-reveal"
              to={`/night/yerba-buena/${e.id}`}
              onClick={() => navigator.vibrate?.(10)}
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <img src={asset(e.image)} alt={`${e.title}, ${e.years}`} loading="lazy" />
              <span className="nx-stack__year">{e.years}</span>
              <span className="nx-stack__title">{e.title}</span>
              <span className="nx-stack__guide">told by {e.guide.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
