# Prøve i HTML, JavaScript og Node.js/Express

Med løsning!
---
## Innhold

- [Del 1](#del-1)
- [Del 2](#del-2)
- [Del 3](#del-3)
- [Del 3: oppgave 1](#oppgave-1-enkel-todo-app)
- [Del 3: oppgave 2](#oppgave-2-enkel-nettside-for-produkter)
- [Del 3: oppgave 3](#oppgave-3-skoleadministrasjon---hent-data-fra-serveren)


## Del 1

**Oppgave 1: Variabler**

Hva mangler i følgende kode for å deklarere en variabel som heter `navn` og tildele den verdien `"Ola"`?

```javascript
______ navn = "Ola";
```

**Løsning oppgave 1:**

For å deklarere en variabel i JavaScript, kan vi bruke `let`, `var` eller `const`. Her kan vi bruke `let`:

```javascript
let navn = "Ola";
```

---

**Oppgave 2: If-setning**

Finn feilen i følgende if-setning:

```javascript
let tall = 10;
if tall > 5 {
    console.log("Tallet er større enn 5");
}
```

**Løsning oppgave 2:**

Feilen er at betingelsen i if-setningen mangler parenteser rundt seg. Korrekt syntaks krever parenteser rundt betingelsen.

Korrekt kode:

```javascript
let tall = 10;
if (tall > 5) {
    console.log("Tallet er større enn 5");
}
```

---

**Oppgave 3: Else-if**

Fullfør følgende kode slik at den sjekker om `alder` er mellom 13 og 19 og skriver ut "Tenåring", ellers skriver den ut "Ikke tenåring".

```javascript
let alder = 16;
if (alder >= 13 && alder <= 19) {
    console.log("Tenåring");
} else {
    ___________________________;
}
```

**Løsning oppgave 3:**

Vi må legge til en else-blokk som skriver ut "Ikke tenåring" når betingelsen ikke er oppfylt.

Korrekt kode:

```javascript
let alder = 16;
if (alder >= 13 && alder <= 19) {
    console.log("Tenåring");
} else {
    console.log("Ikke tenåring");
}
```

**Forklaring:**

Hvis `alder` ikke er mellom 13 og 19, vil else-blokken kjøre og skrive ut "Ikke tenåring".

---

**Oppgave 4: For-løkke**

Hva mangler i for-løkken for at den skal skrive ut tallene fra 1 til 5 i konsollen?

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(________);
}
```

**Løsning oppgave 4:**

Vi må fylle inn variabelen `i` inne i `console.log()` for å skrive ut tallene.

Korrekt kode:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

**Forklaring:**

Ved å skrive `console.log(i);` vil løkken skrive ut verdien av `i` i hver iterasjon, altså tallene 1 til 5.

---

**Oppgave 5: While-løkke**

Finn feilen i følgende while-løkke:

```javascript
let count = 0;
while (count < 5)
    console.log(count);
    count++;
}
```

**Løsning oppgave 5:**

Feilene er:

1. Mangler klammeparenteser `{}` rundt koden som skal kjøres i løkken.
2. Ekstra avsluttende klammeparentes `}` som ikke hører hjemme.

Korrekt kode:

```javascript
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

**Forklaring:**

Ved å bruke `{}` sikrer vi at både `console.log(count);` og `count++;` kjøres innenfor løkken. Den ekstra `}` fjernes fordi den ikke er nødvendig.

---

**Oppgave 6: Array**

Hvordan legger du til elementet `"Eple"` i arrayet `frukt`?

```javascript
let frukt = ["Banan", "Appelsin"];
______________________________;
```

**Løsning oppgave 6:**

Vi kan bruke `push()`-metoden for å legge til et nytt element i arrayet.

Korrekt kode:

```javascript
let frukt = ["Banan", "Appelsin"];
frukt.push("Eple");
```

**Forklaring:**

`frukt.push("Eple");` legger til `"Eple"` på slutten av arrayet `frukt`.

---

**Oppgave 7: Objekt**

Fyll inn koden for å få tilgang til verdien av `navn` i objektet `person`.

```javascript
let person = {
    navn: "Kari",
    alder: 25
};
console.log(__________);
```

**Løsning oppgave 7:**

Vi får tilgang til egenskaper i et objekt ved å bruke punktnotasjon.

Korrekt kode:

```javascript
let person = {
    navn: "Kari",
    alder: 25
};
console.log(person.navn);
```

**Forklaring:**

`person.navn` henter verdien av `navn` fra objektet `person`, som er `"Kari"`.

---

**Oppgave 8: Objekt-array**

Hvordan får du tilgang til `alder` til den andre personen i arrayet `personer`?

```javascript
let personer = [
    { navn: "Per", alder: 30 },
    { navn: "Lise", alder: 22 }
];
console.log(_________________);
```

**Løsning oppgave 8:**

Den andre personen i arrayet har indeksen `1`. Vi kan få tilgang til hennes `alder` slik:

```javascript
console.log(personer[1].alder);
```

**Forklaring:**

`personer[1]` refererer til det andre objektet i arrayet, og `.alder` henter verdien av `alder` fra det objektet.

---

**Oppgave 9: Funksjoner**

Fullfør funksjonen som tar inn to tall og returnerer summen av dem.

```javascript
function leggSammen(a, b) {
    _______________________;
}
```

**Løsning oppgave 9:**

Funksjonen skal returnere summen av `a` og `b`.

Korrekt kode:

```javascript
function leggSammen(a, b) {
    return a + b;
}
```

**Forklaring:**

`return a + b;` gjør at funksjonen gir tilbake summen av de to argumentene når den kalles.

---

**Oppgave 10: Feilretting**

Hva er feil med følgende kode som skal finne summen av tallene i arrayet `numre`?

```javascript
let numre = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i <= numre.length; i++) {
    sum += numre[i];
}
console.log(sum);
```

**Løsning oppgave 10:**

Feilen ligger i løkkebetingelsen `i <= numre.length`. Arrayindekser starter på 0 og går opp til `numre.length - 1`, så vi må bruke `<` i stedet for `<=`.

Korrekt kode:

```javascript
let numre = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numre.length; i++) {
    sum += numre[i];
}
console.log(sum); // Output: 15
```

**Forklaring:**

Ved å endre betingelsen til `i < numre.length`, unngår vi å prøve å få tilgang til en indeks som ikke eksisterer i arrayet, noe som ville gitt `undefined` og potensielt feil resultat.

---

## Del 2

### JavaScript-oppgaver

---

**Oppgave 1: Palindromsjekk**

Fullfør funksjonen som sjekker om en gitt streng er et palindrom (leses likt begge veier).

```javascript
function erPalindrom(str) {
    let reversert = "";
    for (let i = str.length - 1; i >= 0; i--) {
        ________________________;
    }
    if (str === reversert) {
        return true;
    } else {
        return false;
    }
}
```

**Løsning oppgave 1:**

Vi må fylle inn koden i for-løkken slik at vi bygger opp den reverserte strengen.

```javascript
function erPalindrom(str) {
    let reversert = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversert += str[i];
    }
    if (str === reversert) {
        return true;
    } else {
        return false;
    }
}
```

**Forklaring:**

- **For-løkken:** Vi starter fra slutten av strengen og beveger oss bakover. Ved hver iterasjon legger vi til det aktuelle tegnet til `reversert`.
- **Sammenligning:** Etter løkken sammenligner vi den originale strengen `str` med den reverserte `reversert`. Hvis de er like, returnerer funksjonen `true`, ellers `false`.

---

**Oppgave 2: Finn maksimum**

Skriv en funksjon som finner det største tallet i en liste.

```javascript
function finnMaks(liste) {
    let maks = liste[0];
    for (let i = 1; i < liste.length; i++) {
        if (______________________) {
            maks = liste[i];
        }
    }
    return maks;
}
```

**Løsning oppgave 2:**

Vi må sammenligne hvert element med den nåværende maksverdien.

```javascript
function finnMaks(liste) {
    let maks = liste[0];
    for (let i = 1; i < liste.length; i++) {
        if (liste[i] > maks) {
            maks = liste[i];
        }
    }
    return maks;
}
```

**Forklaring:**

- **Initialisering:** Vi antar at det første elementet `liste[0]` er det største.
- **For-løkken:** Vi går gjennom resten av listen og sammenligner hvert element `liste[i]` med `maks`.
- **Oppdatering av maks:** Hvis vi finner et element som er større enn `maks`, oppdaterer vi `maks` med dette elementet.
- **Returnerer maks:** Etter å ha gått gjennom listen returnerer vi den største verdien funnet.

---

**Oppgave 3: FizzBuzz**

Fullfør koden som for tall fra 1 til 15 skriver ut "Fizz" hvis tallet er delelig med 3, "Buzz" hvis det er delelig med 5, og "FizzBuzz" hvis det er delelig med begge.

```javascript
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (______________________) {
        console.log("Fizz");
    } else if (______________________) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
```

**Løsning oppgave 3:**

Vi må fylle inn betingelsene for når tallet er delelig med 3 og når det er delelig med 5.

```javascript
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
```

**Forklaring:**

- **Betingelser:**
  - `i % 3 === 0` sjekker om `i` er delelig med 3.
  - `i % 5 === 0` sjekker om `i` er delelig med 5.
- **Rekkefølge:**
  - Det er viktig at sjekken for `i % 3 === 0 && i % 5 === 0` kommer først, ellers vil tall som er delelige med både 3 og 5 bare treffe en av de andre betingelsene.
- **Utskrift:**
  - Avhengig av hvilken betingelse som er oppfylt, skriver vi ut "Fizz", "Buzz", "FizzBuzz", eller tallet selv.

---

**Oppgave 4: Teller bokstaver**

Skriv en funksjon som tar inn en streng og en bokstav, og returnerer hvor mange ganger bokstaven forekommer i strengen.

```javascript
function tellerBokstaver(streng, bokstav) {
    let teller = 0;
    for (let i = 0; i < streng.length; i++) {
        if (______________________) {
            teller++;
        }
    }
    return teller;
}
```

**Løsning oppgave 4:**

Vi må sammenligne hvert tegn i strengen med den spesifikke bokstaven.

```javascript
function tellerBokstaver(streng, bokstav) {
    let teller = 0;
    for (let i = 0; i < streng.length; i++) {
        if (streng[i] === bokstav) {
            teller++;
        }
    }
    return teller;
}
```

**Forklaring:**

- **For-løkken:** Itererer gjennom hvert tegn i strengen.
- **Sammenligning:** Sjekker om `streng[i]` er lik `bokstav`.
- **Øker teller:** Hvis de er like, øker vi `teller` med 1.
- **Returnerer teller:** Etter løkken returnerer vi det totale antallet ganger bokstaven forekommer.

---

### Node.js-oppgaver

---

**Oppgave 5: Rutehåndtering**

Legg til en GET-rute på `'/'` som sender teksten "Velkommen til min server".

```javascript
app.get('/', (req, res) => {
    __________________________
});
```

**Løsning oppgave 5:**

Vi bruker `res.send()` for å sende teksten til klienten.

```javascript
app.get('/', (req, res) => {
    res.send("Velkommen til min server");
});
```

**Forklaring:**

- **`app.get('/')`:** Definerer en GET-rute på rotstien `'/'`.
- **`res.send()`:** Sender en enkel tekstrespons til klienten når denne ruten treffes.

---

**Oppgave 6: Enkel server**

Fullfør koden for å lage en enkel Express-server som lytter på port 3000, og som viser fram index.html som ligger i public mappa når brukeren skriver `http://localhost:3000`. Dersom brukeren skriver `http://localhost:3000/morna/jens`, så vises teksten `Morna Jens!` som en stor overskrift.

```javascript
const express = require('express');
const app = express();

// TODO

app.listen(3000, () => {
    console.log("Server kjører på port 3000");
});
```

**Løsning oppgave 6:**

Vi må sette opp statisk filservering og definere ruten `/morna/:navn`.

```javascript
const express = require('express');
const app = express();

// Serverer statiske filer fra 'public'-mappen
app.use(express.static('public'));

// Definerer rute for '/morna/:navn'
app.get('/morna/:navn', (req, res) => {
    let navn = req.params.navn;
    res.send(`<h1>Morna ${navn}!</h1>`);
});

app.listen(3000, () => {
    console.log("Server kjører på port 3000");
});
```

**Forklaring:**

- **`app.use(express.static('public'))`:** Gjør det mulig å servere statiske filer som `index.html` fra `public`-mappen.
- **`app.get('/morna/:navn', ...)`:** Oppretter en rute som tar imot en parameter `:navn` fra URL-en.
- **`req.params.navn`:** Henter ut navnet fra URL-en.
- **`res.send()`:** Sender en HTML-streng tilbake til klienten med navnet inkludert i overskriften.

---

**Oppgave 7: Node.js - Behandle to tall fra et skjema**

Skriv en Node.js/Express POST-rute som mottar to tall fra et skjema. Algoritmen skal skrive ut summen av alle tall mellom de to tallene som er delelig med 3. Fullfør koden under. De to tallene i endepunktene skal ikke være inkludert. F.eks. hvis tallene er 4 og 39, så er intervallet du skal undersøke fom. 5 tom. 38.

```javascript
// server.js
app.post('/beregn', (req, res) => {
    let tall1 = parseInt("...");
    let tall2 = parseInt("...");
    // TODO:
    res.send("...");
});
```

**Tips:**

- Bruk `i % 3 === 0` for å se om tallet er delelig med 3.

**Oppgaven din er å fullføre koden i `server.js` slik at den fungerer som beskrevet.**

**Løsning oppgave 7:**

Først må vi hente tallene fra `req.body` og sørge for å parse dem til heltall.

```javascript
// server.js
app.use(express.urlencoded({ extended: true })); // For å håndtere form-data

app.post('/beregn', (req, res) => {
    let tall1 = parseInt(req.body.tall1);
    let tall2 = parseInt(req.body.tall2);

    // Sikrer at tall1 er mindre enn tall2
    if (tall1 > tall2) {
        let temp = tall1;
        tall1 = tall2;
        tall2 = temp;
    }

    let sum = 0;
    for (let i = tall1 + 1; i < tall2; i++) {
        if (i % 3 === 0) {
            sum += i;
        }
    }

    res.send(`Summen av tall mellom ${tall1} og ${tall2} som er delelig med 3 er ${sum}.`);
});
```

**Forklaring:**

- **`app.use(express.urlencoded({ extended: true }))`:** Middleware som gjør at vi kan lese `req.body` fra form-data.
- **Parsing av tall:** Vi bruker `parseInt()` på `req.body.tall1` og `req.body.tall2` for å konvertere dem til heltall.
- **Bytte om tallene:** Hvis `tall1` er større enn `tall2`, bytter vi om for å sikre at løkken fungerer riktig.
- **For-løkken:**
  - Starter fra `tall1 + 1` og går til `tall2 - 1` for å ekskludere endepunktene.
  - Sjekker om `i` er delelig med 3 med `i % 3 === 0`.
  - Legger til `i` i `sum` hvis betingelsen er oppfylt.
- **Responsen:** Sender tilbake en melding til klienten med resultatet.

---

**Oppgave 8: Håndtering av JSON-data**

Fullfør POST-ruten som mottar JSON-data og sender tilbake samme data med en melding. I skjemaet der dataene kommer fra er det input felt med følgende "name": navn, alder, epost. Brukeren skal se en ny nettside når han har sendt inn skjemaet på formen

```txt
Hei og hopp, Jensern.
Er du allerede fylt 19 år? Wow.
Du ble registrert med epost jensern@gensern.no.

Takker!
```

```javascript
app.use(express.json());

app.post('/data', (req, res) => {
    let mottattData = "???";
    
    ____________________________;
});
```

**Løsning oppgave 8:**

Vi skal hente dataene fra `req.body` og lage en respons basert på disse.

```javascript
app.use(express.json());

app.post('/data', (req, res) => {
    let mottattData = req.body;

    let navn = mottattData.navn;
    let alder = mottattData.alder;
    let epost = mottattData.epost;

    let melding = `
Hei og hopp, ${navn}.
Er du allerede fylt ${alder} år? Wow.
Du ble registrert med epost ${epost}.

Takker!
`;

    res.send(melding);
});
```

**Forklaring:**

- **`app.use(express.json())`:** Middleware som gjør at vi kan lese JSON-data fra `req.body`.
- **Hente data:** Vi henter `navn`, `alder` og `epost` fra `mottattData`.
- **Lage melding:** Vi konstruerer en streng `melding` som inkluderer dataene fra brukeren.
- **Sende respons:** Vi bruker `res.send(melding);` for å sende meldingen tilbake til brukeren.

---

# Prøve i HTML, JavaScript og Node.js/Express

---

## Del 3

### Oppgave 1: Enkel TODO-app

Lag en enkel TODO-applikasjon der brukere kan legge til og se en liste over oppgaver.

**`index.html` er ferdig skrevet og inneholder:**

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Min TODO-liste</title>
</head>
<body>
    <h1>TODO-liste</h1>
    <form id="todoForm">
        <input type="text" name="oppgave" placeholder="Ny oppgave" required>
        <input type="submit" value="Legg til">
    </form>
    
</body>
</html>
```

**I `server.js` er følgende funksjoner opprettet:**

```javascript
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

let oppgaver = [];

// Legg til oppgave
app.post('/leggtil', (req, res) => {
    // Din kode her
});

// Hent oppgaver
app.get('/oppgaver', (req, res) => {
    // Din kode her
});

app.listen(3000, () => {
    console.log("Server kjører på http://localhost:3000");
});
```

**Oppgave:**

- Fullfør `app.post('/leggtil', ...)` slik at den mottar en ny oppgave fra klienten og legger den til i `oppgaver`-arrayen.
- Fullfør `app.get('/oppgaver', ...)` slik at den sender `oppgaver` dataene og viser dem fram.

---

**Løsning oppgave 1:**

**Fullføring av `app.post('/leggtil', ...)`:**

Vi må hente den nye oppgaven fra `req.body` og legge den til i `oppgaver`-arrayen.

```javascript
app.post('/leggtil', (req, res) => {
    let nyOppgave = req.body.oppgave;
    oppgaver.push(nyOppgave);
    res.redirect('/'); // Omdirigerer tilbake til forsiden
});
```

**Fullføring av `app.get('/oppgaver', ...)`:**

Vi sender `oppgaver`-arrayen som JSON til klienten.

```javascript
app.get('/oppgaver', (req, res) => {
    res.json(oppgaver);
});
```

**Oppdatert `server.js`:**

```javascript
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

let oppgaver = [];

// Legg til oppgave
app.post('/leggtil', (req, res) => {
    let nyOppgave = req.body.oppgave;
    oppgaver.push(nyOppgave);
    res.redirect('/');
});

// Hent oppgaver
app.get('/oppgaver', (req, res) => {
    res.json(oppgaver);
});

app.listen(3000, () => {
    console.log("Server kjører på http://localhost:3000");
});
```

**Oppdatert `index.html`:**

For å vise oppgavene på nettsiden, legger vi til en liste og et skript som henter oppgavene fra serveren.

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Min TODO-liste</title>
</head>
<body>
    <h1>TODO-liste</h1>
    <form id="todoForm" action="/leggtil" method="post">
        <input type="text" name="oppgave" placeholder="Ny oppgave" required>
        <input type="submit" value="Legg til">
    </form>
    
    <h2>Mine oppgaver:</h2>
    <ul id="oppgaveListe"></ul>

    <script>
        // Henter og viser oppgavene
        function hentOppgaver() {
            fetch('/oppgaver')
                .then(response => response.json())
                .then(data => {
                    const oppgaveListe = document.getElementById('oppgaveListe');
                    oppgaveListe.innerHTML = '';
                    data.forEach(oppgave => {
                        const li = document.createElement('li');
                        li.textContent = oppgave;
                        oppgaveListe.appendChild(li);
                    });
                });
        }

        // Hent oppgavene når siden lastes
        window.onload = hentOppgaver;
    </script>
</body>
</html>
```

**Forklaring:**

- **`app.post('/leggtil')`:** Mottar den nye oppgaven fra skjemaet og legger den til i `oppgaver`-arrayen.
- **`app.get('/oppgaver')`:** Sender hele `oppgaver`-arrayen som JSON til klienten.
- **I `index.html`:**
  - Vi legger til `action="/leggtil" method="post"` i skjemaet for å sende data til serveren.
  - Vi oppretter en `<ul>` med id `oppgaveListe` for å vise oppgavene.
  - Skriptet henter oppgavene fra serveren og legger dem til i listen.
  - Vi kaller `hentOppgaver()` når siden lastes for å vise eksisterende oppgaver.

---

### Oppgave 2: Enkel nettside for produkter

Du skal lage en enkel nettside for å administrere en liste over produkter. Klienten skal kunne hente en liste over produkter og legge til nye produkter.

**`index.html` er ferdig skrevet og inneholder:**

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Produktliste</title>
</head>
<body>
    <h1>Produkter</h1>
    <form action="/leggtil" method="post" id="produktForm">
        <input type="text" name="navn" placeholder="Produktnavn" required>
        <input type="number" name="pris" placeholder="Pris" required>
        <input type="submit" value="Legg til produkt">
    </form>
    <a href="/visprodukter"><button>Vis produkter</button></a>
</body>
</html>
```

**I `server.js` er minimal kode skrevet:**

```javascript
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
    console.log("Server kjører på http://localhost:3000");
});
```

**Oppgave:**

- Lag en array `produkter` til å lagre produktene.
- Opprett en rute som sender tilbake listen over produkter.
- Opprett en rute som mottar et nytt produkt og legger det til i `produkter`-arrayen.

---

**Løsning oppgave 2:**

**1. Opprette `produkter`-arrayen i `server.js`:**

```javascript
let produkter = [];
```

**2. Opprette POST-rute for å legge til produkt:**

```javascript
app.post('/leggtil', (req, res) => {
    let nyttProdukt = {
        navn: req.body.navn,
        pris: parseFloat(req.body.pris)
    };
    produkter.push(nyttProdukt);
    res.redirect('/');
});
```

**3. Opprette GET-rute for å vise produkter:**

```javascript
app.get('/visprodukter', (req, res) => {
    let html = `
    <!DOCTYPE html>
    <html lang="no">
    <head>
        <meta charset="UTF-8">
        <title>Produktliste</title>
    </head>
    <body>
        <h1>Produktliste</h1>
        <ul>
            ${produkter.map(prod => `<li>${prod.navn} - ${prod.pris} kr</li>`).join('')}
        </ul>
        <a href="/"><button>Tilbake</button></a>
    </body>
    </html>
    `;
    res.send(html);
});
```

**Oppdatert `server.js`:**

```javascript
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let produkter = [];

app.post('/leggtil', (req, res) => {
    let nyttProdukt = {
        navn: req.body.navn,
        pris: parseFloat(req.body.pris)
    };
    produkter.push(nyttProdukt);
    res.redirect('/');
});

app.get('/visprodukter', (req, res) => {
    let html = `
    <!DOCTYPE html>
    <html lang="no">
    <head>
        <meta charset="UTF-8">
        <title>Produktliste</title>
    </head>
    <body>
        <h1>Produktliste</h1>
        <ul>
            ${produkter.map(prod => `<li>${prod.navn} - ${prod.pris} kr</li>`).join('')}
        </ul>
        <a href="/"><button>Tilbake</button></a>
    </body>
    </html>
    `;
    res.send(html);
});

app.listen(3000, () => {
    console.log("Server kjører på http://localhost:3000");
});
```

**Forklaring:**

- **`produkter`-arrayen:** Lagrer alle produktene som legges til.
- **`app.post('/leggtil')`:** Mottar data fra skjemaet og legger et nytt produkt til `produkter`-arrayen.
- **`app.get('/visprodukter')`:** Genererer en enkel HTML-side som viser listen over produkter.
- **I `index.html`:**
  - Skjemaet sender data til `/leggtil` via POST-metoden.
  - Knappen "Vis produkter" lenker til `/visprodukter` som viser produktlisten.

---

### Oppgave 3: Skoleadministrasjon - Hent data fra serveren

Du skal lage en enkel applikasjon for skoleadministrasjon der elever kan se en liste over lærere.

**Krav:**

- Bruk en `script.js`-fil i frontend for å hente data fra serveren.
- Dataene skal hentes fra backend og vises i et `<p>`-element i `index.html` i `public`-mappen.

**`index.html` er ferdig skrevet og inneholder:**

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Skoleadministrasjon</title>
</head>
<body>
    <h1>Velkommen til Skoleportalen</h1>
    <button id="hentLaerereBtn">Hent lærerliste</button>
    <p id="laererListe"></p>
    <script src="script.js"></script>
</body>
</html>
```

**I `server.js` er minimal kode skrevet:**

```javascript
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
    console.log("Server kjører på http://localhost:3000");
});
```

**Oppgave:**

- Lag en array `laerere` som inneholder objekter med informasjon om lærere (for eksempel navn og fag).
- Opprett en `app.get('/laerere', ...)`-rute som sender tilbake listen over lærere som JSON.
- I `script.js`, lag en funksjon som kalles når brukeren klikker på "Hent lærerliste"-knappen. Denne funksjonen skal hente data fra serveren og vise dem i `<p id="laererListe">`.
- Sørg for at dataene vises på en lesbar måte, for eksempel som en punktliste over lærernes navn og fag.
- NB! Du må være tydelig på hvilken js-fil koden du skriver skal ligge i.

---

**Løsning oppgave 3:**

**1. Opprette `laerere`-arrayen i `server.js`:**

```javascript
let laerere = [
    { navn: "Ola Nordmann", fag: "Matematikk" },
    { navn: "Kari Nordmann", fag: "Norsk" },
    { navn: "Per Hansen", fag: "Historie" }
];
```

**2. Opprette GET-rute `/laerere` i `server.js`:**

```javascript
app.get('/laerere', (req, res) => {
    res.json(laerere);
});
```

**Oppdatert `server.js`:**

```javascript
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let laerere = [
    { navn: "Ola Nordmann", fag: "Matematikk" },
    { navn: "Kari Nordmann", fag: "Norsk" },
    { navn: "Per Hansen", fag: "Historie" }
];

app.get('/laerere', (req, res) => {
    res.json(laerere);
});

app.listen(3000, () => {
    console.log("Server kjører på http://localhost:3000");
});
```

**3. Lage `script.js` i `public`-mappen:**

**`script.js`:**

```javascript
// script.js

document.getElementById('hentLaerereBtn').addEventListener('click', hentLaerere);

function hentLaerere() {
    fetch('/laerere')
        .then(response => response.json())
        .then(data => {
            const laererListe = document.getElementById('laererListe');
            let listeHTML = '<ul>';
            data.forEach(laerer => {
                listeHTML += `<li>${laerer.navn} - ${laerer.fag}</li>`;
            });
            listeHTML += '</ul>';
            laererListe.innerHTML = listeHTML;
        })
        .catch(error => {
            console.error('Feil ved henting av lærerliste:', error);
            laererListe.textContent = 'Kunne ikke hente lærerliste.';
        });
}
```

**Forklaring:**

- **I `server.js`:**
  - Vi oppretter en array `laerere` med objekter som inneholder `navn` og `fag`.
  - GET-ruten `/laerere` sender `laerere`-arrayen som JSON.
- **I `script.js`:**
  - Vi legger til en event listener på knappen med id `hentLaerereBtn` som kaller funksjonen `hentLaerere()` når knappen klikkes.
  - `hentLaerere()` bruker `fetch` for å hente data fra `/laerere`.
  - Når dataene er mottatt, bygger vi en HTML-liste og setter den som innholdet til `<p id="laererListe">`.

---

**Viktig informasjon om filplassering:**

- **`server.js`**: Backend-koden som kjøres på serveren.
- **`script.js`**: Frontend-kode som ligger i `public`-mappen og inkluderes i `index.html`.
- **`index.html`**: Frontend-kode som også ligger i `public`-mappen og vises til brukeren.

---

**Oppsummering:**

- Vi har laget en enkel skoleadministrasjonsapplikasjon der brukeren kan hente og se en liste over lærere.
- Backend (`server.js`) håndterer lagring og servering av data.
- Frontend (`index.html` og `script.js`) håndterer visning og interaksjon med brukeren.
- Vi sørger for å hente data asynkront ved hjelp av `fetch` og oppdatere siden uten å måtte laste den inn på nytt.

---