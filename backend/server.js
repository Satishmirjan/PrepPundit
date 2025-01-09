const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Sample user data
// const userData = {
//   id: 1,
//   name: "John Doe",
//   email: "john.doe@example.com",
//   profilePicture: null,
//   streak: 15,
//   testsAttempted: 24,
//   testHistory: [
//     {
//       id: 1,
//       subject: "Data Structures",
//       score: 85,
//       date: "2024-01-05"
//     },
//     {
//       id: 2,
//       subject: "Operating Systems",
//       score: 92,
//       date: "2024-01-06"
//     }
//   ]
// };

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
        },
        
          {
            id: 2,
            question: "What is the time complexity of searching for an element in a balanced binary search tree?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
            correctAnswer: 2
          },
          {
            id: 3,
            question: "Which sorting algorithm is considered the fastest in the average case?",
            options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Quick Sort"],
            correctAnswer: 3
          },
          {
            id: 4,
            question: "What data structure is used for implementing recursion?",
            options: ["Queue", "Stack", "Array", "Linked List"],
            correctAnswer: 1
          },
          {
            id: 5,
            question: "Which of the following algorithms is used to find the shortest path in a graph?",
            options: ["Dijkstra's Algorithm", "Prim's Algorithm", "Kruskal's Algorithm", "Bubble Sort"],
            correctAnswer: 0
          },
          {
            id: 6,
            question: "Which data structure is used for breadth-first search (BFS)?",
            options: ["Stack", "Queue", "Array", "Heap"],
            correctAnswer: 1
          },
          {
            id: 7,
            question: "Which of the following is a self-balancing binary search tree?",
            options: ["Heap", "AVL Tree", "Binary Tree", "Graph"],
            correctAnswer: 1
          },
          {
            id: 8,
            question: "Which data structure is best for implementing LRU Cache?",
            options: ["Array", "Stack", "Queue", "HashMap and Doubly Linked List"],
            correctAnswer: 3
          },
          {
            id: 9,
            question: "Which algorithm uses a divide-and-conquer approach?",
            options: ["Quick Sort", "Bubble Sort", "Selection Sort", "Insertion Sort"],
            correctAnswer: 0
          },
          {
            id: 10,
            question: "What is the time complexity of accessing an element in a hash table in the average case?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
            correctAnswer: 0
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