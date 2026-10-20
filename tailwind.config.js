/* eslint-disable import/no-extraneous-dependencies, global-require */
// Tokens follow Beautiful UI (beautifului.dev, MIT): the values live as CSS
// variables in src/styles/global.css (light on :root, dark on .dark).
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        page: 'var(--page)',
        canvas: 'var(--canvas)',
        surface: 'var(--surface)',
        inset: 'var(--inset)',
        field: 'var(--field)',
        hover: 'var(--hover)',
        'hover-2': 'var(--hover-2)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        'ink-3': 'var(--ink-3)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        'line-soft': 'var(--line-soft)',
        accent: 'var(--accent)',
        'accent-ink': 'var(--accent-ink)',
        'accent-tint': 'var(--accent-tint)',
        green: 'var(--green)',
        'green-tint': 'var(--green-tint)',
        orange: 'var(--orange)',
        'orange-tint': 'var(--orange-tint)',
        red: 'var(--red)',
        'red-tint': 'var(--red-tint)',
        // Aliases kept for the blog templates (Navbar, Footer, BlogCard).
        bg: 'var(--page)',
        'bg-elevated': 'var(--surface)',
        rule: 'var(--line)',
        text: 'var(--ink)',
        'text-muted': 'var(--ink-2)',
        'text-subtle': 'var(--ink-3)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
        display: ['var(--font-sans)'],
        body: ['var(--font-sans)'],
      },
      borderRadius: {
        chip: '6px',
        control: '8px',
        card: '10px',
      },
      boxShadow: {
        hairline: 'var(--shadow-hairline)',
        btn: 'var(--shadow-btn)',
        card: 'var(--shadow-card)',
        raised: 'var(--shadow-raised)',
        overlay: 'var(--shadow-overlay)',
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
      },
      maxWidth: {
        container: '1200px',
        80: '20rem',
        95: '23.75rem',
        110: '27.5rem',
      },
      transitionDuration: {
        400: '400ms',
      },
      letterSpacing: {
        mono: '0.12em',
        meta: '0.16em',
        tight2: '-0.02em',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
