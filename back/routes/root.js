"use strict";

const { createClient } = require('@libsql/client');
const csv = require('csv-parser');
const { Readable } = require('stream');

const turso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN
})


module.exports = async function (fastify, opts) {
  fastify.get("/api", async function (request, reply) {
    const res = await turso.execute('SELECT * FROM ITVmarseille')
    console.log(res)
    return { root: "iuhroi" };
  });

  fastify.post('/upload', async (request, reply) => {
    const data = [];

    const parts = request.parts();

    for await (const part of parts) {
      if (part.file) {
        const results = [];
        const readable = Readable.from(part.file);

        readable
            .pipe(csv())
            .on('data', (row) => {
              const res = Object.values(row)[0].split(";")
              results.push({date:res[0], average:res[1]});
            })
            .on('end', async () => {
              for (const row of results) {
                try {
                  console.log(row)
                  await turso.execute(`INSERT INTO ITVmarseille (week, average) VALUES ( ${row.date}, ${row.average})`);
                } catch (err) {
                  fastify.log.error(err);
                  return reply.code(500).send({ error: 'Failed to insert data into Turso' });
                }
              }
              return reply.code(200).send({ message: 'Data successfully uploaded and inserted into Turso' });
            });
      } else {
        data.push(part.value);
      }
    }
  });
};




