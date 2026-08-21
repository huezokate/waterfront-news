import type { Meta, StoryObj } from '@storybook/react-vite';
import ChapterView from './ChapterView';
import { YERBA_BUENA_EVENTS } from '../../data/nightYerbaBuena';

/* The whole chapter page — the same component the /night/yerba-buena/:id route
   renders, so what you see here is what ships.

   Pick a hero and watch the byline on the landscape, the opening paragraph of
   the dispatch, the chat and the audio walk all rebind together. */

const neighbours = (id: string) => {
  const i = YERBA_BUENA_EVENTS.findIndex((e) => e.id === id);
  return {
    event: YERBA_BUENA_EVENTS[i],
    prev: i > 0 ? YERBA_BUENA_EVENTS[i - 1] : undefined,
    next: i < YERBA_BUENA_EVENTS.length - 1 ? YERBA_BUENA_EVENTS[i + 1] : undefined,
  };
};

const meta = {
  title: 'Night Dispatch/Chapter page',
  component: ChapterView,
  args: neighbours('invasion'),
  argTypes: {
    event: {
      options: YERBA_BUENA_EVENTS.map((e) => e.id),
      mapping: Object.fromEntries(YERBA_BUENA_EVENTS.map((e) => [e.id, e])),
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof ChapterView>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 1849 — an officeholder, a merchant and a restaurateur of the Chinese quarter. */
export const WaterfrontInvasion: Story = {};

/** The strongest disagreement in the trail: the mayor, the man who led the
    Vigilance Committee, and a Black merchant who could not testify in court. */
export const FireAndVigilantes: Story = { args: neighbours('fire-vigilance') };

/** First chapter — nothing before it, so the "date before" slot is empty. */
export const FirstChapter: Story = { args: neighbours('trading-post') };

/** Last chapter — the trail runs out after 1870. */
export const LastChapter: Story = { args: neighbours('railroad') };

/** Longest dispatch against the shortest, to check the column at both extremes. */
export const LongestDispatch: Story = { args: neighbours('silver-war') };
