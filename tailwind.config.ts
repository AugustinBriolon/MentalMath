import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#415ac1',
        secondary: '#1b2448',
        tertiary: '#dee9fc',
      },
      maxWidth: {
        default: '1280px'
      },
      height: {
        'screen-header': 'calc(100vh - 65px)',
        'screen-header-mobile': 'calc(100vh - 106px)',
      },
      gridTemplateColumns: {
        'header': '170px 1fr 170px',
        'score': '25px 40px 1fr',
        'items': 'repeat(auto-fill, minmax(100px, 1fr))',
        'list': 'repeat(auto-fill, minmax(150px, 1fr))',
      },
      darkMode: 'class',
    },
  },
  plugins: [],
}
export default config
