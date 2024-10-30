function sokBok(){
    // TODO:
    // 1. Les inn bok fra input-felt
    // 2. Sjekk om boktittelen i input-feltet matcher boka i
    // biblioteket (abc-boka)
    // 3. Gi tilbakemelding i txtUt-elementet
}

let bok = "abc-boka";

let inpSokBok = document.getElementById("inpSokBok");
let btnSokBok = document.getElementById("btnSokBok");
let txtUt = document.getElementById("txtUt");

btnSokBok.addEventListener("click", sokBok);