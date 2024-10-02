"use strict";

const OLLAMA_API_URL = 'http://localhost:11434'; // Adjust if your Ollama API is hosted elsewhere


module.exports = async function (fastify, opts) {
  fastify.get("/api", async function (request, reply) {
    return { root: true };
  });

  fastify.get("/api", async function (request, reply) {
    return { root: true };
  });


  fastify.post('/api/ollama', async (request, reply) => {
    const { prompt } = request.body;

    const response = await ollama.chat({
      model: 'llama3.1',
      messages: [{ role: 'user', content: 'Why is the sky blue?' }],
    })
    console.log(response.message.content)


    /*
    fastify.post('/api/ollama', async (request, reply) => {
  const { prompt } = request.body;

  if (!prompt) {
    return reply.status(400).send({ error: 'Prompt is required' });
  }

  try {
    // Make a request to the Ollama API
    const response = await axios.post(`${OLLAMA_API_URL}/v1/models/your-model-name/generate`, {
      prompt,
    });

    // Return the response from Ollama
    return reply.send(response.data);
  } catch (error) {
    // Log and handle errors
    request.log.error(error);
    return reply.status(500).send({ error: 'Failed to communicate with Ollama API' });
  }
});
     */
  });
};




