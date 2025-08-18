const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

// servește static /public
app.use(express.static(path.join(__dirname, "..", "public")));

// handler concatenare JS & CSS
app.get(/^\/(.+\.(js|css)(\+.+\.(js|css))+)/, (req, res) => {
  // normalizează (acceptă și +, și spațiu – pt. Vercel)
  const requestedPath = decodeURIComponent(req.url.split("?")[0]);

  const files = requestedPath
    .replace(/^\//, "")
    .split(/[\+\s]+/)
    .filter(f => f.endsWith(".js") || f.endsWith(".css"));

  if (files.length === 0) {
    return res.status(400).send("No valid files requested");
  }

  // detectăm tipul (toate .js sau toate .css)
  const ext = path.extname(files[0]);
  if (!files.every(f => path.extname(f) === ext)) {
    return res.status(400).send("Cannot mix JS and CSS in one request");
  }

  let output = "";
  let missingFiles = [];

  try {
    for (const file of files) {
      const filePath = path.join(__dirname, "..", "public", file);
      if (fs.existsSync(filePath)) {
        output += fs.readFileSync(filePath, "utf8") + "\n";
      } else {
        missingFiles.push(file);
      }
    }

    if (missingFiles.length > 0) {
      return res.status(404).send(`Missing files: ${missingFiles.join(", ")}`);
    }

    res.setHeader(
      "Content-Type",
      ext === ".js" ? "application/javascript" : "text/css"
    );
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.send(output);
  } catch (err) {
    res.status(500).send("Error processing files");
  }
});

module.exports = app;
