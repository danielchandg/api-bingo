import { nextui } from '@nextui-org/react';

/**
 * @type {import('tailwindcss').Config}
 * @see https://nextjs.org/docs/app/building-your-application/styling/tailwind-css#configuring-tailwind
 * @see https://nextui.org/docs/frameworks/nextjs#tailwind-css-setup
 */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
}

