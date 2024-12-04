import express from "express";  // type:module
// const express = require("express")  // type:commonjs

const app = express();
const port = 3000;

// Cannot get /
// si hei ved /
app.get("/", (req, res) => {
    //res.send("<h1>HEI! you can GET /</h1>")
    const today = new Date();
    const day = today.getDay()
    console.log(day);
    let dayType = "weekday";
    let advice = "work hard";
    // lørdag eller søndag
    if ( day === 6 || day === 0){
        dayType = "weekend";
        advice = "relax and have fun"
    }
    res.render("index.ejs", {
        dayType,
        advice
    });
})
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})