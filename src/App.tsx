import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Group from './pages/Group';
import Location from './pages/Location';
import Scan from './pages/Scan';
import YerbaBuena from './pages/YerbaBuena';
import Explore from './pages/Explore';
import Waterfront from './pages/Waterfront';
import Library from './pages/Library';
import Directions from './pages/Directions';
import Direction from './pages/Direction';
import NightYerbaBuena from './pages/NightYerbaBuena';
import NightEvent from './pages/NightEvent';

// SVG grain filter — defined once here, referenced throughout the app via url(#grain)
function GrainFilter() {
  return (
    <svg
      className="grain-filter-host"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="grain" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blend" />
          <feComposite in="blend" in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
    </svg>
  );
}

export default function App() {
  // .app-shell caps the legacy app at a 430px phone frame. The Direction D
  // routes have their own responsive layout and need the whole window.
  const { pathname } = useLocation();
  const wide = pathname.startsWith('/night') || pathname.startsWith('/directions');

  return (
    <div className={`app-shell${wide ? ' app-shell--wide' : ''}`}>
      <GrainFilter />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/group/:id" element={<Group />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/waterfront" element={<Waterfront />} />
        <Route path="/library" element={<Library />} />
        <Route path="/directions" element={<Directions />} />
        <Route path="/directions/:id" element={<Direction />} />
        <Route path="/night/yerba-buena" element={<NightYerbaBuena />} />
        <Route path="/night/yerba-buena/:id" element={<NightEvent />} />
        <Route path="/yerba-buena" element={<YerbaBuena />} />
        <Route path="/scan" element={<Scan />} />
      </Routes>
    </div>
  );
}
