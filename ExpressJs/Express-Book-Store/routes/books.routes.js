const express = require('express')
const {BOOKS} = require('../db/book');

const router = express.Router();

router.get('/', (req,res) => {
    res.json(BOOKS);
});

router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id))
        return res
            .status(400)
            .json({ error: 'Invalid book ID' });

    const book = BOOKS.find((e) => e.id === id);

    if (!book) 
        return res
            .status(404)
            .json({ message: 'Book not found' });
    
    return res.json(book);
})

router.post('/', (req,res) => {
    const { title, author } = req.body;

    if (!title || title === '') return res.status(400).json({ error: 'Title is required' });

    if (!author || author === '') return res.status(400).json({ error: 'Author is required' });

    const id = BOOKS.length + 1;

    const book = { id, title, author };
    BOOKS.push(book);

    return res.status(201).json({message: 'Books created successfully.', id});
})

router.delete('/:id', (req,res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) 
        return res.status(400).json({ error: 'Invalid book ID' });
    
    const indexToDelete = BOOKS.findIndex((e) => e.id === id);

    if (indexToDelete < 0) 
        return res.status(404).json({ message: 'Book with id ${id} not exist' });

        BOOKS.splice(indexToDelete, 1);

    return res.status(200).json({ message: 'Book deleted successfully' });
});

module.exports = router;