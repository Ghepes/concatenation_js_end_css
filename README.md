# concatenation_js_end_css
Concatenation with js end css file deliver with Node server


### Instal NPM Package:
````
npm i concatenation_js_end_css
````
Official NPM Package at [https://www.npmjs.com/package/concatenation_js_end_css](https://www.npmjs.com/package/concatenation_js_end_css)

### Start with manuel install:
````
npm init -y
````
### Install manuel:
````
npm install express
npm install --save-dev nodemon

````
### Test dev mode:
````
npm run dev
````
### Start the production:
````
npm start
````

### You want to add error handling middleware to your Express app! Consider adding compression middleware for the JS files:
````
npm install compression
````
### For production to package.json, you might want to add:
````

"engines": {
  "node": ">=22.0.0"
}
````

### Add index.js with:
````
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Serve static files normally
app.use(express.static(path.join(__dirname, 'public')));

// Handle JS file combinations
app.get(/^\/([a-zA-Z0-9_-]+\.js\+)+[a-zA-Z0-9_-]+\.js$/, (req, res) => {
  const requestedPath = decodeURIComponent(req.path);
  
  const files = requestedPath
    .split('+')
    .map(f => f.replace(/^\//, '')) // Remove leading slash
    .filter(f => f.endsWith('.js')); // Only process .js files

  // If no valid JS files found
  if (files.length === 0) {
    return res.status(400).send('No valid JS files requested');
  }

  let output = '';
  let missingFiles = [];

  try {
    for (const file of files) {
      const filePath = path.join(__dirname, 'public', file);
      if (fs.existsSync(filePath)) {
        output += fs.readFileSync(filePath, 'utf8') + '\n;\n';
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
    res.status(500).send('Error processing files');
  }
});

// Fallback for other routes
app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

````

### Add public folder to add js end css file to generate url CANCATENATION

├── public/                <-- This is where you put all your JS end css files.
│   ├── one.js
│   ├── two.js
│   ├── three.js
│   ├── x.css
│   ├── y.css
│   ├── z.css


