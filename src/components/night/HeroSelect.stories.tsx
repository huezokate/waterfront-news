import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import HeroSelect from './HeroSelect';
import { YERBA_BUENA_EVENTS } from '../../data/nightYerbaBuena';
import { heroById } from '../../data/heroes';

/* The one act of play in a chapter. Selection is controlled, so the chapter
   page can rebind the dispatch, the chat and the audio walk from the same
   state. Arrow keys move between heroes — it is a radiogroup, not three
   buttons. */

const castFor = (id: string) =>
  YERBA_BUENA_EVENTS.find((e) => e.id === id)!.heroes.map((c) => heroById(c.heroId));

const meta = {
  title: 'Night Dispatch/HeroSelect',
  component: HeroSelect,
  args: {
    heroes: castFor('invasion'),
    selectedId: castFor('invasion')[0].id,
    onSelect: () => {},
  },
} satisfies Meta<typeof HeroSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const Interactive = ({ heroes }: { heroes: ReturnType<typeof castFor> }) => {
  const [selectedId, setSelectedId] = useState(heroes[0].id);
  return <HeroSelect heroes={heroes} selectedId={selectedId} onSelect={setSelectedId} />;
};

export const Default: Story = {
  render: () => <Interactive heroes={castFor('invasion')} />,
};

/** Longest names in the cast — the label has to wrap without breaking the row. */
export const LongNames: Story = {
  render: () => <Interactive heroes={castFor('trading-post')} />,
};

/** The street voice pre-selected, as it would be when a reader follows one
    hero down the trail from the previous chapter. */
export const CarriedSelection: Story = {
  render: () => {
    const heroes = castFor('fire-vigilance');
    return <Interactive key="carried" heroes={[heroes[2], heroes[0], heroes[1]]} />;
  },
};
