import { useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import '../styles/directions.css';
import '../styles/night.css';
import { YERBA_BUENA_EVENTS } from '../data/nightYerbaBuena';
import { useCameraFocus } from '../lib/nightFx';
import ScrollProgress from '../components/ScrollProgress';
import ChapterView from '../components/night/ChapterView';

/* Route wrapper: resolve the chapter and its neighbours, then hand off to
   ChapterView, which owns the flow. */
export default function NightEvent() {
  const { id } = useParams();
  const idx = YERBA_BUENA_EVENTS.findIndex((e) => e.id === id);

  const rootRef = useRef<HTMLDivElement>(null);
  useCameraFocus(true, rootRef);

  if (idx === -1) return <Navigate to="/night/yerba-buena" replace />;
  const ev = YERBA_BUENA_EVENTS[idx];

  return (
    <div className="dx dx--d nx" ref={rootRef}>
      <ScrollProgress />
      <div className="dx-page">
        <nav className="dx-bar" aria-label="Chapter">
          <Link to="/night/yerba-buena">← All chapters</Link>
          <span>Chapter {idx + 1} of {YERBA_BUENA_EVENTS.length}</span>
        </nav>

        <ChapterView
          event={ev}
          prev={idx > 0 ? YERBA_BUENA_EVENTS[idx - 1] : undefined}
          next={idx < YERBA_BUENA_EVENTS.length - 1 ? YERBA_BUENA_EVENTS[idx + 1] : undefined}
        />
      </div>
    </div>
  );
}
