const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8000;

//in memory database
const books = [
  { id: 1, title: 'Book One', author: 'Author One' },
  { id: 2, title: 'Book Two', author: 'Author Two' },
];

// Middleware (plugins)
app.use(express.json()); // to parse JSON bodies

app.use (function (req, res, next) {
    const log = `\n[${Date.now()}] ${req.method} ${req.path}`;
    fs.appendFileSync('log.txt', log, 'utf-8');
    next();
})

//for understanding the flow of middleware we will add two middlewares
// Middleware A and Middleware B
// Middleware A will log a message and call next to continue to Middleware B
// Middleware B will log a message and send a JSON response
// Note: The next() call in Middleware B will not be executed because the response is sent

// app.use(function (req, res, next) {
//     console.log("I am a middleware A");
//     // return res.json({ message: 'Hello from middleware A' });
//     next(); // call next middleware or route handler
// });

// app.use(function (req, res, next) {
//     console.log("I am a middleware B");
//     return res.json({ message: 'Hello from middleware B' }); 
//     next(); // call next middleware or route handler
// });

//Route to get all books
app.get('/books', (req,res) => {
    res.json(books);
});

app.get('/books/:id', (req,res) => {
    const id = req.params.id;
    const book = books.find((e) => e.id == id);

    if (isNaN(id))
        return res
            .status(400)
            .json({ error: 'Invalid book ID' });

    if (!book) 
        return res
            .status(404)
            .json({ message: 'Book not found' });
    
    return res.json(book);
})

app.post('/books', (req,res) => {
    const { title, author } = req.body;

    if (!title || title === '') return res.status(400).json({ error: 'Title is required' });

    if (!author || author === '') return res.status(400).json({ error: 'Author is required' });

    const id = books.length + 1;
    const book = { id, title, author };
    books.push(book);

    return res.status(201).json({message: 'Books created successfully.', id});
})

app.delete('/books/:id', (req,res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) 
        return res.status(400).json({ error: 'Invalid book ID' });
    
    const indexToDelete = books.findIndex((e) => e.id === id);

    if (indexToDelete < 0) 
        return res.status(404).json({ message: 'Book with id ${id} not exist' });

        books.splice(indexToDelete, 1);

    return res.status(200).json({ message: 'Book deleted successfully' });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));