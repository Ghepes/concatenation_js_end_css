const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const app = express();

// Middleware pentru a gestiona TOATE fișierele JS (inclusiv cele cu caractere speciale în URL)
app.get(/^\/(.+\.js)(?:\+(.+\.js))*$/, (req, res) => {
  try {
    const requestedPath = decodeURIComponent(req.path);
    const files = requestedPath.split('+')
      .filter(f => f.endsWith('.js'))
      .map(f => f.replace(/^\//, ''));

    if (files.length === 0) {
      return res.status(400).send('No valid JS files requested');
    }

    let output = '';
    const missingFiles = [];

    for (const file of files) {
      const filePath = path.join(__dirname, 'public', file);
      if (fs.existsSync(filePath)) {
        const fileHash = crypto.createHash('md5').update(file).digest('hex').substring(0, 16);
        output += `;// __FILE_CONTENT_FOR__:${fileHash}.js\n`;
        output += fs.readFileSync(filePath, 'utf8').trim() + '\n\n';
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
    res.status(500).send(`Error: ${err.message}`);
  }
});

// Fallback
app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
