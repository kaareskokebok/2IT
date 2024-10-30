// Array-funksjoner: 
// array.remove("boktittel")
// array.push("boktittel"), legge til bok
// array.includes("boktittel")
// array.indexOf("boktittel")


function sokBok(){
    // TODO:
    // 1. Les inn bok fra input-felt
    let sokebok = inpSokBok.value;
    // 2. Sjekk om boktittelen i input-feltet en av bøkene i 
    // biblioteket
    if (boker.includes(sokebok)) {
        txtUt.textContent = "Boka finnes";
    } else{
        txtUt.textContent = "Boka finnes ikke";
    }

    // 3. Gi tilbakemelding i txtUt-elementet
 
}

function laanBok(){
    // Todo: sjekk om boka finnes først
    let sokebok = inpSokBok.value;
    // Tips: ligner på søkeboklet sokebok = inpSokBok.value;
    // 2. Sjekk om boktittelen i input-feltet en av bøkene i 
    // biblioteket
    if (boker.includes(sokebok)) {
        let index = boker.indexOf(sokebok);
        boker.splice(index, 1);  // slett 1 bok på plass index

        txtUt.textContent = "Boka ble utlånt. ";
        txtUt.textContent += boker;
    } else{
        txtUt.textContent = "Boka finnes ikke";
    }
    console.log(boker);
    // Fjern fra array dersom den finnes
    // Gi tilbakemelding
}

function leverBok(){
    // TODO: legg til boka i arrayet bøker
    // Gi tilbakemelding
}

let boker = ["abc-boka", "def-boka", "Norske Fjell", "Q", "Yo-yo"];

let inpSokBok = document.getElementById("inpSokBok");
let btnSokBok = document.getElementById("btnSokBok");
let txtUt = document.getElementById("txtUt");

btnSokBok.addEventListener("click", sokBok);
btnLaanBok.addEventListener("click", laanBok);
btnLeverBok.addEventListener("click", leverBok);