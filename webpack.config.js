const path = require("path");

module.exports = {
  target: "node", // This ensures compatibility with Node.js
  entry: "./index.js", // Replace with your script's filename
  output: {
    filename: "bs-restoreFromSync.js",
    path: path.resolve(__dirname, "dist"), // Output directory
  },
};
