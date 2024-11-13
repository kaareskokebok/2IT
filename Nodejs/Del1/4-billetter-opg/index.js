// Importerer Express og Path
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
require('dotenv').config();
// Oppretter en Express-app
const app = express();

// Middleware for å håndtere POST-data
app.use(express.urlencoded({ extended: true }));

// Serverer statiske filer fra "public"-mappen
app.use(express.static('public'));

// Variabel for å lagre bestilte billetter
let billetter = [];

// Legger til 10 forhåndsbestilte billetter
billetter.push(
    { voksen: 7, barn: 3 },
    // TODO: Legg til flere forhåndsbestilte billetter hvis ønskelig
);

// Rute for å servere bestillingssiden
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'bestill.html'));
});

// TODO: Rute til oversikt.html: 
app.get('/arne', (req, res) => {
    // ???
})


// TODO: Rute for å håndtere bestilling av billetter
app.post('/bestill', (req, res) => {
    // Henter antall voksen- og barnebilletter fra skjemaet
    console.log(req.body);
    // TODO: hent ut billetter fra req.body
    const voksenBilletter = "???";
    const barneBilletter = "???";

    // TODO: Legg til validering av inputverdier hvis ønskelig

    // TODO: Legger til de nye billettene i arrayen
    billetter.push("???");

    // Sender en bekreftelse tilbake til brukeren
    res.send(`Du har bestilt ${voksenBilletter} voksenbillett(er) og ${barneBilletter} barnebillett(er).`);
});


// Rute for å håndtere innlogging og vise billettoversikt
app.post('/oversikt', (req, res) => {
    // Henter passordet fra skjemaet
    console.log(req.body);
    const passord = "???TODO";

    // Sjekker om passordet er korrekt
    if ("TODO sjekk passord") {
        // TODO: Generer en HTML-streng som viser oversikten over alle bestilte billetter
        let oversiktHTML = '<h1>Oversikt over bestilte billetter</h1>';

        // Gå gjennom alle bestilte billetter og legg dem til i oversikten
        oversiktHTML += '<ul>';
        billetter.forEach((billett, index) => {
            oversiktHTML += `???TODO`;
            // Bestilling 1: 3 voksen, 2 barn
            // Bestilling 2: 4 voksen, 1 barn
        });
        oversiktHTML += '</ul>';

        // Sender oversikten tilbake til brukeren
        res.send(oversiktHTML);
    } else {
        // Feilmelding hvis passordet er feil
        res.send('Feil passord. <a href="/oversikt">Prøv igjen</a>');
    }
});

app.listen(3000, () => {
    console.log('Serveren kjører på http://localhost:3000/');
    
});