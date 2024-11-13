const express = require('express');
const app = express();

app.use(express.static('public'));
// Linja under lar oss skrive req.body 
// for å hente data fra skjema (form)
app.use(express.urlencoded( { extended: true}));

app.post('/registrer', (req,res) => {
    console.log(req.body); // object
    let navn = req.body.navn;
    let alder = req.body.alder;

    res.send(`<h2>Hei, ${navn}. Du er ${alder} år gammel.`);
});

app.listen(3005, () => {
    console.log("Serveren kjører på http://localhost:3005/");
});