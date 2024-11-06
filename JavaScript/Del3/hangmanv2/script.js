function oppdaterHangmanBilde() {
    let bilde = document.getElementById("hangmanImage");
    // Bruk gjenværendeForsøk for å velge bilde
    let bildenr = 6 - gjenværendeForsøk;
    bilde.src = `hangman${bildenr}.png`;
}

function gjettBokstav() {
    let inpGjett = document.getElementById("letterInput");
    let bokstav = inpGjett.value; 
    // Tømme input-feltet
    inpGjett.value = "";
    
    // Sjekk om riktig bokstav
    if ( hemmeligOrdBokstaver.includes(bokstav) ) {
        // alert("riktig bokstav")
        // Hvilken plass står den riktige bokstaven på?
        for (let i = 0; i < hemmeligOrdBokstaver.length; i++) {
            if (bokstav === hemmeligOrdBokstaver[i]) {
                riktigGjetninger[i] = bokstav;
            }
        }
    } else {
        // Ikke riktig bokstav
        // Legg til i feilGjetninger
        // Sjekk at bokstaven IKKE allerede er gjettet på
        if ( !feilGjetninger.includes(bokstav) ) { 
            feilGjetninger.push(bokstav);
            gjenværendeForsøk--;  // minker forsøk med 1
            oppdaterHangmanBilde();
            document.getElementById("wrongLetters").textContent = "Feilgjetninger: " + feilGjetninger.join(", ");
            document.getElementById("remainingAttempts").textContent = "Forsøk igjen: " + gjenværendeForsøk;
        } else {
            alert(`Du har allerede gjettet på ${bokstav}`);
        }
    }

    document.getElementById("wordDisplay").textContent = riktigGjetninger.join(' ');
}
let ordliste = ['javascript', 'html', 'css', 'programmering', 'webutvikling', 'jens'];
// Velge et tilfeldig ord
let tilfeldigIndex = Math.floor(Math.random()*ordliste.length);
let hemmeligOrd = ordliste[tilfeldigIndex];
alert(hemmeligOrd);
// Feilgjetninger og forsøk igjen
let feilGjetninger = [];
let gjenværendeForsøk = 6;

// Deler opp i array av bokstaver
let hemmeligOrdBokstaver = hemmeligOrd.split("");

// Array for de riktige gjetningene
let riktigGjetninger = [];
for (let i = 0; i < hemmeligOrdBokstaver.length; i++) {
    riktigGjetninger[i] = '_';
}
console.log(riktigGjetninger.join(" "));

// Vis understrekene med mellomrom imellom bokstavene (eller _)
document.getElementById("wordDisplay").textContent = riktigGjetninger.join(' ');

// Knappen
document.getElementById("guessButton").addEventListener("click", gjettBokstav);
// Gjette ved å trykke på ENTER
document.getElementById("letterInput").addEventListener("keyup", 
    function(event) {  // event inneholder hendelsesinformasjon, mus, tast osv.
        if(event.key === "Enter") {
            gjettBokstav();
        }
    }
);

