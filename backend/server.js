const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const questions = require('./src/data/questions.json'); // Ensure this path is correct

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Configure Multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Define routes
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'No file uploaded.' });
    }

    const { originalname } = req.file;
    const selectedQuestions = questions[originalname] || [];

    if (selectedQuestions.length === 0) {
        return res.status(404).json({
            success: false,
            message: 'No questions found for this image.',
        });
    }

    res.json({
        success: true,
        questions: selectedQuestions,
    });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
