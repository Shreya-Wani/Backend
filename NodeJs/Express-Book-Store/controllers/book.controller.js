const booksTable = require('../models/book.model');
const db = require('../db');
const {eq} = require('drizzle-orm');

exports.getAllBooks = async (req, res) => {
    const books = await db.select().from(booksTable);
    return res.json(books);
}

exports.getBookById = async (req, res) => {
    const id = req.params.id;

    const [book] = await db.
        select()
        .from(booksTable)
        .where((table) => eq(table.id, id))
        .limit(1);

    if (!book) 
        return res
            .status(404)
            .json({ message: 'Book not found' });
    
    return res.json(book);
}

exports.createBook = async (req, res) => {
    const { title, description, authorId } = req.body;

    if (!title || title === '') return res.status(400).json({ error: 'Title is required' });

    const [result] = await db
    .insert(booksTable)
    .values({
        title, 
        authorId,
        description,
    }).returning({
        id: booksTable.id,
    });

    return res.status(201).json({message: 'Books created successfully.', id: result.id});
}

exports.deleteBookById = async (req, res) => {
    const id = req.params.id;

    await db.delete(booksTable).where(eq(booksTable.id, id));

    return res.status(200).json({ message: 'Book deleted successfully' });
}