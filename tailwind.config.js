/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: '700',
              marginTop: '1em',
              marginBottom: '0.5em',
            },
            'ol, ul': {
              listStylePosition: 'inside',
              margin: '1em 0',
            },
            'ol > li, ul > li': {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            blockquote: {
              borderLeftWidth: '4px',
              borderLeftColor: '#e5e7eb',
              paddingLeft: '1em',
              fontStyle: 'italic',
            },
            strong: {
              fontWeight: '700',
              color: 'inherit',
            },
            img: {
              marginTop: '1em',
              marginBottom: '1em',
            }
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};