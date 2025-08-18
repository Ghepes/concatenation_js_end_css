const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Serve static files normally
app.use(express.static(path.join(__dirname, 'public')));

// Handle JS file combinations
app.get(/^\/([a-zA-Z0-9_-]+\.js\+)+[a-zA-Z0-9_-]+\.js$/, (req, res) => {
  const requestedPath = decodeURIComponent(req.path);
  
  const files = requestedPath
    .split('+')
    .map(f => f.replace(/^\//, '')) // Remove leading slash
    .filter(f => f.endsWith('.js')); // Only process .js files

  // If no valid JS files found
  if (files.length === 0) {
    return res.status(400).send('No valid JS files requested');
  }

  let output = '';
  let missingFiles = [];

  try {
    for (const file of files) {
      const filePath = path.join(__dirname, 'public', file);
      if (fs.existsSync(filePath)) {
        output += fs.readFileSync(filePath, 'utf8') + '\n;\n';
      } else {
        missingFiles.push(file);
      }
    }

    if (missingFiles.length > 0) {
      return res.status(404).send(`Missing files: ${missingFiles.join(', ')}`);
    }

    res.setHeader('Content-Type', 'application/javascript');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(output);
  } catch (err) {
    res.status(500).send('Error processing files');
  }
});


app.use((req, res) => {
  res.status(404).send('Not found');
});


app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
