# Handout: Ansattoversikt med EJS og Skjema

Du skal lage et CRUD-prosjekt (Create, Read, Update, Delete) for å håndtere ansatte i en bedrift, ved hjelp av **Node.js**, **Express**, **MySQL** og **EJS**. 

Prosjektet skal bestå av flere **EJS-filer** som hver har sin funksjonalitet. Elevene må selv finne ut av *HTML*-elementene, men nedenfor beskrives kort hva hver side skal gjøre, og dere får en ferdig **`style.css`** til design.

---

## 1. Mappestruktur

En mulig mappestruktur kan se slik ut:

```
prosjektmappe/
├─ public/
│  └─ style.css
├─ views/
│  ├─ partials/
│  │  ├─ header.ejs
│  │  └─ footer.ejs
│  ├─ index.ejs
│  ├─ ny-ansatt.ejs
│  └─ rediger.ejs
└─ index.js
```

### Kort forklaring:

- **public/**: Her legger du **style.css** og eventuelle andre statiske filer (bilder, JavaScript osv.).  
- **views/**: Her legger du **EJS-maler**.  
  - **partials/**: Underkatalog for gjenbrukbare EJS-deler (`header.ejs`, `footer.ejs`).  
  - **index.ejs**, **ny-ansatt.ejs**, **rediger.ejs**: Selve sidene for funksjonaliteten.

---

## 2. Funksjonalitet i hver EJS-fil

### A) `partials/header.ejs`
- **Funksjon**:  
  - Viser øverste del av siden.  
  - Har en tittel for applikasjonen.  
  - Gir mulighet for å navigere til ulike deler av løsningen (f.eks. gå til forsiden, vise ansatte, gå til «ny ansatt»-skjema).  
  - Skal importeres øverst i de andre EJS-filene.

### B) `partials/footer.ejs`
- **Funksjon**:  
  - Viser nederste del av siden.  
  - Inneholder for eksempel en enkel bunntekst eller informasjon om siden.  
  - Skal importeres nederst i de andre EJS-filene.

### C) `index.ejs`
- **Funksjon**:  
  - Viser startsiden.  
  - Skal ha en mekanisme der brukeren kan bestemme om de vil se en liste over ansatte (for eksempel via en knapp «Vis ansatte»).  
  - Hvis listen over ansatte er hentet fra databasen, skal den vises her.  
  - Gir også mulighet for å søke etter ansatt på fornavn, og sortere ansatte etter årslønn (høyest lønn øverst).

### D) `ny-ansatt.ejs`
- **Funksjon**:  
  - Viser et skjema for å legge til en ny ansatt.  
  - Brukeren fyller inn nødvendige data (fornavn, etternavn, epost osv.), og sender inn skjemaet.  
  - Serveren lager en ny rad i databasen. 
  - Det skal også være mulig å sparke en ansatt her. 

### E) `rediger.ejs`
- **Funksjon**:  
  - Viser et skjema for å redigere data om en allerede eksisterende ansatt.  
  - Brukeren kan oppdatere felt som stilling, årslønn m.m.  
  - Lagrer endringene ved å sende inn skjemaet til serveren (oppdaterer i databasen).
  

---

## 3. Kode for `style.css`

Under ser du et **fullstendig** forslag til en enkel `style.css`. Legg den i **public/**-mappen. Deretter kan du lenke til den i for eksempel `header.ejs` med en `<link rel="stylesheet" href="/style.css">`. 

```css
/* public/style.css */

/* Generell styling */
body {
    font-family: Arial, sans-serif;
    margin: 20px;
    background-color: #f9f9f9;
}

header {
    background-color: #333;
    color: #fff;
    padding: 10px;
}

header h1 {
    margin: 0;
    font-size: 1.5rem;
}

nav {
    margin-top: 5px;
}

nav form {
    display: inline-block;
    margin-right: 10px;
}

footer {
    background-color: #eee;
    padding: 10px;
    margin-top: 20px;
    text-align: center;
}

h2 {
    margin-top: 0;
}

/* Tabell for ansattliste */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    background-color: #fff;
}

table th,
table td {
    border: 1px solid #ccc;
    padding: 8px;
}

table th {
    background-color: #f1f1f1;
}

/* Input-felt */
input[type="text"],
input[type="number"],
input[type="email"] {
    padding: 5px;
    margin: 5px 0;
    width: 200px;
    box-sizing: border-box;
}

/* Knapper */
button {
    padding: 5px 10px;
    cursor: pointer;
    background-color: #007BFF;
    border: none;
    color: #fff;
    margin-top: 10px;
}

button:hover {
    background-color: #0056b3;
}

/* Skjema-elementer */
form label {
    display: block;
    margin-top: 10px;
    font-weight: bold;
}
```

---

## 4. Videre arbeid

- **Implementer** ønsket logikk i `index.js` (ruter, databasekobling, innhenting av data, håndtering av skjema osv.).  
- **Fyll** EJS-filene med HTML-elementene du trenger (f.eks. `<table>`, `<form>`, `<input>`, `<button>`).  
- **Tilpass** `style.css` videre hvis du vil endre farger, layout eller fontstørrelser.  

Når du har gjennomført dette, har du et enkelt, men effektivt oppsett for å vise, legge til, redigere og slette ansatte i en database, med **EJS** som templatemotor og en dedikert **CSS**-fil for design. Lykke til!