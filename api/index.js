const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const app = express();

// Middleware pentru a gestiona concatenarea fișierelor JS
// Regex-ul a fost simplificat deoarece vercel.json face deja o pre-filtrare
app.get('/*', (req, res) => {
  try {
    const requestedPath = decodeURIComponent(req.path);
    // Eliminăm slash-ul de la început
    const files = requestedPath.substring(1).split('+')
      .filter(f => f.endsWith('.js'));

    if (files.length === 0) {
      return res.status(400).send('No valid JS files requested');
    }

    let output = '';
    const missingFiles = [];

    for (const file of files) {
      // Calea corectă către folderul 'public' în mediul Vercel
      const filePath = path.join(process.cwd(), 'public', file);

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

// Nu mai avem nevoie de app.listen. În schimb, exportăm aplicația.
module.exports = app;
