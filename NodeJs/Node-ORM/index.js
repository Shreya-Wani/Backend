require('dotenv/config');
const db = require('./db');
const { usersTable } = require('./drizzle/schema');

async function getAllUsers() {
    const users = await db.select().from(usersTable);
    console.log(`users in DB` , users);
    return users;
}

async function createUser({id, name, email}) {
    await db.insert(usersTable).values({
        id,
        name,
        email
    });
}

// createUser({ id: 1, name: 'shivam', email: 'shivam346@gmail.com' });
// createUser({ id: 2, name: 'shreya', email: 'shreya6746@gmail.com' });

getAllUsers()