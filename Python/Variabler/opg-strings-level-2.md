### Praktisk Case: Registrering av Brukere for et Online Kurs

**Scenario:** Du har fått i oppgave å lage et enkelt Python-program som registrerer brukere for et online kurs. Programmet skal ta imot brukerens navn, alder, og e-postadresse som input. Deretter skal programmet formatere og validere dataene, og til slutt skrive ut en bekreftelse til brukeren.

**Oppgavebeskrivelse:**
1. **Input:**
   - Be brukeren om å skrive inn sitt fulle navn (fornavn og etternavn).
   - Be brukeren om å oppgi sin alder.
   - Be brukeren om å skrive inn sin e-postadresse.

2. **Behandling:**
   - **Navnbehandling:**
     - Sørg for at navnet er korrekt formatert med stor forbokstav i både fornavn og etternavn (f.eks. "ola nordmann" → "Ola Nordmann").
     - Fjern eventuelle ekstra mellomrom før og etter navnet.
   - **Alder:**
     - Konverter alderen til et heltall og sjekk om brukeren er over 18 år. Hvis ikke, skriv ut en melding som sier at brukeren må være over 18 år for å registrere seg.
   - **E-postbehandling:**
     - Sjekk om e-postadressen inneholder "@"-symbolet. Hvis ikke, gi brukeren en feilmelding.

3. **Utdata:**
   - Skriv ut en melding som bekrefter registreringen med brukerens navn og e-postadresse i en formatert setning, f.eks. "Hei, Ola Nordmann! Din registrering med e-posten ola@example.com er fullført."

**Krav til String-metoder:**
- `strip()`: For å fjerne eventuelle ekstra mellomrom før og etter navn eller e-postadresse.
- `title()`: For å formatere navn med stor forbokstav.
- `replace()`: Eventuelt for å håndtere spesielle bokstaver (æ,ø,å) i navn. æ byttes ut med oe, ø med o, og å med aa.
- `in`: For å sjekke om e-postadressen inneholder "@".
- `f` bruk f-strenger: For å formatere utdataene med brukerens navn og e-postadresse.

**Ekstra Utfordring:**
- Legg til funksjonalitet som anonymiserer e-postadressen delvis i bekreftelsesmeldingen (f.eks. vise "ola@exam****.com" i stedet for hele e-postadressen).

**Eksempel på kjøring:**
```plaintext
Skriv inn ditt fulle navn: ola nordmann
Skriv inn din alder: 20
Skriv inn din e-postadresse: ola@example.com

Hei, Ola Nordmann! Din registrering med e-posten ola@example.com er fullført.
```