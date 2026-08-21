import type { Meta, StoryObj } from '@storybook/react-vite';
import HeroChat from './HeroChat';
import { HEROES } from '../../data/heroes';

/* Mocked: typed questions and mic taps get canned in-character replies from
   `hero.voice`, and the speaker plays a fake clip. Switching heroes clears the
   log — try the Emperor after Mrs. Pleasant. */

const meta = {
  title: 'Night Dispatch/HeroChat',
  component: HeroChat,
  args: { hero: HEROES.pleasant, years: '1856–1865', clipTitle: 'Silver & War' },
  argTypes: {
    hero: {
      options: Object.keys(HEROES),
      mapping: HEROES,
      control: { type: 'select' },
    },
  },
  decorators: [(Story) => <div style={{ paddingTop: 20 }}><Story /></div>],
} satisfies Meta<typeof HeroChat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TheEmperor: Story = {
  args: { hero: HEROES.norton, years: '1866–1870', clipTitle: 'Rails Meet Bay' },
};

export const ShortName: Story = {
  args: { hero: HEROES.briones, years: '1833–1845', clipTitle: 'The Trading Post' },
};
