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
   
}

function leverBok(){
    // TODO: 

}

function visBoker(){
    // Jo mere vi er sammen...
    let txt = "<h3>Oversikt bøker</h3><hr>";
    txt += "<ul>";
    for (bok of boker) {
        txt += `<li>${bok.tittel}</li>`;
    }
    txt += "</ul>";

    txtUt.innerHTML = txt;
}

let inpSokBok = document.getElementById("inpSokBok");
let btnSokBok = document.getElementById("btnSokBok");
let txtUt = document.getElementById("txtUt");
let btnVisBoker = document.getElementById("btnVisBoker");
btnSokBok.addEventListener("click", sokBok);
btnLaanBok.addEventListener("click", laanBok);
btnLeverBok.addEventListener("click", leverBok);
btnVisBoker.addEventListener("click", visBoker);

