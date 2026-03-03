const http = require('http');
const visitorModule = require('./visitorModule');

const port = 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/' || req.url === '/home') {
        const count = visitorModule.incrementVisitorCount();

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Welcome to the site. Visitor count: ${count}`);

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});