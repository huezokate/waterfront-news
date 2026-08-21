import type { Meta, StoryObj } from '@storybook/react-vite';
import HeroAvatar from './HeroAvatar';
import { HEROES, STANDING_LABEL } from '../../data/heroes';

/* The avatar is the seam where the Meshy figurines will land. Until a render
   exists at `hero.figurine`, every story here shows the initialled fallback —
   which is what the prototype ships with today. */

const meta = {
  title: 'Night Dispatch/HeroAvatar',
  component: HeroAvatar,
  args: { hero: HEROES.pleasant, size: 'lg', selected: false, dimmed: false },
  argTypes: {
    hero: {
      options: Object.keys(HEROES),
      mapping: HEROES,
      control: { type: 'select' },
    },
    size: { control: { type: 'inline-radio' }, options: ['sm', 'lg'] },
  },
} satisfies Meta<typeof HeroAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** The ring colour encodes the hero's standing, so the triad reads at a glance. */
export const Standings: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, padding: '24px 0' }}>
      {[HEROES.geary, HEROES.brannan, HEROES.pleasant].map((h) => (
        <figure key={h.id} style={{ margin: 0, textAlign: 'center' }}>
          <HeroAvatar hero={h} size="lg" selected />
          <figcaption
            style={{
              marginTop: 8,
              font: "500 10px 'Space Grotesk', sans-serif",
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#97a1ab',
            }}
          >
            {STANDING_LABEL[h.standing]}
          </figcaption>
        </figure>
      ))}
    </div>
  ),
};

/** Every size, at rest / selected / dimmed. */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 22, padding: '24px 0' }}>
      {(['sm', 'lg'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <HeroAvatar hero={HEROES.norton} size={size} />
          <HeroAvatar hero={HEROES.norton} size={size} selected />
          <HeroAvatar hero={HEROES.norton} size={size} dimmed />
        </div>
      ))}
    </div>
  ),
};

/** The full cast, as it will look on the figurine shot-list. */
export const WholeCast: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: 18,
        padding: '24px 0',
      }}
    >
      {Object.values(HEROES).map((h) => (
        <figure key={h.id} style={{ margin: 0, textAlign: 'center' }}>
          <HeroAvatar hero={h} size="lg" />
          <figcaption
            style={{
              marginTop: 8,
              font: "500 11.5px 'Space Grotesk', sans-serif",
              color: '#eae5db',
              lineHeight: 1.3,
            }}
          >
            {h.name}
          </figcaption>
        </figure>
      ))}
    </div>
  ),
};
