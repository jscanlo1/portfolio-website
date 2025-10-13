import typography from '@tailwindcss/typography'

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'ui-sans-serif', 'system-ui'],
        serif: ['Lora', 'ui-serif', 'Georgia', 'serif'],
        title: ['Spectral', 'ui-serif', 'Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1a1a1a',
            maxWidth: '65ch',
            h1: { color: '#4A1D12' },
            h2: { color: '#4A1D12' },
            strong: { color: '#4A1D12' },
            a: {
              color: '#4A1D12',
              textDecoration: 'underline',
              '&:hover': { color: '#5b2a18' },
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: '#d6c9b6',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
}
