### Oppgavesett 1: EJS og node

1. **Dynamisk variabel i EJS**  
   - Opprett en server som sender en enkel variabel, for eksempel et tall (`count = 5`), og vis det i en `<p>`-tag på en EJS-side.

2. **If-else-logikk i EJS**  
   - Lag en server som sender en variabel `hour` med verdien fra `new Date().getHours()`.  
   - I EJS-filen, vis "God morgen" hvis `hour < 12` og "God ettermiddag" ellers.

3. **Lister og løkker i EJS**  
   - Lag en server som sender en array av frukt, f.eks. `["eple", "banan", "appelsin"]`.  
   - Vis fruktene som en liste i en `<ul>`-tag.

4. **HTML-escaping og rå utskrift**  
   - Send en variabel `htmlContent` med verdien `"<strong>Viktig melding</strong>"`.  
   - Vis innholdet én gang med `<%= %>` (HTML-escaped) og én gang med `<%- %>` (rå HTML).

5. **Dynamisk side med EJS-tagger**  
   - Lag en server som sender følgende data:  
     ```javascript
     const data = {
       title: "Min dynamiske side",
       date: new Date().toDateString(),
       tasks: ["Lære EJS", "Teste res.render", "Fullføre oppgaver"]
     };
     ```  
   - Bruk EJS til å vise en overskrift med tittelen, dagens dato, og en liste over oppgavene.

6. **Bruk av EJS med betingelser og løkker**  
   - Send en array av objekter, for eksempel:  
     ```javascript
     const personer = [
       { navn: "Ola", alder: 15 },
       { navn: "Kari", alder: 18 },
       { navn: "Per", alder: 12 }
     ];
     ```  
   - Vis en liste over personene, og merk dem som "myndig" eller "ikke myndig" basert på alderen deres.

7. **Inkludering av en footer med EJS**  
   - Lag en egen `footer.ejs` med en enkel copyright-melding.  
   - Inkluder denne i en hoved-EJS-fil ved hjelp av `<%- include() %>`.


10. **Custom EJS-filtrering**  
    - Implementer en EJS-filterfunksjon (bruk `.filters`) for å endre tekst til store bokstaver.  
    - Hint: Søk etter hvordan man definerer og bruker EJS-filtre.  
    - Eksempel:  
      ```ejs
      <p><%= "hei, verden" | uppercase %></p>
      ```  
      Output:  
      ```html
      <p>HEI, VERDEN</p>
      ```