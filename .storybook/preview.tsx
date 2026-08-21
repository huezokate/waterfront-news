import type { Preview } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import '../src/styles/directions.css';
import '../src/styles/night.css';

/* Every TimeLens component is a Direction D component: it expects the slate
   ground, the ember gradients and the theme variables that .dx--d carries. So
   the theme is not an addon toggle here — it is the frame every story renders
   inside, and it mirrors the real app:

     .app-shell   430px phone frame, overflow clipped  →  parameters.frame
     .dx-page     720px column with 20px padding       →  parameters.column

   The shell matters. Anything that bleeds to the edges has to bleed to the
   COLUMN, not to 100vw, or it builds an element wider than the frame and gets
   sliced. Set `frame: false` to inspect a component at full window width, or
   `column: false` to drop the padded column for something full-bleed. */

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: 'todo' },
  },

  decorators: [
    (Story, context) => {
      const framed = context.parameters.frame !== false;
      const column = context.parameters.column !== false;

      const inner = column ? (
        <div className="dx-page">
          <Story />
        </div>
      ) : (
        <Story />
      );

      return (
        <MemoryRouter>
          <div
            className="dx dx--d nx"
            style={{
              minHeight: '100vh',
              maxWidth: framed ? 430 : undefined,
              margin: '0 auto',
              overflowX: 'hidden',
            }}
          >
            {inner}
          </div>
        </MemoryRouter>
      );
    },
  ],
};

export default preview;
