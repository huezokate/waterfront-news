import type { Meta, StoryObj } from '@storybook/react-vite';
import TimelineStep from './TimelineStep';
import SectionHead from './SectionHead';
import { YERBA_BUENA_EVENTS } from '../../data/nightYerbaBuena';

/* The date before and the date after. Dated plates rather than prev/next
   arrows, because the date is what the reader is actually navigating by. */

const [, before, current, after] = YERBA_BUENA_EVENTS;

const meta = {
  title: 'Night Dispatch/TimelineStep',
  component: TimelineStep,
  args: {
    direction: 'before',
    to: `/night/yerba-buena/${before.id}`,
    image: before.image,
    years: before.years,
    title: before.title,
  },
  argTypes: {
    direction: { control: { type: 'inline-radio' }, options: ['before', 'after'] },
  },
  decorators: [(Story) => <div style={{ paddingTop: 20 }}><Story /></div>],
} satisfies Meta<typeof TimelineStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Before: Story = {};

export const After: Story = {
  args: {
    direction: 'after',
    to: `/night/yerba-buena/${after.id}`,
    image: after.image,
    years: after.years,
    title: after.title,
  },
};

/** The pair as they sit on a chapter page, mirrored around the current date. */
export const Pair: Story = {
  render: () => (
    <section className="nx-timeline">
      <SectionHead label="Along the water" hint={`Either side of ${current.years}.`} />
      <div className="nx-timeline__row">
        <TimelineStep
          direction="before"
          to={`/night/yerba-buena/${before.id}`}
          image={before.image}
          years={before.years}
          title={before.title}
        />
        <TimelineStep
          direction="after"
          to={`/night/yerba-buena/${after.id}`}
          image={after.image}
          years={after.years}
          title={after.title}
        />
      </div>
    </section>
  ),
};

/** First and last chapters have only one neighbour. */
export const EndOfTrail: Story = {
  render: () => (
    <div className="nx-timeline__row">
      <TimelineStep
        direction="before"
        to={`/night/yerba-buena/${before.id}`}
        image={before.image}
        years={before.years}
        title={before.title}
      />
      <p className="nx-step nx-step--empty">The trail ends here — for now.</p>
    </div>
  ),
};
