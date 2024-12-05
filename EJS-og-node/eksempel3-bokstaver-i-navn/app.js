// appen skal ta imot fornavn og etternavn og 
// telle opp antall bokstaver i navnet
import express from "express"

const app = express();
const port = 4000;

// for å lese req.body fra skjema i frontend
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
   res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    console.log(req.body);
    let fnavn = req.body.fornavn;
    let enavn = req.body.etternavn;
    let lengde = fnavn.length + enavn.length;
    res.render("index.ejs", {lengde});
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});