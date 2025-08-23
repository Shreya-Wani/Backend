const {pgTable , uuid, varchar, text} = require('drizzle-orm/pg-core');

const authorsTable = pgTable('authors', {
    id: uuid().primaryKey().defaultRandom(),
    firstname: varchar({ length: 50 }).notNull(),
    lastname: varchar({ length: 50 }),
    email: varchar({ length: 200 }).notNull().unique(),
});

module.exports = authorsTable;