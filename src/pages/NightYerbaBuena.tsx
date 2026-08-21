import { Link } from 'react-router-dom';
import '../styles/directions.css';
import '../styles/night.css';
import { YERBA_BUENA_EVENTS } from '../data/nightYerbaBuena';
import { useCameraFocus, useScrollReveal } from '../lib/nightFx';
import ScrollProgress from '../components/ScrollProgress';
import MasonryGrid from '../components/night/MasonryGrid';
import PlateCard from '../components/night/PlateCard';

/* Yerba Buena browse — Direction D prototype. Masonry of historic plates; each
   plate is picture + date, and tapping either opens the chapter. */
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

        <MasonryGrid>
          {YERBA_BUENA_EVENTS.map((e, i) => (
            <PlateCard
              key={e.id}
              to={`/night/yerba-buena/${e.id}`}
              image={e.image}
              years={e.years}
              title={e.title}
              delayMs={(i % 3) * 60}
            />
          ))}
        </MasonryGrid>
      </div>
    </div>
  );
}
