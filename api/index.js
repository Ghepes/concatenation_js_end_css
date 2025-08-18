const express = require('express');
const app = express();

app.use('/', (req, res) => {
  // Acest log este crucial. Îl vom vedea în Vercel Logs.
  console.log(`[DEBUG] Function invoked for path: ${req.path}`);

  // Trimitem un răspuns simplu înapoi în browser.
  res.status(200).send(`Function received path: ${req.path}`);
});

module.exports = app;
