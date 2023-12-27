import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '350px', 'max': '600px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '600px', 'max': '785px'}, //768
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '785px', 'max': '992px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '992px', 'max': '1200px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1200px','max':'1500px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // darkMode: 'class',
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
