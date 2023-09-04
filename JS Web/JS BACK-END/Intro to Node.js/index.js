const http = require('http');
const port = 5000;

const homePage = require('./views/index');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    switch (req.url) {
        case '/':
            res.write(homePage);
            break;
    
        default:
            res.write(`<h1>404</h1>`);
            break;
    }
    res.end();
}).listen(port);

console.log('Server is running..');