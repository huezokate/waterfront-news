/* Line icons shared by the chapter page — 1.8 stroke, currentColor, so they
   inherit the ember accent from whatever control holds them. */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export const MicIcon = ({ size = 20 }: { size?: number }) => (
  <svg {...base} width={size} height={size}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
  </svg>
);

export const SpeakerIcon = ({ size = 20 }: { size?: number }) => (
  <svg {...base} width={size} height={size}>
    <path d="M11 5 6.5 9H3v6h3.5L11 19V5z" />
    <path d="M15 9.5a4 4 0 0 1 0 5M17.5 7a7.5 7.5 0 0 1 0 10" />
  </svg>
);

export const SendIcon = ({ size = 20 }: { size?: number }) => (
  <svg {...base} width={size} height={size}>
    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

export const HeadphonesIcon = ({ size = 22 }: { size?: number }) => (
  <svg {...base} width={size} height={size}>
    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
    <rect x="2" y="14" width="5" height="7" rx="2" />
    <rect x="17" y="14" width="5" height="7" rx="2" />
  </svg>
);

export const CommentaryIcon = ({ size = 22 }: { size?: number }) => (
  <svg {...base} width={size} height={size}>
    <path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12z" />
    <path d="M9 11h6M9 14.5h3.5" />
  </svg>
);

export const FilmIcon = ({ size = 22 }: { size?: number }) => (
  <svg {...base} width={size} height={size}>
    <rect x="2.5" y="5" width="19" height="14" rx="2" />
    <path d="M10 9.2v5.6l5-2.8-5-2.8z" />
  </svg>
);
