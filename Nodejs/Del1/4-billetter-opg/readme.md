# Instrukser for billetter-opg, nodejs, express, dotenv

## Hent nyeste versjon av 2IT-repo
Bruk `git pull` for å hente nyeste versjon av 2IT git repo. Ellers bruk
```bash
git clone https://github.com/kaareskokebok/2IT.git
```
for å klone alt til mappa `2IT`.

## Kopier oppgave-mappa
Kopier mappa til denne oppgaven til ditt eget område. 
I rot-mappa til oppgaven, åpne terminalen og skriv
```bash
npm i
```
Dette vil installere alle moduler som er listet som `dependencies`i `package.json`.

## Klargjør dotenv
Lag en ny fil `.env`på samme nivå som `index.js`. Her lagrer du det hemmelige passordet slik:
```dotenv
PASSORD=mittpassord123
```
Lagre filen.

## Testkjøring
Skriv `node index.js` for å kjøre prosjektet. Kontroller at passordet du lagret i `.env` fila nå dukker opp i konsollen.

## Gjør alle TODOs
I hovedsak skal du bare jobbe med fila
`index.js` og fullføre denne. Se gjennom TODOs.

---
Good luck!
