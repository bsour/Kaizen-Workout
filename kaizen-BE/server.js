const express = require('express');
const axios = require('axios');
require('dotenv').config(); // To use environment variables from .env file

const app = express();
const port = process.env.PORT || 3500; // Use port from environment or default to 5000

// Enable JSON parsing for POST requests
app.use(express.json());

// Handle CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/chat', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/gpt-3.5-turbo/completions', {
      prompt: prompt,
      max_tokens: 100 // Adjust as needed
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error making request to OpenAI:', error.message);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up request:', error.message);
    }
    res.status(500).send('Error processing your request');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
