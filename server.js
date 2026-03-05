// server.js
// Author: Eileen Hernandez Chavez
// Purpose: Express web server with visitor tracking

const express = require("express");
const path = require("path");

const visitorModule = require("./visitorModule");

const app = express();
const PORT = 3000;


// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));


// ---------- ROUTES ---------- //

// Home Page
app.get("/", (req, res) => {
    visitorModule.addVisit("home");
    res.sendFile(path.join(__dirname, "public", "home.html"));
});


// About Page
app.get("/about", (req, res) => {
    visitorModule.addVisit("about");
    res.sendFile(path.join(__dirname, "public", "about.html"));
});


// FAQ Page
app.get("/faq", (req, res) => {
    visitorModule.addVisit("faq");
    res.sendFile(path.join(__dirname, "public", "faq.html"));
});


// ---------- API ROUTE ---------- //

app.get("/api/visits", (req, res) => {
    const visits = visitorModule.getVisits();
    res.json(visits);
});


// ---------- START SERVER ---------- //

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});