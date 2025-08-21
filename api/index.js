const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const app = express();

app.use('/', (req, res) => {
  try {
    const requestedPath = decodeURIComponent(req.path);
    console.log(`Request received for path: ${requestedPath}`);

    // --- MODIFICARE CHEIE ---
    // Definim rădăcina de unde sunt servite fișierele statice.
    const projectRoot = process.cwd();
    const publicRoot = path.join(projectRoot, 'public');

    // Extragem dinamic calea directorului și fișierele combinate din URL.
    const urlDirectory = path.dirname(requestedPath); // Exemplu: / sau /chunk-batch
    const combinedFiles = path.basename(requestedPath); // Exemplu: file1.js+file2.js

    console.log(`URL Directory resolved to: ${urlDirectory}`);
    console.log(`Combined files string: ${combinedFiles}`);

    let files = [];
    let contentType = '';
    let fileExtension = '';

    if (combinedFiles.includes('.js')) {
      files = combinedFiles.split('+').filter(f => f.endsWith('.js'));
      contentType = 'application/javascript';
      fileExtension = '.js';
    } else if (combinedFiles.includes('.css')) {
      files = combinedFiles.split('+').filter(f => f.endsWith('.css'));
      contentType = 'text/css';
      fileExtension = '.css';
    } else {
      // Permitem și cereri pentru fișiere unice care nu conțin '+'
      if (fs.existsSync(path.join(publicRoot, requestedPath))) {
         return res.sendFile(path.join(publicRoot, requestedPath));
      }
      return res.status(404).send('Not a valid JS or CSS file request.');
    }

    console.log('Files to process:', files);

    if (files.length === 0) {
      return res.status(400).send(`No valid ${fileExtension} files requested`);
    }

    let output = '';
    const missingFiles = [];

    for (const file of files) {
      // Construim calea completă pe disc, pornind de la 'publicRoot'.
      const filePath = path.join(publicRoot, urlDirectory, file);

      console.log(`Attempting to read file from: ${filePath}`);

      if (fs.existsSync(filePath)) {
        console.log(`SUCCESS: Found file ${file}`);
        
        // Generăm un hash bazat pe calea relativă a fișierului pentru a asigura unicitatea
        const relativeFilePath = path.join(urlDirectory, file).substring(1); // ex: chunk-batch/file1.js
        const fileHash = crypto.createHash('md5').update(relativeFilePath).digest('hex').substring(0, 16);

        // Construim separatorul corect în funcție de tipul fișierului
        if (fileExtension === '.js') {
          output += `;// __FILE_CONTENT_FOR__:${fileHash}${fileExtension}\n`;
        } else if (fileExtension === '.css') {
          output += `/* __FILE_CONTENT_FOR__:${fileHash}${fileExtension} */\n`;
        }
        
        output += fs.readFileSync(filePath, 'utf8').trim() + '\n\n';
      } else {
        console.error(`ERROR: File not found at ${filePath}`);
        missingFiles.push(path.join(urlDirectory, file));
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

