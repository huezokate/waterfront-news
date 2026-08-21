/* Rule-and-label section header used down the chapter page, so every section
   below the landscape reads as a peer of the others. */

export interface SectionHeadProps {
  label: string;
  hint?: string;
  /** Renders as h2 by default; pass 3 for a nested group. */
  level?: 2 | 3;
}

export default function SectionHead({ label, hint, level = 2 }: SectionHeadProps) {
  const Tag = level === 2 ? 'h2' : 'h3';
  return (
    <div className="nx-sechead">
      <Tag className="nx-sechead__label">{label}</Tag>
      {hint && <p className="nx-sechead__hint">{hint}</p>}
    </div>
  );
}
