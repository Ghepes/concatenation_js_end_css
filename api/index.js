const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const app = express();

app.use('/', (req, res) => {
  try {
    const requestedPath = decodeURIComponent(req.path);
    console.log(`Request received for path: ${requestedPath}`);

    let files = [];
    let contentType = '';
    let fileExtension = '';

    if (requestedPath.includes('.js')) {
      files = requestedPath.substring(1).split('+').filter(f => f.endsWith('.js'));
      contentType = 'application/javascript';
      fileExtension = '.js';
    } else if (requestedPath.includes('.css')) {
      files = requestedPath.substring(1).split('+').filter(f => f.endsWith('.css'));
      contentType = 'text/css';
      fileExtension = '.css';
    } else {
      return res.status(404).send('Not a JS or CSS file request.');
    }

    console.log('Files to process:', files);

    if (files.length === 0) {
      return res.status(400).send(`No valid ${fileExtension} files requested`);
    }

    let output = '';
    const missingFiles = [];

    for (const file of files) {
      const projectRoot = process.cwd();
      const filePath = path.join(projectRoot, 'public', file);

      console.log(`Attempting to read file from: ${filePath}`);

      if (fs.existsSync(filePath)) {
        console.log(`SUCCESS: Found file ${file}`);
        const fileHash = crypto.createHash('md5').update(file).digest('hex').substring(0, 16);

        // --- MODIFICARE AICI ---
        // Construim separatorul corect în funcție de tipul fișierului
        if (fileExtension === '.js') {
          output += `;// __FILE_CONTENT_FOR__:${fileHash}${fileExtension}\n`;
        } else if (fileExtension === '.css') {
          output += `/* __FILE_CONTENT_FOR__:${fileHash}${fileExtension} */\n`;
        }
        
        output += fs.readFileSync(filePath, 'utf8').trim() + '\n\n';
      } else {
        console.error(`ERROR: File not found at ${filePath}`);
        missingFiles.push(file);
      }
    }

    if (missingFiles.length > 0) {
      return res.status(404).send(`Missing files: ${missingFiles.join(', ')}`);
    }

    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(output);
  } catch (err) {
    console.error('CRITICAL ERROR:', err);
    res.status(500).send(`Server Error: ${err.message}`);
  }
});

module.exports = app;
