console.log("test");

let mann = {
    fornavn : "Jensern",
    etternavn: "Med Gensern",
    alder: 17,
    erKjekk: true,
    venner: ["kari", "per", "ali"],
    fulltNavn: function() {
        return this.fornavn + " " + this.etternavn
    }
};

console.log(mann.fornavn);
console.log(mann.alder);
console.log(mann.fulltNavn());

// Endre fornavn
mann.fornavn = "Kentern";

// øke alderen med 1 år
mann.alder++;

console.log(mann.alder);

// slett kjekk egenskapen
delete mann.erKjekk

console.log(mann)