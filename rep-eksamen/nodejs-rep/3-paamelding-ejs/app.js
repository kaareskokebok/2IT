// nettsiden skal ha et skjema der brukeren kan skrive inn antall personer
// får tilbake en enkel kvittering med antall personer og pris (150,- stykk)
import express from "express";

const app = express();
const PORT = 3005;

app.use(express.static("public"));
// For å lese fra skjema med req.body
app.use(express.urlencoded({ extended:true }));

app.get("/", (req, res)=> {
    res.render("index.ejs");
});

app.post("/paamelding", (req, res) => {
    console.log(req.body);
    console.log(req.body.inpAntall);
    const antall = req.body.inpAntall;
    // Regn ut pris
    const stykkpris = 150;
    let pris = antall * stykkpris;
    // Send tilbakemelding
    
    // Send data til index.ejs
    res.render("index.ejs", {antall, stykkpris, pris});
});

app.listen(PORT, () => {
    console.log(`Server kjører på port ${PORT}.`)
    console.log(`http://localhost:${PORT}`);
});


