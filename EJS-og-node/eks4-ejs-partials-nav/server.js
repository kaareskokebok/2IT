import express from "express";

const app = express();
const port = 3000;
// Plassering av statiske filer, som er public
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
