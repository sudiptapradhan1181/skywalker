import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        medium: 'var(--medium)',
        boldtext: 'var(--bold-text)',
        primarybg: 'var(--primary-bg)',
        secondarybg: 'var(--secondary-bg)',
      },
      screens: {
        xs: '480px', // Extra small devices
        sm: '640px', // Small devices (default in Tailwind)
        md: '768px', // Medium devices (default in Tailwind)
        lg: '1024px', // Large devices (default in Tailwind)
        xl: '1280px', // Extra large devices (default in Tailwind)
        '2xl': '1536px', // 2X large devices (default in Tailwind)
        '3xl': '1920px', // Ultra-large screens
        '4xl': '2560px', // 4K screens
        '5xl': '3200px', // Ultra-wide monitors
        portrait: { raw: '(orientation: portrait)' }, // Portrait mode
        landscape: { raw: '(orientation: landscape)' }, // Landscape mode
        retina: { raw: '(min-resolution: 2dppx)' }, // Retina screens
      },
    },
  },
  plugins: [],
} satisfies Config;
