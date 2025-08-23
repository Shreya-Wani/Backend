require('dotenv/config');
const express = require('express');

const {loggerMiddleware} = require('./middlewares/logger')

const bookRouter = require('./routes/books.routes');

const app = express();
const PORT = 8000;

// Middleware (plugins)
app.use(express.json()); // to parse JSON bodies
app.use(loggerMiddleware); // custom middleware to log requests

//Routes
app.use('/books', bookRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));