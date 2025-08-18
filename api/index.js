const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto'); // Asigură-te că crypto este importat
const app = express();

app.get('/concat', (req, res) => {
  try {
    const filesQuery = req.query.files;
    if (!filesQuery) {
      return res.status(400).send('Missing "files" query parameter.');
    }

    const files = filesQuery.split(',');

    if (files.length === 0 || files[0] === '') {
      return res.status(400).send('No valid files requested');
    }

    let contentType = '';
    if (files[0].endsWith('.js')) {
      contentType = 'application/javascript';
    } else if (files[0].endsWith('.css')) {
      contentType = 'text/css';
    } else {
      return res.status(400).send('Unsupported file type in request.');
    }

    let output = '';
    const missingFiles = [];

    for (const file of files) {
      if (!file.endsWith(contentType === 'text/css' ? '.css' : '.js')) {
        return res.status(400).send('Mixing file types is not allowed.');
      }
        
      const projectRoot = process.cwd();
      const filePath = path.join(projectRoot, 'public', file);

      if (fs.existsSync(filePath)) {
        const fileHash = crypto.createHash('md5').update(file).digest('hex').substring(0, 16);
        
        // --- MODIFICARE AICI ---
        // Adăugăm un separator specific pentru fiecare tip de fișier
        if (contentType === 'application/javascript') {
            // Separator de siguranță pentru JavaScript
            output += `;\n;// __FILE_CONTENT_FOR__:${fileHash}.js\n`;
        } else if (contentType === 'text/css') {
            // Separator de debugging pentru CSS
            output += `\n/* __FILE_CONTENT_FOR__:${fileHash}.css */\n`;
        }
        
        output += fs.readFileSync(filePath, 'utf8').trim() + '\n';
      } else {
        missingFiles.push(file);
      }
    }

    if (missingFiles.length > 0) {
      return res.status(404).send(`Missing files: ${missingFiles.join(', ')}`);
    }

    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(output.trim()); // Folosim trim() la final pentru a curăța output-ul
  } catch (err) {
    console.error('CRITICAL ERROR:', err);
    res.status(500).send(`Server Error: ${err.message}`);
  }
});

module.exports = app;
