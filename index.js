const fs = require("fs");
const path = require("path");

// Read and parse the JSON file
const jsonData = JSON.parse(fs.readFileSync("local-sync.json", "utf8"));

// Extract the array of files
const files = jsonData.files.download;

// Function to ensure directory exists
function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

// Process each file entry
files.forEach((file) => {
  const sourcePath = path.join(__dirname, file.link);
  const destPath = path.join(__dirname, "source", file.name);

  // Ensure the destination directory exists
  ensureDirectoryExistence(destPath);

  // Copy the file from source to destination
  fs.copyFileSync(sourcePath, destPath);
});

console.log("Files copied successfully.");
