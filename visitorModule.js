const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'visitors.txt');

function getVisitorCount() {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return parseInt(data);
    } catch (err) {
        return 0;
    }
}

function incrementVisitorCount() {
    let count = getVisitorCount();
    count++;
    fs.writeFileSync(filePath, count.toString());
    return count;
}

module.exports = {
    incrementVisitorCount
};