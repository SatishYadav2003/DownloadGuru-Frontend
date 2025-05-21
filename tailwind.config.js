
module.exports = {
  content: [
    "./index.html",          // if using Vite
    "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your setup
  ],
  theme: {
    extend: {
      screens: {
        'xs': '275px', // custom breakpoint
      },
      scrollBehavior: ['responsive']
    },
  },
  plugins: [],
};
