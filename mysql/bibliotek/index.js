import express from "express";
import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const db = mysql2.createConnection({
    host:"localhost",
    user:"root",
    // .env-fila: DB_PASSWORD=root
    password:process.env.DB_PASSWORD,
    database: "bibliotek"
});
// kode for å koble til
db.connect((err) => {
    if(err) {
        console.error("Feil ved tilkobling til mysql:", err);
    }else{
        console.log("Tilkoblet til mysql-database");
    }

});

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/showtitles", (req, res) => {
    db.query("SELECT tittel FROM boker;", (err, results) => {
        // console.log(results);
        // console.log(results[0].tittel)
        // console.log(results[0]["tittel"])
        res.render("index.ejs", {titles:results});
    });
});

app.get("/showall", (req, res) => {
    db.query("SELECT * FROM boker;", (err, results) => {
        if(err) {
            console.error("Feil i spørring:", err);
            return; // Avslutt funksjonen
        }
        res.render("index.ejs", {allInfo:results});
    });
});

// Ruten viser bare tilgjengelig bøker
app.get("/available", (req, res) => {
    db.query("SELECT * FROM boker WHERE laanestatus='tilgjengelig';", (err, results) => {
        if(err) {
            console.error("Feil i spørring:", err);
            return; // Avslutt funksjonen
        }
        res.render("index.ejs", {tilgjengeligeBoker:results});
    });
});

app.post("/laanbok", (req, res) => {
   // I request ligger bok-id
   console.log("hallo?")
    console.log(req.body);
    let bokid = req.body.bokid;
    db.query(`SELECT * FROM boker WHERE id=${bokid};`, (err, results) => {
        if(err) {
            console.error("Feil i spørring:", err);
            return; // Avslutt funksjonen
        }
        console.log(results);
        // Sjekk om tilgjengelig
        if(results[0]["laanestatus"]==="tilgjengelig") {
            // Oppdater databasen
            db.query(`UPDATE boker SET laanestatus = 'utlånt' WHERE id = ${bokid};`, (err, results) => {
         
            });
            // Gi tilbakemelding
            res.render("index.ejs", {laanebok:"Kos deg med boka!"});
        }
        else{
            // Boka ikke tilgjengelig
            res.render("index.ejs", {laanebok:"Dessverre utlånt, prøv igjen senere."});
        }
        
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});