import type { Meta, StoryObj } from '@storybook/react-vite';
import PlateCard from './PlateCard';
import MasonryGrid from './MasonryGrid';
import { YERBA_BUENA_EVENTS } from '../../data/nightYerbaBuena';
import { heroById } from '../../data/heroes';

/* The browse tile. Picture and date together are the tap target; the three
   small faces underneath are the only place the mechanic shows before you
   open a chapter. */

const first = YERBA_BUENA_EVENTS[0];

const meta = {
  title: 'Night Dispatch/PlateCard',
  component: PlateCard,
  args: {
    to: `/night/yerba-buena/${first.id}`,
    image: first.image,
    years: first.years,
    title: first.title,
    heroes: first.heroes.map((c) => heroById(c.heroId)),
  },
  decorators: [(Story) => <div style={{ maxWidth: 220, paddingTop: 20 }}><Story /></div>],
} satisfies Meta<typeof PlateCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** A tall plate — the masonry has to swallow any aspect ratio. */
export const TallImage: Story = {
  args: {
    image: 'historic/4-2-4f-1854-water-lot-auction-catalog-title-page-n-manuscrip.jpeg',
    years: '1854',
    title: 'Water Lot Auction',
  },
};

/** The whole browse grid — this is the screen the reader lands on. */
export const InTheGrid: Story = {
  decorators: [(Story) => <Story />],
  render: () => (
    <MasonryGrid>
      {YERBA_BUENA_EVENTS.map((e, i) => (
        <PlateCard
          key={e.id}
          to={`/night/yerba-buena/${e.id}`}
          image={e.image}
          years={e.years}
          title={e.title}
          heroes={e.heroes.map((c) => heroById(c.heroId))}
          delayMs={(i % 3) * 60}
        />
      ))}
    </MasonryGrid>
  ),
};
