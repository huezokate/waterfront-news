import { useEffect, useState } from 'react';
import { PLATE_KIND_LABEL, platesFor } from '../../data/archive';
import type { Plate } from '../../data/archive';
import { asset } from '../../lib/asset';
import DrillDownCard from './DrillDownCard';
import { CloseIcon } from './icons';

/* "Dive into the historic materials" — the primary way into a chapter, and the
   only one that is not a placeholder: these scans are already in the repo.

   The card opens a grid of the chapter's plates in place rather than routing
   away, because browsing the source material is a side trip from the story,
   not a departure from it. Tapping a plate opens it full-screen with its
   caption. */

export interface ArchiveShelfProps {
  chapterId: string;
  years: string;
  /** Open on first render — for stories and for deep links later. */
  defaultOpen?: boolean;
}

export default function ArchiveShelf({ chapterId, years, defaultOpen = false }: ArchiveShelfProps) {
  const plates = platesFor(chapterId);
  const [open, setOpen] = useState(defaultOpen);
  const [zoomed, setZoomed] = useState<Plate | null>(null);

  // Collapse and drop the lightbox when the reader moves to another chapter.
  useEffect(() => {
    setOpen(defaultOpen);
    setZoomed(null);
  }, [chapterId, defaultOpen]);

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomed(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoomed]);

  if (plates.length === 0) return null;

  const counts = plates.reduce<Record<string, number>>((acc, p) => {
    acc[p.kind] = (acc[p.kind] ?? 0) + 1;
    return acc;
  }, {});
  const mix = Object.keys(counts)
    .map((k) => PLATE_KIND_LABEL[k as Plate['kind']].toLowerCase())
    .join(', ');

  return (
    <div className="nx-archive">
      <DrillDownCard
        kind="archive"
        emphasis="primary"
        title="Dive into the historic materials"
        meta={`${plates.length} plate${plates.length === 1 ? '' : 's'}`}
        blurb={`Browse the actual sheets this chapter was built from — ${mix} — scanned at full size.`}
        thumb={plates[0].file}
        cta={open ? 'Close the drawer' : 'Open the drawer'}
        expanded={open}
        onOpen={() => setOpen((o) => !o)}
      />

      {open && (
        <div className="nx-archive__grid">
          {plates.map((p) => (
            <button
              key={p.file}
              type="button"
              className="nx-plate"
              onClick={() => {
                navigator.vibrate?.(8);
                setZoomed(p);
              }}
            >
              <img src={asset(p.file)} alt={p.title} loading="lazy" />
              <span className="nx-plate__cap">
                <span className="nx-plate__kind">
                  {PLATE_KIND_LABEL[p.kind]}
                  {p.year ? ` · ${p.year}` : ' · undated'}
                </span>
                <span className="nx-plate__title">{p.title}</span>
              </span>
            </button>
          ))}
        </div>
      )}

      {zoomed && (
        <div
          className="nx-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={zoomed.title}
          onClick={() => setZoomed(null)}
        >
          <button
            type="button"
            className="nx-lightbox__close"
            onClick={() => setZoomed(null)}
            aria-label="Close the plate"
          >
            <CloseIcon />
          </button>
          <img
            className="nx-lightbox__img"
            src={asset(zoomed.file)}
            alt={zoomed.title}
            onClick={(e) => e.stopPropagation()}
          />
          <p className="nx-lightbox__cap">
            <span className="nx-plate__kind">
              {PLATE_KIND_LABEL[zoomed.kind]}
              {zoomed.year ? ` · ${zoomed.year}` : ' · undated'}
            </span>
            <span className="nx-lightbox__title">{zoomed.title}</span>
            <span className="nx-lightbox__years">from {years}</span>
          </p>
        </div>
      )}
    </div>
  );
}
