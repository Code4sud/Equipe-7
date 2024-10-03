// plugins/turso.js
const { createClient } = require('@libsql/client');
const fp = require("fastify-plugin");

async function tursoPlugin(fastify, options) {
    // Initialize the Turso client
    const tursoClient = createClient({
        url: process.env.TURSO_DATABASE_URL, // Your Turso database URL
        authToken: process.env.TURSO_AUTH_TOKEN, // Your API token
    });

    // Attach the Turso client to the Fastify instance
    fastify.decorate('turso', tursoClient);

    return tursoClient
}

// Export the plugin

module.exports = tursoPlugin