// nettsiden skal ha et skjema der brukeren kan skrive inn antall personer
// får tilbake en enkel kvittering med antall personer og pris (150,- stykk)
import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
// For å lese fra skjema med req.body
app.use(express.urlencoded({ extended:true }));


app.post("/paamelding", (req, res) => {
    console.log(req.body);
});

app.listen(PORT, () => {
    console.log(`Server kjører på port ${PORT}.`)
    console.log(`http://localhost:${PORT}`);
});


