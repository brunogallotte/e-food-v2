import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'efood-red-100': '#E66767',
        'efood-beige-100': '#FFF8F2',
        'efood-beige-200': '#FFEBD9',
      },

      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        overlayHidden: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
        contentHidden: {
          from: {
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1)',
          },
          to: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
        },
      },

      animation: {
        overlayShow: 'overlayShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayHidden: 'overlayHidden 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentHidden: 'contentHidden 200ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config
