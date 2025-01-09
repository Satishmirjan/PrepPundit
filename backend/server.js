const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Sample user data
const userData = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  profilePicture: null,
  streak: 15,
  testsAttempted: 24,
  testHistory: [
    {
      id: 1,
      subject: "Data Structures",
      score: 85,
      date: "2024-01-05"
    },
    {
      id: 2,
      subject: "Operating Systems",
      score: 92,
      date: "2024-01-06"
    }
  ]
};

// Sample mock tests data
const mockTests = {
  "dsa": [
    {
      id: 1,
      title: "Arrays and Strings",
      questions: [
        {
          id: 1,
          question: "What is the time complexity of array insertion at the beginning?",
          options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
          correctAnswer: 1
        }
      ]
    }
  ],
  "os": [
    {
      id: 1,
      title: "Process Management",
      questions: [
        {
          id: 1,
          question: "Which of the following is not a valid process state?",
          options: ["Running", "Waiting", "Ready", "Completed"],
          correctAnswer: 3
        }
      ]
    }
  ],
  "db": [
    {
      id: 1,
      title: "SQL Basics",
      questions: [
        {
          id: 1,
          question: "Which SQL command is used to modify existing data?",
          options: ["INSERT", "UPDATE", "MODIFY", "CHANGE"],
          correctAnswer: 1
        }
      ]
    }
  ],
  "system_design": [
    {
      id: 1,
      title: "Scalability",
      questions: [
        {
          id: 1,
          question: "Which of these is not a caching strategy?",
          options: ["Write-through", "Write-back", "Write-around", "Write-immediate"],
          correctAnswer: 3
        }
      ]
    }
  ]
};

// Routes
app.get('/api/user', (req, res) => {
  res.json(userData);
});

app.get('/api/mock-tests/:category', (req, res) => {
  const category = req.params.category;
  res.json(mockTests[category] || []);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});