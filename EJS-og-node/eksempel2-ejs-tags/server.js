import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
   const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    fruits: ["apple", "banana", "cherry"],
    htmlContent: "<em>Dette er em text</em> <strong>STERK</strong>"
   }
   res.render("index.ejs", data);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});