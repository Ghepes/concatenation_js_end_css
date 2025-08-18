const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// --- Handler DEDICAT DOAR PENTRU JAVASCRIPT ---
app.get('/js/:files', (req, res) => {
  try {
    const filesString = req.params.files;
    const files = filesString.split('+');
    let output = '';
    const missingFiles = [];

    for (const file of files) {
      // Verificăm că primim doar fișiere .js
      if (!file.endsWith('.js')) {
        return res.status(400).send(`Invalid file type in JS request: ${file}`);
      }
      
      const filePath = path.join(process.cwd(), 'public', file);

      if (fs.existsSync(filePath)) {
        // Adăugăm separatorul specific pentru JS
        const separator = `;// __FILE_CONTENT_FOR__:${file}___\n`;
        output += separator;
        output += fs.readFileSync(filePath, 'utf8').trim() + '\n';
      } else {
        missingFiles.push(file);
      }
    }

    if (missingFiles.length > 0) {
      return res.status(404).send(`Missing JS files: ${missingFiles.join(', ')}`);
    }

    res.setHeader('Content-Type', 'application/javascript');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(output.trim());
  } catch (err) {
    res.status(500).send(`JS Server Error: ${err.message}`);
  }
});

module.exports = app;
