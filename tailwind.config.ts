import type { Config } from "tailwindcss";
import scrollbarHide from 'tailwind-scrollbar-hide'

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        '60vh': '60vh',
        '50vh': '50vh',
        '48vh': '48vh',
      },
      fontFamily: {
				'сormorant': ['Cormorant'],
			},
      margin:{
        '45%': '45%',
        '136.5px': '136.5px'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
} satisfies Config;
