// visitorModule.js
// Module for reading and writing visitor data

const fs = require("fs");

const file = "visitors.txt";


// Create file if it doesn't exist
function initializeFile() {

    if (!fs.existsSync(file)) {

        const startingData = {
            home: 0,
            about: 0,
            faq: 0
        };

        fs.writeFileSync(file, JSON.stringify(startingData, null, 2));
    }
}


// Get visit data
function getVisits() {

    initializeFile();

    const data = fs.readFileSync(file);

    return JSON.parse(data);
}


// Add visit to a page
function addVisit(page) {

    const visits = getVisits();

    if (visits[page] !== undefined) {
        visits[page]++;
    }

    fs.writeFileSync(file, JSON.stringify(visits, null, 2));
}


// Export functions
module.exports = {
    addVisit,
    getVisits
};