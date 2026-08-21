import type { Meta, StoryObj } from '@storybook/react-vite';
import DrillDownCard from './DrillDownCard';
import SectionHead from './SectionHead';
import { MAKING_OF, YERBA_BUENA_EVENTS } from '../../data/nightYerbaBuena';
import { heroById } from '../../data/heroes';

/* Three ways further into a chapter. Note `pending`: none of this material has
   been recorded yet, and the card says so rather than offering a dead click —
   the prototype should not lie to whoever is reviewing it. Flip `pending` off
   in the controls to see the finished state. */

const invasion = YERBA_BUENA_EVENTS.find((e) => e.id === 'invasion')!;
const asing = heroById('asing');

const meta = {
  title: 'Night Dispatch/DrillDownCard',
  component: DrillDownCard,
  args: {
    kind: 'audio',
    title: `Walk ${invasion.title} with ${asing.short}`,
    meta: '5 min',
    blurb: `${asing.name} takes the whole chapter at walking pace — the parts a thirty-second dispatch has to leave out.`,
    thumb: invasion.image,
    pending: true,
  },
  argTypes: {
    kind: { control: { type: 'inline-radio' }, options: ['audio', 'historian', 'film'] },
  },
  decorators: [(Story) => <div style={{ paddingTop: 20 }}><Story /></div>],
} satisfies Meta<typeof DrillDownCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AudioWalk: Story = {};

/** No thumbnail: the historian's reaction has no artwork of its own yet. */
export const HistorianReacts: Story = {
  args: {
    kind: 'historian',
    title: invasion.historian.field,
    meta: invasion.historian.runtime,
    blurb: invasion.historian.angle,
    thumb: undefined,
  },
};

export const BehindTheTrail: Story = {
  args: {
    kind: 'film',
    title: MAKING_OF.title,
    meta: MAKING_OF.runtime,
    blurb: MAKING_OF.blurb,
    thumb: MAKING_OF.poster,
  },
};

/** What the card looks like once the material exists and the click is live. */
export const Recorded: Story = {
  args: { pending: false },
};

/** The section as it sits on a chapter page, all three cards pending. */
export const TheWholeSection: Story = {
  decorators: [(Story) => <Story />],
  render: () => (
    <section className="nx-drills">
      <SectionHead
        label="Drill down into the history"
        hint={`Three ways deeper into ${invasion.years}.`}
      />
      <div className="nx-drills__stack">
        <DrillDownCard
          kind="audio"
          title={`Walk ${invasion.title} with ${asing.short}`}
          meta="5 min"
          blurb={`${asing.name} takes the whole chapter at walking pace — the parts a thirty-second dispatch has to leave out.`}
          thumb={invasion.image}
          pending
        />
        <DrillDownCard
          kind="historian"
          title={invasion.historian.field}
          meta={invasion.historian.runtime}
          blurb={invasion.historian.angle}
          pending
        />
        <DrillDownCard
          kind="film"
          title={MAKING_OF.title}
          meta={MAKING_OF.runtime}
          blurb={MAKING_OF.blurb}
          thumb={MAKING_OF.poster}
          pending
        />
      </div>
    </section>
  ),
};
