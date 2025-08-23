const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Incoming request at [${Date.now()}]`);
    //console.log(req.headers);
    console.log(`Request method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);

    switch(req.url) {
        case '/':
            return res.end('Welcome to the homepage!');
        case '/about':
            return res.end('Welcome to the about page!');
        case '/contact':
            return res.end('Welcome to the contact page!');
        default:
            res.writeHead(404);
            return res.end('404 Not Found');
    }

    // ..
    res.writeHead(200);
    res.end(`hy, you can accept ${req.headers['accept-language']}`);
});

server.listen(8000, function () {
    console.log('Server is listening on port 8000');
})

