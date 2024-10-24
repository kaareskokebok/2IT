
# Gjett Tallet

## **Skjelettkode til et "Gjett Tallet" spill**

Etter at dere har laget "Stein, Saks, Papir"-spillet, er det på tide å utfordre dere selv med et nytt prosjekt. Dere skal nå lage et "Gjett Tallet"-spill. Her tenker datamaskinen på et tall mellom 1 og 100, og spilleren skal prøve å gjette hvilket tall det er.

**HTML-kode (`index.html`):**

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Gjett Tallet</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Gjett Tallet</h1>
    <p>Jeg tenker på et tall mellom 1 og 100. Klarer du å gjette hvilket det er?</p>
    <input type="number" id="gjettInput" placeholder="Skriv ditt gjett her" min="1" max="100">
    <button id="gjettKnapp">Gjett</button>
    <p id="tilbakemelding"></p>
    <script src="script.js"></script>
</body>
</html>
```

*Denne HTML-koden setter opp strukturen for spillet med en overskrift, et inputfelt for spillerens gjett, en knapp for å sende inn gjettet, og et område for tilbakemelding.*

---

**JavaScript-kode (`script.js`):**

```javascript
// Hent elementer fra HTML
const gjettInput = document.getElementById('gjettInput');
const gjettKnapp = document.getElementById('gjettKnapp');
const tilbakemelding = document.getElementById('tilbakemelding');

// Variabler for spillet
let hemmeligTall;
let antallForsok;

// Funksjon for å starte et nytt spill
function startSpill() {
    // TODO: Initialiser spillet ved å generere et tilfeldig tall og nullstille antall forsøk
}

// Funksjon for å håndtere spillerens gjett
function behandleGjett() {
    // TODO: Hent spillerens gjett og sammenlign det med det hemmelige tallet
}

// Funksjon for å gi tilbakemelding til spilleren
function giTilbakemelding(melding) {
    // TODO: Vis en melding til spilleren basert på om gjettet er for høyt, for lavt eller korrekt
}

// Funksjon for å avslutte spillet når spilleren gjetter riktig
function avsluttSpill() {
    // TODO: Deaktiver knappen og inputfeltet, og gi en sluttmelding til spilleren
}

// Legg til en hendelseslytter for gjett-knappen
gjettKnapp.addEventListener('click', behandleGjett);

// Start spillet når siden lastes
startSpill();
```

*I denne JavaScript-koden er det definert fire funksjoner med beskrivelse av hva de skal gjøre. Det er opp til dere å fylle inn riktig kode i funksjonene.*

---

### **Beskrivelse av funksjonene**

1. **`startSpill()`**:
    - **Formål**: Initialisere spillet ved å sette et nytt hemmelig tall og nullstille antall forsøk.
    - **Hva den skal gjøre**:
        - Generere et tilfeldig tall mellom 1 og 100 og lagre det i variabelen `hemmeligTall`.
        - Sette `antallForsok` til 0.
        - Sørge for at inputfeltet og knappen er aktive i tilfelle spilleren vil spille igjen.

2. **`behandleGjett()`**:
    - **Formål**: Håndtere logikken når spilleren klikker på "Gjett"-knappen.
    - **Hva den skal gjøre**:
        - Hente verdien fra `gjettInput` og konvertere den til et tall.
        - Øke `antallForsok` med 1.
        - Sjekke om spillerens gjett er lik, mindre enn eller større enn `hemmeligTall`.
        - Basert på sammenligningen, kalle `giTilbakemelding()` med en passende melding.
        - Hvis spilleren har gjettet riktig, kalle `avsluttSpill()`.

3. **`giTilbakemelding(melding)`**:
    - **Formål**: Vise en tilbakemelding til spilleren.
    - **Hva den skal gjøre**:
        - Oppdatere `tilbakemelding`-elementet i HTML med meldingen som blir sendt inn som parameter.
        - Sørge for at meldingen er tydelig og hjelper spilleren videre i spillet.

4. **`avsluttSpill()`**:
    - **Formål**: Avslutte spillet når spilleren har gjettet riktig.
    - **Hva den skal gjøre**:
        - Deaktivere `gjettKnapp` og `gjettInput` slik at spilleren ikke kan fortsette å gjette.
        - Gi en sluttmelding som gratulerer spilleren og forteller hvor mange forsøk det tok.
        - Eventuelt tilby en mulighet for å starte et nytt spill.

---

### **Oppgave til dere**

- **Fyll inn koden i de fire funksjonene slik at spillet fungerer som beskrevet.**
- **Test spillet underveis for å sikre at hver del fungerer før du går videre til neste.**

---

### **Tips**

- **Generere et tilfeldig tall**:
    ```javascript
    hemmeligTall = Math.floor(Math.random() * 100) + 1;
    ```
- **Hente og konvertere spillerens gjett**:
    ```javascript
    const spillerGjett = Number(gjettInput.value);
    ```
- **Nullstille inputfeltet etter hvert gjett**:
    ```javascript
    gjettInput.value = '';
    ```
- **Sjekke om input er gyldig**:
    - Sjekk om `spillerGjett` er et tall mellom 1 og 100.
    - Hvis ikke, kall `giTilbakemelding()` med en melding om at spilleren må skrive inn et gyldig tall.
- **Deaktivere elementer**:
    ```javascript
    gjettKnapp.disabled = true;
    gjettInput.disabled = true;
    ```

---

### **Utfordringer**

- **Feilhåndtering**: Legg inn sjekk for å håndtere ugyldig input, for eksempel hvis spilleren ikke skriver inn noe eller skriver inn tekst.
- **Antall forsøk**: Begrens antall forsøk spilleren har til f.eks. 10. Hvis spilleren ikke har gjettet riktig innen 10 forsøk, avslutt spillet.
- **Start nytt spill**: Legg til en knapp for å starte et nytt spill uten å måtte laste siden på nytt.

## Stilforslag

**Forslag til CSS-fil (`style.css`) for "Gjett Tallet" spillet**

Her er et forslag til en CSS-fil som dere kan implementere for å gi spillet et attraktivt og brukervennlig design.

```css
/* Generell styling for body */
body {
    background-color: #f0f8ff; /* Lys blå bakgrunnsfarge */
    font-family: Arial, sans-serif; /* Lesbar skrifttype */
    text-align: center; /* Sentrerer innholdet */
    margin: 0;
    padding: 0;
}

/* Styling for overskriften */
h1 {
    color: #333; /* Mørk grå farge */
    margin-top: 50px;
}

/* Styling for avsnitt */
p {
    color: #555; /* Mellomgrå farge */
    font-size: 18px;
    margin: 10px;
}

/* Container for input og knapp */
.container {
    margin-top: 20px;
}

/* Styling for inputfeltet */
input[type="number"] {
    padding: 10px;
    font-size: 16px;
    width: 200px;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none; /* Fjerner standard ramme ved fokus */
}

/* Styling for knappen */
button {
    padding: 10px 20px;
    font-size: 16px;
    margin-left: 10px;
    background-color: #4CAF50; /* Grønn bakgrunn */
    color: white; /* Hvit tekst */
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

/* Hover-effekt for knappen */
button:hover {
    background-color: #45a049; /* Mørkere grønn ved hover */
}

/* Styling for tilbakemelding */
#tilbakemelding {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin-top: 30px;
}

/* Responsivt design for mindre skjermer */
@media (max-width: 600px) {
    input[type="number"], button {
        width: 80%;
        margin: 5px 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button {
        margin-left: 0;
    }
}
```

**Forklaring av CSS-stilen:**

- **Body**: Setter en lys blå bakgrunnsfarge for å gjøre siden innbydende. Bruker en lesbar skrifttype og sentrerer innholdet.
- **h1**: Overskriften får en mørk grå farge og ekstra toppmargin for å ikke være helt inntil kanten.
- **p**: Avsnitt får en mellomgrå farge, behagelig skriftstørrelse og litt margin for bedre lesbarhet.
- **.container**: Legger til toppmargin for å skape avstand mellom innholdet.
- **input[type="number"]**: Inputfeltet styles med padding, større skriftstørrelse, bredde, ramme og avrundede hjørner. `outline: none;` fjerner standard fokusramme.
- **button**: Knappen får padding, større skriftstørrelse, margin, grønn bakgrunn, hvit tekst, ingen ramme, avrundede hjørner og peker-markør ved hover.
- **button:hover**: Endrer bakgrunnsfargen til en mørkere grønn når man holder musen over knappen.
- **#tilbakemelding**: Tilbakemeldingsområdet får større og fetere skrift for å skille seg ut.
- **@media**: Responsivt design som tilpasser layouten på mindre skjermer ved å justere bredde og marger, og ved å stable inputfeltet og knappen vertikalt.

**Oppdatering av HTML-koden for å inkludere `.container`:**

For at CSS-stilen skal fungere optimalt, bør dere oppdatere HTML-koden ved å legge til en `<div>` med klassen `container` rundt inputfeltet og knappen.

```html
<body>
    <h1>Gjett Tallet</h1>
    <p>Jeg tenker på et tall mellom 1 og 100. Klarer du å gjette hvilket det er?</p>
    <div class="container">
        <input type="number" id="gjettInput" placeholder="Skriv ditt gjett her" min="1" max="100">
        <button id="gjettKnapp">Gjett</button>
    </div>
    <p id="tilbakemelding"></p>
    <script src="script.js"></script>
</body>
```

**Slik implementerer dere CSS-filen:**

1. **Opprett en ny fil**: Lag en ny fil i samme mappe som `index.html` og `script.js`, og kall den `style.css`.

2. **Lim inn CSS-koden**: Kopier CSS-koden ovenfor og lim den inn i `style.css`.

3. **Koble CSS-filen til HTML**: Sørg for at følgende linje er inkludert i `<head>`-delen av `index.html`:

   ```html
   <link rel="stylesheet" href="style.css">
   ```

**Eksempel på fullstendig `<head>`-seksjon:**

```html
<head>
    <meta charset="UTF-8">
    <title>Gjett Tallet</title>
    <link rel="stylesheet" href="style.css">
</head>
```

**Tips til tilpasning:**

- **Endre farger**: Hvis dere ønsker andre farger, kan dere endre heksadesimale fargekoder i CSS-filen.
- **Skrifttyper**: Prøv andre skrifttyper ved å endre `font-family` i `body`-stylingen. Dere kan også importere skrifttyper fra Google Fonts.
- **Legg til effekter**: Utforsk flere CSS-effekter som skygger, overganger eller animasjoner for å gjøre designet mer interessant.

**Ekstra styling (valgfritt):**

- **Legg til en skygge rundt inputfeltet og knappen:**

  ```css
  input[type="number"], button {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  ```

- **Legg til en overgangseffekt på knappen:**

  ```css
  button {
      transition: background-color 0.3s ease;
  }
  ```

**Resultat:**

Med denne CSS-stilen vil spillet deres se mer profesjonelt og tiltalende ut, noe som kan gjøre det enda morsommere å spille og vise frem til andre.

**Lykke til med styling!**