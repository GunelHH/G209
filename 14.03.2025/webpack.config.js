const path = require("path");

module.exports = {
  entry: "./src/js/",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/bundle.js",
  },
  // mode: "development",
};
