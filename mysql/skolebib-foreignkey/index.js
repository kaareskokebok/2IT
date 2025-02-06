import express from "express";
import mysql2 from "mysql2";
// Hente data fra .env fila
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3009;



// Database-kobling
const db = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:process.env.DB_PASSWORD,
    database:'skolebib'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to mysql:', err);
        return;
    }
    console.log("Connected to mysql database.");
});

app.get("/forfattere", (req, res) => {
    db.query('SELECT * FROM forfattere', (err, results) => {
        if(err) {
            console.error('Error doing query:', err);
            return; // Avslutt hvis error
        }
        console.log(results);
       res.render("index.ejs", {forfattere:results})
    })
});

app.get("/boker", (req, res) => {
    let sql = `SELECT bok.boktittel, bok.utgivelsesår, forfattere.fornavn, forfattere.etternavn, forfattere.fødselsår 
FROM bok
JOIN forfattere ON bok.forfatter_id = forfattere.id;`
    db.query(sql, (err, results) => {
        if(err) {
            console.error('Error doing query:', err);
            return; // Avslutt hvis error
        }
        console.log(results);
       res.render("index.ejs", {boker:results})
    })
});
app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});