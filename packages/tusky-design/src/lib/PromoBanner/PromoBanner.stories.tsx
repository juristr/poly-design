import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { PromoBanner } from './PromoBanner';

const meta = {
  title: 'Atoms/PromoBanner',
  component: PromoBanner,
  tags: ['autodocs'],
} satisfies Meta<typeof PromoBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Free shipping on all orders over $50! Shop now and save.',
  },
};

export const RenderTest: Story = {
  args: {
    children: 'Free shipping on all orders over $50! Shop now and save.',
    'aria-label': 'Promotional banner',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const banner = canvas.getByRole('region', { name: 'Promotional banner' });
    await expect(banner).toBeInTheDocument();
    await expect(banner).toHaveClass('bg-indigo-600');
  },
};
