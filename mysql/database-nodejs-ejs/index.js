import express from "express";
import mysql2 from "mysql2";
// Hente data fra .env fila
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;



// Database-kobling
const db = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:process.env.DB_PASSWORD,
    database:'bibliotek'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to mysql:', err);
        return;
    }
    console.log("Connected to mysql database.");
});

app.get("/", (req, res) => {
    db.query('SELECT tittel,forfatter FROM boker', (err, results) => {
        if(err) {
            console.error('Error doing query:', err);
            return; // Avslutt hvis error
        }
        console.log(results);
        console.log(results[0]);
        console.log(results[0].tittelen);
        console.log(results[0]["tittelen"]);

        let html = "<h1>Våre bøker</h1>";
        html += "<ul>";
        for(let bok of results){
            html += `<li>${bok.tittel} av ${bok.forfatter} </li>`;
        }
        html += "</ul>";
        
        res.send(html);
    })
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})