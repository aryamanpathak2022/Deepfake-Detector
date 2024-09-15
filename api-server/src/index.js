const express = require('express');
const multer = require('multer');
const { checkBlockchainContract } = require('./blockchain'); // Assume you have a blockchain.js module
const app = express();
const port = 3000;

// Multer setup for handling image uploads
const upload = multer({ dest: 'uploads/' }); // Stores uploaded images in 'uploads' directory

// Route A: Receive image and send it to another route (Route B)
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const imageFile = req.file; // Image file information from multer

    if (!imageFile) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    // Send image to another route (/process) and get the result
    const result = await processImageRoute(imageFile.path);

    // Send result as response
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ error: 'Error processing image' });
  }
});

// Route B: Process the image (This could be any image processing logic)
app.post('/process', upload.single('image'), async (req, res) => {
  try {
    const imageFile = req.file; // Image file information from multer

    if (!imageFile) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    // Simulate some processing (e.g., analyze image, resize, etc.)
    const processedResult = `Processed ${imageFile.filename}`;

    // Send the result
    res.json({ processedResult });
  } catch (error) {
    res.status(500).json({ error: 'Error processing image' });
  }
});

// Route C: Blockchain verification route
app.post('/verify', upload.single('image'), async (req, res) => {
  try {
    const imageFile = req.file; // Image file information from multer

    if (!imageFile) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    // Verify image details in a blockchain contract
    const verificationResult = await checkBlockchainContract(imageFile.path);

    // Send result from blockchain contract verification
    res.json({ success: true, verificationResult });
  } catch (error) {
    res.status(500).json({ error: 'Error verifying image on blockchain' });
  }
});

// Helper function to simulate sending image to another route (Route B)
async function processImageRoute(imagePath) {
  const axios = require('axios');
  const fs = require('fs');

  const formData = new FormData();
  formData.append('image', fs.createReadStream(imagePath));

  try {
    const response = await axios.post('http://localhost:3000/process', formData, {
      headers: formData.getHeaders(),
    });

    return response.data;
  } catch (error) {
    throw new Error('Error sending image to process route');
  }
}

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
