**JavaScript og HTML: Input/Output, Variabler og If-Else**

---

**Introduksjon**

I denne økten skal vi utforske hvordan vi kan bruke JavaScript sammen med HTML for å lage interaktive nettsider. Vi skal fokusere på:

- **Input og Output**: Hvordan ta inn data fra brukeren og vise resultater.
- **Variabler**: Hvordan lagre og manipulere data.
- **If-Else**: Hvordan kontrollere flyten i programmet basert på betingelser.

Vi vil gå gjennom 4 eksempelprogrammer med forklaringer. Etter hvert eksempel får dere to oppgaver som bygger på det dere har lært. Oppgavene øker i vanskelighetsgrad.

---

### Eksempelprogram 1: Legge sammen to tall

**HTML og JavaScript-kode:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Legg sammen to tall</title>
    <script>
        function leggSammen() {
            // Hent verdiene fra input-feltene og konverter til tall
            var tall1 = parseFloat(document.getElementById("tall1").value);
            var tall2 = parseFloat(document.getElementById("tall2").value);

            // Legg sammen tallene
            var sum = tall1 + tall2;

            // Vis resultatet på nettsiden
            document.getElementById("resultat").innerHTML = "Summen er: " + sum;
        }
    </script>
</head>
<body>
    <h1>Legg sammen to tall</h1>
    <input type="text" id="tall1" placeholder="Første tall">
    <input type="text" id="tall2" placeholder="Andre tall">
    <button onclick="leggSammen()">Beregn</button>
    <p id="resultat"></p>
</body>
</html>
```

**Forklaring:**

- **Input-feltene** lar brukeren skrive inn to tall.
- **Funksjonen `leggSammen()`** henter verdiene, legger dem sammen og viser resultatet.
- **`parseFloat()`** brukes for å konvertere tekst til desimaltall.

---

**Oppgaver til Eksempelprogram 1**

1. **Multiplikasjon av to tall**

   Lag et program som tar inn to tall fra brukeren og multipliserer dem. Vis resultatet på nettsiden.

2. **Summen av tre tall**

   Endre programmet slik at det tar inn tre tall fra brukeren og legger dem sammen. Vis summen på nettsiden.

---

### Eksempelprogram 2: Sjekke om et tall er positivt eller negativt

**HTML og JavaScript-kode:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Positivt eller Negativt Tall</title>
    <script>
        function sjekkTall() {
            // Hent tallet fra input-feltet
            var tall = parseFloat(document.getElementById("tall").value);

            // Sjekk om tallet er positivt, negativt eller null
            if (tall > 0) {
                document.getElementById("resultat").innerHTML = "Tallet er positivt.";
            } else if (tall < 0) {
                document.getElementById("resultat").innerHTML = "Tallet er negativt.";
            } else {
                document.getElementById("resultat").innerHTML = "Tallet er null.";
            }
        }
    </script>
</head>
<body>
    <h1>Sjekk om tallet er positivt eller negativt</h1>
    <input type="text" id="tall" placeholder="Skriv inn et tall">
    <button onclick="sjekkTall()">Sjekk</button>
    <p id="resultat"></p>
</body>
</html>
```

**Forklaring:**

- **Input-feltet** tar inn et tall fra brukeren.
- **Funksjonen `sjekkTall()`** bruker if-else for å bestemme om tallet er positivt, negativt eller null.
- **Resultatet** vises på nettsiden.

---

**Oppgaver til Eksempelprogram 2**

3. **Partall eller Oddetall**

   Lag et program som sjekker om tallet brukeren skriver inn er et partall eller oddetall. Vis resultatet på nettsiden.

4. **Alderssjekk**

   Lag et program som tar inn brukerens alder og sjekker om brukeren er myndig (18 år eller eldre). Vis en passende melding på nettsiden.

---

### Eksempelprogram 3: Enkel Kalkulator

**HTML og JavaScript-kode:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Enkel Kalkulator</title>
    <script>
        function kalkuler() {
            var tall1 = parseFloat(document.getElementById("tall1").value);
            var tall2 = parseFloat(document.getElementById("tall2").value);
            var operasjon = document.getElementById("operasjon").value;
            var resultat;

            // Utfør operasjonen basert på brukerens valg
            if (operasjon == "+") {
                resultat = tall1 + tall2;
            } else if (operasjon == "-") {
                resultat = tall1 - tall2;
            } else if (operasjon == "*") {
                resultat = tall1 * tall2;
            } else if (operasjon == "/") {
                resultat = tall1 / tall2;
            } else {
                resultat = "Ugyldig operasjon";
            }

            document.getElementById("resultat").innerHTML = "Resultatet er: " + resultat;
        }
    </script>
</head>
<body>
    <h1>Enkel Kalkulator</h1>
    <input type="text" id="tall1" placeholder="Første tall">
    <select id="operasjon">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <input type="text" id="tall2" placeholder="Andre tall">
    <button onclick="kalkuler()">Beregn</button>
    <p id="resultat"></p>
</body>
</html>
```

**Forklaring:**

- **Brukeren** kan velge en matematisk operasjon.
- **Funksjonen `kalkuler()`** utfører operasjonen basert på if-else.
- **Resultatet** vises på nettsiden.

---

**Oppgaver til Eksempelprogram 3**

5. **Legg til Modulus**

   Utvid kalkulatoren slik at den også kan utføre modulus-operasjonen (`%`). Dette gir resten etter divisjon av to tall.

6. **Bruk av Switch-Case**

   Endre kalkulatoren til å bruke switch-case i stedet for if-else for å bestemme hvilken operasjon som skal utføres.

---

### Eksempelprogram 4: BMI-Kalkulator

**HTML og JavaScript-kode:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>BMI-Kalkulator</title>
    <script>
        function beregnBMI() {
            var vekt = parseFloat(document.getElementById("vekt").value);
            var hoyde = parseFloat(document.getElementById("hoyde").value) / 100; // Konverter cm til meter
            var bmi = vekt / (hoyde * hoyde);
            var kategori;

            // Bestem BMI-kategorien
            if (bmi < 18.5) {
                kategori = "Undervekt";
            } else if (bmi < 25) {
                kategori = "Normalvekt";
            } else if (bmi < 30) {
                kategori = "Overvekt";
            } else {
                kategori = "Fedme";
            }

            document.getElementById("resultat").innerHTML = "Din BMI er " + bmi.toFixed(1) + " (" + kategori + ")";
        }
    </script>
</head>
<body>
    <h1>BMI-Kalkulator</h1>
    <input type="text" id="vekt" placeholder="Vekt i kg">
    <input type="text" id="hoyde" placeholder="Høyde i cm">
    <button onclick="beregnBMI()">Beregn</button>
    <p id="resultat"></p>
</body>
</html>
```

**Forklaring:**

- **Brukeren** skriver inn vekt og høyde.
- **Funksjonen `beregnBMI()`** kalkulerer BMI og bestemmer kategori.
- **Resultatet** viser BMI-verdi og kategori.

---

**Oppgaver til Eksempelprogram 4**

7. **Karakterkonvertering**

   Lag et program som tar inn en poengsum (0-100) og konverterer den til en karakter basert på følgende skala:

   - **A**: 90-100
   - **B**: 80-89
   - **C**: 70-79
   - **D**: 60-69
   - **E**: 50-59
   - **F**: 0-49

   Vis karakteren på nettsiden.

8. **Temperaturkonvertering**

   Lag et program der brukeren kan skrive inn en temperatur i Celsius, og programmet konverterer den til Fahrenheit. Hvis temperaturen er under 0 grader Celsius, skal programmet vise en melding om at det er kaldt ute.

---

**Lykke til med oppgavene!**