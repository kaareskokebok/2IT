let enbok = {
        tittel: "Mysteriet i Skogen",
        forfatter: "Kari Nordmann",
        sider: 320
};
// Skrive ut tittel
console.log(enbok.tittel);
console.log(enbok["forfatter"]);
// Legge til ny nøkkel og verdi: kom ut i 2009, nøkkelen er aar
enbok.aar = 2009;
console.log(enbok);
// Endre tittelen til Karis Kokebok
enbok.tittel = "Karis Kokebok";

// Løpe gjennom objekt
for (const key in enbok) {
    console.log(key + ":" + enbok[key]);
}

// Slett nøkkel og verdi
delete enbok.aar;
console.log(enbok);

let boker = [
    {
        tittel: "Jenserns Gensere",
        forfatter: "Jensern",
        sider: 497
    },
    {
        tittel: "Mysteriet i Skogen",
        forfatter: "Kari Nordmann",
        sider: 320
    },
];

// Skrive ut tittel til den første boka
console.log(boker[0].tittel);
// Skrive ut forfatter til den siste boka
let antallboker = boker.length;
console.log(boker[antallboker - 1].forfatter);

// Endre antall sider i den første boka til 567
boker[0].sider = 567;

// Legge til en ny bok i arrayet
let nybok = {
    tittel: "Hageslaktern",
    forfatter: "Trymmern",
    sider: 123
};
boker.push(nybok);

// Skrive ut alle titlene
for (const bok of boker){
    console.log(bok.tittel);
}

// Søke etter og slette bøker med mer enn 400 sider
for (let i = 0; i < boker.length; i++){
    if(boker[i].sider > 400) {
        boker.splice(i, 1);
    }
}
// Skrive ut alle titlene
for (const bok of boker){
    console.log(bok.tittel);
}



