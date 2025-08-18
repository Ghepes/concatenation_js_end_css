const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const handler = (req, res) => {
    try {
        const CWD = process.cwd(); // Directorul de lucru curent (de obicei /var/task)
        const filesInCWD = fs.readdirSync(CWD);

        // Încercăm să citim și subfolderul 'public', dacă există
        let filesInPublic = 'Nu a fost găsit sau nu este un director.';
        try {
            const publicPath = path.join(CWD, 'public');
            if (fs.statSync(publicPath).isDirectory()) {
                filesInPublic = fs.readdirSync(publicPath).join('\n- ');
            }
        } catch (e) {
            // Ignorăm eroarea dacă folderul 'public' nu există
        }

        const debugMessage = `
--- INFORMAȚII DE DEBUG VERCEL ---

Directorul de Lucru (process.cwd()):
${CWD}

Fișiere și Foldere Găsite în Directorul de Lucru:
- ${filesInCWD.join('\n- ')}

-----------------------------------------

Conținutul folderului 'public' (dacă există):
- ${filesInPublic}
        `;

        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.status(200).send(debugMessage.trim());

    } catch (err) {
        res.status(500).send(`A apărut o eroare în timpul investigării: ${err.message}`);
    }
};

// Aplicăm același handler pentru ambele rute de test
app.get('/css/:files', handler);
app.get('/js/:files', handler);

module.exports = app;
