const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};
