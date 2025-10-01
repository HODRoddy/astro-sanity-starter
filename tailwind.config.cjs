/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  // Your custom themes are included here
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#ffae9c",
          "primary-content": "#171227",
          "secondary": "#fff2d7",
          "secondary-content": "#171227",
          "accent": "#e3f1ff",
          "accent-content": "#171227",
          "neutral": "#2e293c",
          "neutral-content": "#ffffff",
          "base-100": "#171227",
          "base-200": "#2e293c",
          "base-content": "#ffffff",
        },
      },
      {
        light: {
          "primary": "#ffae9c",
          "primary-content": "#171227",
          "secondary": "#fff2d7",
          "secondary-content": "#171227",
          "accent": "#e3f1ff",
          "accent-content": "#171227",
          "neutral": "#171227",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#d7d8e4",
          "base-content": "#171227",
        },
      },
    ],
  },
}
