const express = require('express');
const app = express();

app.get('/', function(req,res) {
    res.end('Home Page');
});

app.get('/contact-us', function(req, res) {
    res.end('Contact Us Page');
});

app.get('/tweets', (req, res) => {
    res.end('Tweets Page');
});

app.post('/tweets', (req, res) => {
    res.status(201).end('Post a Tweet');
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
})
