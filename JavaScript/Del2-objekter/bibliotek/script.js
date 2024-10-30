function sokBok(){
    // TODO:
    // 1. Les inn bok fra input-felt
    // 2. Sjekk om boktittelen i input-feltet matcher boka i
    // biblioteket (abc-boka)
    // 3. Gi tilbakemelding
}

let bok = "abc-boka";

let inpSokBok = document.getElementById("inpSokBok");
let btnSokBok = document.getElementById("btnSokBok");

btnSokBok.addEventListener("click", sokBok);