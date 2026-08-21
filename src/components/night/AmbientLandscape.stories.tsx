import type { Meta, StoryObj } from '@storybook/react-vite';
import AmbientLandscape from './AmbientLandscape';
import { YERBA_BUENA_EVENTS } from '../../data/nightYerbaBuena';
import { heroById } from '../../data/heroes';

/* Full-bleed, so these stories drop the 720px column. There is no finished
   loop yet — `video` is undefined everywhere and the poster takes a slow Ken
   Burns push instead. Point `video` at a file in public/ to see the real thing. */

const gold = YERBA_BUENA_EVENTS.find((e) => e.id === 'gold')!;

const meta = {
  title: 'Night Dispatch/AmbientLandscape',
  component: AmbientLandscape,
  parameters: { column: false },
  args: {
    poster: gold.image,
    years: gold.years,
    title: gold.title,
    credit: `told by ${heroById(gold.heroes[1].heroId).name}`,
  },
} satisfies Meta<typeof AmbientLandscape>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** No hero picked yet — the credit line is absent. */
export const Uncredited: Story = { args: { credit: undefined } };

/** The longest title in the trail, against the widest plate. */
export const LongTitle: Story = {
  args: {
    poster: 'historic/4-2-3b-1853-butlersf-boardwalks.png',
    years: '1853–1855',
    title: 'Streets Over Water',
    credit: 'told by Mary Ellen Pleasant',
  },
};

/** Every chapter's opening frame, stacked — a quick read on the art direction. */
export const EveryChapter: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 4 }}>
      {YERBA_BUENA_EVENTS.map((e) => (
        <AmbientLandscape
          key={e.id}
          poster={e.image}
          video={e.video}
          years={e.years}
          title={e.title}
          credit={`told by ${heroById(e.heroes[0].heroId).name}`}
        />
      ))}
    </div>
  ),
};
