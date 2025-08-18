const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

// Serve static files din /public
app.use(express.static(path.join(__dirname, "..", "public")));

// Combina JS
app.get(/^\/([a-zA-Z0-9_-]+\.js\+)+[a-zA-Z0-9_-]+\.js$/, (req, res) => {
  const requestedPath = decodeURIComponent(req.path);

  const files = requestedPath
    .split("+")
    .map(f => f.replace(/^\//, ""))
    .filter(f => f.endsWith(".js"));

  if (files.length === 0) {
    return res.status(400).send("No valid JS files requested");
  }

  let output = "";
  let missingFiles = [];

  try {
    for (const file of files) {
      const filePath = path.join(__dirname, "..", "public", file);
      if (fs.existsSync(filePath)) {
        output += fs.readFileSync(filePath, "utf8") + "\n;\n";
      } else {
        missingFiles.push(file);
      }
    }

    if (missingFiles.length > 0) {
      return res.status(404).send(`Missing files: ${missingFiles.join(", ")}`);
    }

    res.setHeader("Content-Type", "application/javascript");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.send(output);
  } catch (err) {
    res.status(500).send("Error processing files");
  }
});


// Export
module.exports = app;
