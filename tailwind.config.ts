module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{vue,ts,js}",
    "./collector/**/*.{vue,ts,js}",
    "./composable/**/*.{vue,ts,js}",
    "./section/**/*.{vue,ts,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./childPages/**/*.vue",
    "./sections/**/*.vue",
    "./modal/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {}
  },
  plugins: []
};