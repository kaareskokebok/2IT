const express = require("express");
// Modul for korrekte filstier, på tvers av operativsystem
const path = require("path");
const app = express();
const port = 3000;
// TODO: 
// 1. utvid ved å legge til en CSS-fil inni public-mappa som knyttes
// sammen med index.html
// 2. utvid slik at /kontakt tar deg til en kontaktside med navn og epost til
// jensern
app.use(express.static('public'));

app.get('/', (req, res) => {
    let fil = path.join(__dirname, 'public', 'index.html');
    res.sendFile(fil);
})

app.get('/test', (req, res) => {
    let fil = path.join(__dirname, 'public', 'test2.html');
    res.sendFile(fil);
})
app.listen(port, () => {
    console.log(`Serveren kjører på http://localhost:${port}`);
});