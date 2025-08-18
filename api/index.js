const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const app = express();

app.get('/*', (req, res) => {
  try {
    const requestedPath = decodeURIComponent(req.path);
    // Log pentru a vedea ce request primim
    console.log(`Request received for path: ${requestedPath}`);

    const files = requestedPath.substring(1).split('+')
      .filter(f => f.endsWith('.js'));
    
    console.log('Files to process:', files);

    if (files.length === 0) {
      return res.status(400).send('No valid JS files requested');
    }

    let output = '';
    const missingFiles = [];

    for (const file of files) {
      const projectRoot = process.cwd();
      const filePath = path.join(projectRoot, 'public', file);

      // Log esențial pentru a vedea calea exactă
      console.log(`Attempting to read file from: ${filePath}`);

      if (fs.existsSync(filePath)) {
        console.log(`SUCCESS: Found file ${file}`);
        const fileHash = crypto.createHash('md5').update(file).digest('hex').substring(0, 16);
        output += `;// __FILE_CONTENT_FOR__:${fileHash}.js\n`;
        output += fs.readFileSync(filePath, 'utf8').trim() + '\n\n';
      } else {
        console.error(`ERROR: File not found at ${filePath}`);
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
    // Log pentru orice altă eroare neașteptată
    console.error('CRITICAL ERROR:', err);
    res.status(500).send(`Server Error: ${err.message}`);
  }
});

module.exports = app;
