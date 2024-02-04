import type { Config } from 'tailwindcss'
import path from 'path'
import preset from '../../packages/corpus/themes/patient'

const corpusPath = `${path.dirname(
  require.resolve('@quin/corpus'),
)}/**/*.{js,jsx,ts,tsx}`

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}', corpusPath],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [preset],
} satisfies Config
