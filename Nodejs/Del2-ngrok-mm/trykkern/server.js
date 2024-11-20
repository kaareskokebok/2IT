const express = require("express");
const app = express();

app.use(express.static('public'));
// For å hente skjemadata
app.use(express.urlencoded({ extended:true }));

let antallTrykk = 0;

app.get('/trykk', (req, res) => {
   antallTrykk++;
   console.log("trykket " + antallTrykk);
   let htmlsiden = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Trykkern</h1>

    <a href="/trykk"><button>Trykk</button></a>

    <p>Du har trykket ${antallTrykk} ganger</p>
</body>
</html>`;

if(antallTrykk >= 10 ) {
    antallTrykk = 10;
    htmlsiden = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Trykkern</h1>

    <p><strong>IKKE</strong> lov å trykke mer, sorry</p>
    <p>Du har trykket ${antallTrykk} ganger</p>
</body>
</html>`;
}
   res.send(htmlsiden);
});


app.listen(3000, () => {
    console.log('Server kjører på port http://localhost:3000');
});

let htmlsiden = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Trykkern</h1>

    <a href="/trykk"><button>Trykk</button></a>

    <p></p>
</body>
</html>`;