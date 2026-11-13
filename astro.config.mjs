import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://inkunalmahajan.github.io',
  base: '/Portfolio',
  vite: { plugins: [tailwindcss()] },
});
