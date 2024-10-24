// console.log("test");
// const betyr constant: variabelen kan ikke endres senere
// f.eks. er steinKnapp = ... ikke tillatt

// Funksjoner i toppen
// funksjonskall cpuValg();
function cpuValg() {
    const valg = ["Stein", "Saks", "Papir"];
    // Math.random(), gir tilfeldig flyttall 0-1
    // Math.floor(), runder ned til nærmeste heltall
    // TODO: lag tilfeldig heltall 0, 1, eller 2
    const index = Math.floor(Math.random() * valg.length);
    const cpuValget = valg[index];
    return cpuValget;
}

// spiller og cpu er parametere (argumenter)
// spiller er spillervalget 
// cpu er cpu-valget
// Funksjonen returnerer 'Uavgjort!', 'Du vant!' eller 'Du tapte!'
function avgjorVinner(spiller, cpu) {
    if (spiller === cpu) {
        return "Uavgjort!";
    } else if (
        (spiller === "Stein" && cpu === "Saks") ||
        (spiller === "Saks" && cpu === "Papir") ||
        (spiller === "Papir" && cpu === "Stein")
    ) {
        return "Du vant!";
    } else {
        return "Du tapte!";
    }
}

function spill(spillerValg) {
    const cpuValget = cpuValg();
    const resultatTxt = avgjorVinner(spillerValg, cpuValget);

    resultat.textContent = `Du valgte ${spillerValg}, cpu valgte ${cpuValget}. ${resultatTxt}`;
}

//console.log(avgjorVinner("Stein", "Saks")); // Du vant!
const steinKnapp = document.getElementById("stein");
const saksKnapp = document.getElementById("saks");
const papirKnapp = document.getElementById("papir");
const resultat = document.getElementById("txtUt");

// Lyttere til knappene
steinKnapp.addEventListener("click", () => spill("Stein"));
// TODO: add andre knapper
resultat.textContent = cpuValg();