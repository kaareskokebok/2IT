const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get("/", (req, res) => {
    let filsrc = path.join(__dirname, 'public', 'hei.html');
    res.sendFile(filsrc);
});

app.get("/morna", (req, res) => {
    let filsrc = path.join(__dirname, 'public', 'morna.html');
    res.sendFile(filsrc);
});

app.listen(3000, () => {
    console.log("Serveren kjører på http://localhost:3000/");
});