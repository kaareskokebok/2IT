const express = require("express");
const app = express();

app.use(express.static('public'));
// For å hente skjemadata
app.use(express.urlencoded({ extended:true }));

let messages = [
    {name:"Jens", message:"Jeg gjør lekser", timestamp:"14:39"},
    {name:"Sara", message:"Jeg kjeder meg", timestamp:"14:33"},
];

app.post('/send', (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const message = req.body.message;
    const timestamp = "14:39"; // TODO
    // Legg til ny melding på første plass i messages arrayet
    messages.unshift({ timestamp, name, message });
    res.redirect("/");  // Oppdater siden etter sendt melding
});
// Vise meldingene
app.get('/messages', (req, res) => {
    res.json(messages);  // json: javascript object notation
});

app.listen(3000, () => {
    console.log('Server kjører på port http://localhost:3000');
})