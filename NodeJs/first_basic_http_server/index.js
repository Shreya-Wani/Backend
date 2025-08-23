const http = require("http")

const server = http.createServer(function (req,res) {
    console.log("Request received")

    res.writeHead(200);
    res.end("Thanks, for visiting my server!\n");
})

server.listen(8000, function() {
    console.log("Server is listening on port 8000");
}) 
