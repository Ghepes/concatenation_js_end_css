const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Nu mai folosim app.use() general, ci un handler specific pentru ruta /concat
app.get('/concat', (req, res) => {
  try {
    // 1. Preluăm lista de fișiere din query parameter-ul 'files'
    const filesQuery = req.query.files;
    if (!filesQuery) {
      return res.status(400).send('Missing "files" query parameter.');
    }

    const files = filesQuery.split(',');

    if (files.length === 0 || files[0] === '') {
      return res.status(400).send('No valid files requested');
    }

    // 2. Detectăm tipul de conținut pe baza primului fișier
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
      // Validare simplă pentru a nu amesteca tipurile de fișiere
      if (!file.endsWith(contentType === 'text/css' ? '.css' : '.js')) {
        return res.status(400).send('Mixing file types is not allowed.');
      }
        
      const projectRoot = process.cwd();
      const filePath = path.join(projectRoot, 'public', file);

      if (fs.existsSync(filePath)) {
        output += fs.readFileSync(filePath, 'utf8').trim() + '\n\n';
      } else {
        missingFiles.push(file);
      }
    }

    if (missingFiles.length > 0) {
      return res.status(404).send(`Missing files: ${missingFiles.join(', ')}`);
    }

    // 3. Setăm header-ul corect și trimitem răspunsul
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(output);
  } catch (err) {
    console.error('CRITICAL ERROR:', err);
    res.status(500).send(`Server Error: ${err.message}`);
  }
});

module.exports = app;
