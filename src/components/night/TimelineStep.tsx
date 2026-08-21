import { Link } from 'react-router-dom';
import { asset } from '../../lib/asset';

/* "What came before / what came after" — the two steps either side of this
   chapter, shown as dated plates rather than as prev/next arrows, because the
   date is the thing the reader is actually navigating by. */

export interface TimelineStepProps {
  direction: 'before' | 'after';
  to: string;
  image: string;
  years: string;
  title: string;
}

export default function TimelineStep({
  direction,
  to,
  image,
  years,
  title,
}: TimelineStepProps) {
  return (
    <Link
      className={`nx-step nx-step--${direction}`}
      to={to}
      onClick={() => navigator.vibrate?.(8)}
    >
      <img className="nx-step__thumb" src={asset(image)} alt="" loading="lazy" />
      <span className="nx-step__body">
        <span className="nx-step__kicker">
          {direction === 'before' ? '← The date before' : 'The date after →'}
        </span>
        <span className="nx-step__years">{years}</span>
        <span className="nx-step__title">{title}</span>
      </span>
    </Link>
  );
}
