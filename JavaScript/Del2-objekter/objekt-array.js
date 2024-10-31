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


