import type { Meta, StoryObj } from '@storybook/react-vite';
import SectionHead from './SectionHead';

const meta = {
  title: 'Night Dispatch/SectionHead',
  component: SectionHead,
  args: { label: 'Select the hero', hint: 'Three people were here. They do not agree.' },
} satisfies Meta<typeof SectionHead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutHint: Story = { args: { hint: undefined } };

/** The three headers used down a chapter page, in order. */
export const AsUsed: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 30, padding: '20px 0' }}>
      <SectionHead label="Select the hero" hint="Three people were here. They do not agree." />
      <SectionHead label="Along the water" hint="The same shoreline, one step either way." />
      <SectionHead label="Drill down into the history" hint="Three ways deeper into 1849." />
    </div>
  ),
};
