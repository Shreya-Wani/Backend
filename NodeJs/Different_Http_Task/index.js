const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
  const method = req.method;
  const path = req.url;

  const log = `\n[${Date.now()}]: ${method} ${path}`;
  fs.appendFileSync('log.txt', log, 'utf-8');
  switch (method) {
    case 'GET':
      {
        switch (path) {
          case '/':
            return res.
            writeHead(200).
            end(
              'Hello from the server 👋🏻'
            );  
          case '/contact-us':
            return res.
            writeHead(200).
            end(
              'ok, Contact us at email: shreyaxyz@gmail.com or call us at +91 1234567890'
            );
          case '/tweet':
            return res.
            writeHead(200).
            end('Tweet-1 \n Tweet-2');
        }
      }
      break;
    case 'POST':
      {
        switch (path) {
          case '/tweet':
            return res.
            writeHead(200).
            end(
              'ok, Your tweet has been posted successfully!'
            );
      }      
    }
  
  }
  return res.writeHead(404).end('Youre lost man!');
});

server.listen(8000, () => console.log(`Http server is running on PORT 8000`));
