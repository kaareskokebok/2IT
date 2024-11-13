const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/jens', (req, res) => {
    res.send('<img src="jens.jpeg" width=300px>');
});

// http://localhost:3000/
app.get('/', (req, res) => {
    res.send('<h1>Morna Kamala</h1>');
});

// Alternativ rute: http://localhost:3000/hei
app.get('/hei', (req, res) => {
    res.send('Hei! Hyggelig!');
});



app.listen(port, () => {
    console.log(`Serveren kjører på http://localhost:${port}`);
});