import type { Preview } from '@storybook/vue3';
// CSS imports removed to fix dynamic import error
// These will be handled in main.ts staticDirs instead

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
