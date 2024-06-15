
// module.exports = {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}',
//      'node_modules/flowbite-react/lib/esm/**/*.js'
//   ],
//   plugins: [
//       require('flowbite/plugin')
//   ],
//   theme: {
//     extend: {
//     },
//   },
// };

const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};