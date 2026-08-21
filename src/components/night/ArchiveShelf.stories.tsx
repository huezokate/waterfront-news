import type { Meta, StoryObj } from '@storybook/react-vite';
import ArchiveShelf from './ArchiveShelf';
import { CHAPTER_PLATES } from '../../data/archive';

/* The one card in the drill-down that is not a placeholder — these scans are
   already in public/historic. It is outlined in the rust accent because it is
   the primary way into a chapter; everything else in the section is secondary
   and dashed until the material exists.

   The drawer opens in place rather than routing away: browsing the sheets is a
   side trip from the story, not a departure from it. */

const meta = {
  title: 'Night Dispatch/ArchiveShelf',
  component: ArchiveShelf,
  args: { chapterId: 'fire-vigilance', years: '1850–1851' },
  argTypes: {
    chapterId: {
      control: { type: 'select' },
      options: Object.keys(CHAPTER_PLATES),
    },
  },
  decorators: [(Story) => <div style={{ paddingTop: 20 }}><Story /></div>],
} satisfies Meta<typeof ArchiveShelf>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Collapsed — how it sits at the top of the drill-down. */
export const Closed: Story = {};

/** The drawer open: seven plates for the fire and the Vigilance Committee. */
export const Open: Story = { args: { defaultOpen: true } };

/** The richest chapter — maps, auction catalogues and two modern surveys of
    the ships buried under the plank streets. */
export const StreetsOverWater: Story = {
  args: { chapterId: 'streets-over-water', years: '1853–1855', defaultOpen: true },
};

/** A thin archive. The count on the card is real, so a chapter with two sheets
    says two rather than pretending. */
export const ThinArchive: Story = {
  args: { chapterId: 'silver-war', years: '1856–1865', defaultOpen: true },
};
