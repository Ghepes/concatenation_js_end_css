const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Ruta este acum mai specifică și citește parametrul :files
app.get('/concat/:files', (req, res) => {
  try {
    // Preluăm lista de fișiere din parametrul URL-ului, nu din query
    const filesString = req.params.files;
    if (!filesString) {
      return res.status(400).send('No files specified in URL.');
    }

    // Separăm fișierele folosind caracterul '+'
    const files = filesString.split('+');

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
        let separator = '';

        // --- AICI CONSTRUIM NOUL SEPARATOR ---
        // Construim separatorul exact în formatul cerut de tine
        if (contentType === 'application/javascript') {
          separator = `;// __FILE_CONTENT_FOR__:${file}___\n`;
        } else if (contentType === 'text/css') {
          // Notă: Punctul și virgula (;) nu este standard la începutul CSS, 
          // dar majoritatea browserelor îl vor ignora. Îl adăugăm conform cerinței.
          separator = `;/* __FILE_CONTENT_FOR__:${file}___ */\n`;
        }
        
        output += separator;
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
    res.send(output.trim());
  } catch (err) {
    console.error('CRITICAL ERROR:', err);
    res.status(500).send(`Server Error: ${err.message}`);
  }
});

module.exports = app;
