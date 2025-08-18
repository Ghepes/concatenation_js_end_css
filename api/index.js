const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const app = express();

app.use('/', (req, res) => {
  // 1. Verificăm dacă cererea este pentru un fișier suportat (.js sau .css)
  if (!req.path.includes('.js') && !req.path.includes('.css')) {
    return res.status(404).send('Not a JS or CSS file request.');
  }

  try {
    const requestedPath = decodeURIComponent(req.path);
    
    // Eliminăm filtrul restrictiv pentru a permite ambele tipuri de fișiere
    const files = requestedPath.substring(1).split('+');
    
    if (files.length === 0 || files[0] === '') {
      return res.status(400).send('No valid files requested');
    }

    // 2. Detectăm tipul de conținut pe baza primului fișier din listă
    let contentType = '';
    if (files[0].endsWith('.js')) {
      contentType = 'application/javascript';
    } else if (files[0].endsWith('.css')) {
      contentType = 'text/css';
    } else {
      return res.status(400).send('Unsupported or mixed file types in request.');
    }

    let output = '';
    const missingFiles = [];

    for (const file of files) {
      // Verificăm ca toate fișierele să fie de același tip
      if ((contentType === 'text/css' && !file.endsWith('.css')) || (contentType === 'application/javascript' && !file.endsWith('.js'))) {
        return res.status(400).send('Mixing JS and CSS files in a single request is not allowed.');
      }
        
      const projectRoot = process.cwd();
      const filePath = path.join(projectRoot, 'public', file);

      if (fs.existsSync(filePath)) {
        // Pentru CSS, nu mai adăugăm comentariul JS
        if (contentType === 'application/javascript') {
            const fileHash = crypto.createHash('md5').update(file).digest('hex').substring(0, 16);
            output += `;// __FILE_CONTENT_FOR__:${fileHash}.js\n`;
        }
        output += fs.readFileSync(filePath, 'utf8').trim() + '\n\n';
      } else {
        missingFiles.push(file);
      }
    }

    if (missingFiles.length > 0) {
      return res.status(404).send(`Missing files: ${missingFiles.join(', ')}`);
    }

    // 3. Setăm header-ul corect, determinat dinamic
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(output);
  } catch (err) {
    console.error('CRITICAL ERROR:', err);
    res.status(500).send(`Server Error: ${err.message}`);
  }
});

module.exports = app;
