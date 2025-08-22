require('dotenv/config');
const { defineConfig } = require('drizzle-Kit');

const config = defineConfig({
    dialect: 'postgresql',
    out: "./drizzle",
    schema: "./drizzle/schema.js",
    dbCredentials: {
        url: process.env.DATABASE_URL
    }
})

module.exports = config;