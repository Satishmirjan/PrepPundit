import React, { useState } from 'react';

const SimpleMockTest = () => {
  // Test questions for all subjects
  const testData = {
    'Data Structures': [
      {
        q: "What is the time complexity of inserting an element at the end of an array?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correct: 0
      },
      {
        q: "Which data structure uses FIFO?",
        options: ["Queue", "Stack", "Linked List", "Tree"],
        correct: 0
      },
      {
        q: "What is the time complexity of searching an element in a balanced binary search tree?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
        correct: 1
      },
      {
        q: "Which data structure is used for implementing recursion?",
        options: ["Queue", "Stack", "Heap", "Graph"],
        correct: 1
      },
      {
        q: "What is the maximum number of children a node can have in a binary tree?",
        options: ["2", "3", "4", "Any number"],
        correct: 0
      },
      {
        q: "Which data structure is most efficient for finding the shortest path in a graph?",
        options: ["Stack", "Queue", "Priority Queue", "Hash Map"],
        correct: 2
      },
      {
        q: "What is the height of a balanced binary tree with n nodes?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
        correct: 1
      },
      {
        q: "Which data structure allows for dynamic resizing?",
        options: ["Array", "Linked List", "Queue", "Stack"],
        correct: 1
      },
      {
        q: "What is the time complexity of deleting a node in a doubly linked list?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correct: 0
      },
      {
        q: "Which data structure is used in Depth First Search (DFS) traversal of a graph?",
        options: ["Queue", "Stack", "Hash Map", "Array"],
        correct: 1
      }
    ],
    'Operating Systems': [
      {
        q: "What is a process in an operating system?",
        options: ["Program in execution", "Static program", "Hardware component", "Memory allocation"],
        correct: 0
      },
      {
        q: "What is a thread?",
        options: ["Lightweight process", "Heavyweight process", "CPU unit", "Memory block"],
        correct: 0
      },
      {
        q: "What is a critical section?",
        options: ["Code that accesses shared resources", "CPU scheduling algorithm", "Memory segment", "I/O process"],
        correct: 0
      },
      {
        q: "Which algorithm is used for CPU scheduling?",
        options: ["Round Robin", "Paging", "Deadlock", "Fragmentation"],
        correct: 0
      },
      {
        q: "What is a semaphore?",
        options: ["Memory allocation tool", "Process synchronization tool", "Scheduling algorithm", "CPU register"],
        correct: 1
      },
      {
        q: "What is paging in operating systems?",
        options: ["Memory management technique", "CPU scheduling algorithm", "I/O scheduling", "Thread management"],
        correct: 0
      },
      {
        q: "Which is a non-preemptive scheduling algorithm?",
        options: ["First-Come-First-Serve", "Round Robin", "Shortest Remaining Time", "Priority Scheduling"],
        correct: 0
      },
      {
        q: "What is thrashing?",
        options: ["Excessive paging", "CPU failure", "Deadlock occurrence", "Resource conflict"],
        correct: 0
      },
      {
        q: "What is a system call?",
        options: ["Hardware interrupt", "Program request to OS", "Memory request", "I/O operation"],
        correct: 1
      },
      {
        q: "What is a real-time operating system?",
        options: ["For time-sensitive tasks", "For batch processing", "For desktop systems", "For mobile systems"],
        correct: 0
      }
    ]
    ,
    'Database':[
      {
        q: "What is a foreign key?",
        options: ["Primary key", "Unique identifier", "Links two tables", "Index"],
        correct: 2
      },
      {
        q: "What is normalization in databases?",
        options: ["Data duplication", "Eliminating redundancy", "Data encryption", "Data retrieval"],
        correct: 1
      },
      {
        q: "What is ACID in databases?",
        options: ["Transaction properties", "Backup method", "Data storage", "Indexing technique"],
        correct: 0
      },
      {
        q: "What is a join in SQL?",
        options: ["Combining tables", "Deleting rows", "Sorting data", "Updating rows"],
        correct: 0
      },
      {
        q: "What is indexing in databases?",
        options: ["Improves search", "Deletes records", "Encrypts data", "Backs up data"],
        correct: 0
      },
      {
        q: "Which SQL command is used to retrieve data?",
        options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
        correct: 2
      },
      {
        q: "What is a composite key?",
        options: ["Two or more columns as a key", "Primary key", "Foreign key", "Unique key"],
        correct: 0
      },
      {
        q: "What is a stored procedure?",
        options: ["Precompiled SQL", "Database schema", "Backup plan", "Normalization method"],
        correct: 0
      },
      {
        q: "What is a transaction?",
        options: ["Data backup", "Sequence of database operations", "Database connection", "Index creation"],
        correct: 1
      },
      {
        q: "What is a trigger in SQL?",
        options: ["Event-based action", "Data backup", "Index", "Normalization method"],
        correct: 0
      }
    ]
    ,
    'System Design': [
      {
        q: "What is microservices architecture?",
        options: ["Single application", "Monolithic design", "Small, independent services", "Database design"],
        correct: 2
      },
      {
        q: "What is horizontal scaling?",
        options: ["Adding more servers", "Adding more CPU to a server", "Adding more RAM", "Upgrading software"],
        correct: 0
      },
      {
        q: "What is a database sharding?",
        options: ["Dividing database", "Backing up database", "Indexing", "Normalization"],
        correct: 0
      },
      {
        q: "What is fault tolerance?",
        options: ["Error prevention", "System recovery", "System stability", "Handling failures gracefully"],
        correct: 3
      },
      {
        q: "What is a CDN?",
        options: ["Content Delivery Network", "Caching Database Nodes", "Centralized Data Network", "Content Distribution Nodes"],
        correct: 0
      },
      {
        q: "What is a message queue?",
        options: ["Data queue", "Buffer for asynchronous communication", "Error handling queue", "System alert mechanism"],
        correct: 1
      },
      {
        q: "What is latency?",
        options: ["Delay in processing", "CPU speed", "Memory space", "Network bandwidth"],
        correct: 0
      },
      {
        q: "What is API rate limiting?",
        options: ["Limiting API calls", "Increasing API speed", "Backing up API data", "Encrypting API data"],
        correct: 0
      },
      {
        q: "What is database replication?",
        options: ["Copying data to multiple servers", "Deleting duplicate data", "Indexing data", "Backing up data"],
        correct: 0
      },
      {
        q: "What is a reverse proxy?",
        options: ["Redirecting client requests to backend", "Backing up database", "Firewall", "Caching mechanism"],
        correct: 0
      }
    ]
    ,
    'Networks':[
      {
        q: "What is TCP?",
        options: ["Transfer protocol", "Data encryption protocol", "Routing algorithm", "Authentication protocol"],
        correct: 0
      },
      {
        q: "What is an IP address?",
        options: ["Unique identifier for a device", "Protocol", "Data packet", "File format"],
        correct: 0
      },
      {
        q: "What is a subnet mask?",
        options: ["Network segment identifier", "Router configuration", "Encryption key", "Firewall setting"],
        correct: 0
      },
      {
        q: "What is a router?",
        options: ["Network device for routing packets", "Firewall", "Data storage", "Encryption device"],
        correct: 0
      },
      {
        q: "What is FTP?",
        options: ["File Transfer Protocol", "Firewall Protocol", "Data compression tool", "Database system"],
        correct: 0
      },
      {
        q: "What is latency in networking?",
        options: ["Delay in transmission", "Data corruption", "Packet loss", "Bandwidth usage"],
        correct: 0
      },
      {
        q: "What is NAT?",
        options: ["Network Address Translation", "Node Access Table", "Network Automation Tool", "Node Allocation Tracker"],
        correct: 0
      },
      {
        q: "What is ARP?",
        options: ["Address Resolution Protocol", "Access Routing Protocol", "Authentication Request Protocol", "Application Routing Protocol"],
        correct: 0
      },
      {
        q: "What is packet switching?",
        options: ["Data transmission in packets", "Data backup", "Data encryption", "Firewall setup"],
        correct: 0
      },
      {
        q: "What is an Ethernet?",
        options: ["Wired networking technology", "Wireless protocol", "File format", "Firewall mechanism"],
        correct: 0
      }
    ]
    ,
    'Cloud Computing': [
      {
        q: "What is IaaS?",
        options: ["Infrastructure as a Service", "Information as a Service", "Internet as a Service", "Index as a Service"],
        correct: 0
      },
      {
        q: "What is PaaS?",
        options: ["Platform as a Service", "Protocol as a Service", "Programming as a Service", "Process as a Service"],
        correct: 0
      },
      {
        q: "What is scalability in cloud computing?",
        options: ["Increasing resources as needed", "Reducing latency", "Data encryption", "Network optimization"],
        correct: 0
      },
      {
        q: "What is an example of SaaS?",
        options: ["Google Drive", "Router", "Operating System", "Firewall"],
        correct: 0
      },
      {
        q: "What is a cloud region?",
        options: ["Geographical location for cloud services", "Network backup", "Firewall location", "Router address"],
        correct: 0
      },
      {
        q: "What is multi-tenancy in cloud?",
        options: ["Multiple users sharing resources", "Single user environment", "Data duplication", "Encryption method"],
        correct: 0
      },
      {
        q: "What is a private cloud?",
        options: ["Dedicated cloud for a single organization", "Public cloud for all users", "Hybrid environment", "Cloud backup"],
        correct: 0
      },
      {
        q: "What is serverless computing?",
        options: ["Execution without managing servers", "Offline computing", "Dedicated server", "Network computing"],
        correct: 0
      },
      {
        q: "What is disaster recovery in cloud?",
        options: ["Recovering data during failures", "Data backup", "Encryption recovery", "Latency reduction"],
        correct: 0
      },
      {
        q: "What is Kubernetes used for?",
        options: ["Container orchestration", "Database management", "Cloud backup", "Network routing"],
        correct: 0
      }
    ]
    
  };

  const [subject, setSubject] = useState('');
  const [answers, setAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubjectSelect = (selectedSubject) => {
    setSubject(selectedSubject);
    setAnswers({});
    setShowScore(false);
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setAnswers({
      ...answers,
      [questionIndex]: answerIndex
    });
  };

  const calculateScore = () => {
    let correct = 0;
    testData[subject].forEach((question, index) => {
      if (answers[index] === question.correct) {
        correct++;
      }
    });
    setScore(correct);
    setShowScore(true);
  };

  if (!subject) {
    return (
      <div className="p-4">
        <h2 className="text-2xl mb-4">Select Subject</h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(testData).map((subj) => (
            <button
              key={subj}
              onClick={() => handleSubjectSelect(subj)}
              className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {subj}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (showScore) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl mb-4">Test Complete!</h2>
        <p className="text-xl">Your Score: {score} out of {testData[subject].length}</p>
        <button
          onClick={() => setSubject('')}
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Another Subject
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">{subject} Test</h2>
      <div className="space-y-6">
        {testData[subject].map((question, qIndex) => (
          <div key={qIndex} className="border p-4 rounded">
            <p className="font-semibold mb-2">{qIndex + 1}. {question.q}</p>
            <div className="space-y-2">
              {question.options.map((option, oIndex) => (
                <div
                  key={oIndex}
                  onClick={() => handleAnswerSelect(qIndex, oIndex)}
                  className={`p-2 border rounded cursor-pointer ${
                    answers[qIndex] === oIndex ? 'bg-blue-100 border-blue-500' : ''
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={calculateScore}
          disabled={Object.keys(answers).length !== testData[subject].length}
          className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-400"
        >
          Submit Test
        </button>
      </div>
    </div>
  );
};
export default SimpleMockTest;

// export default SimpleMockTest;

// import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Progress } from '@/components/ui/progress';
// import { Trophy, Book, Clock, CheckCircle, XCircle } from 'lucide-react';

// const SimpleMockTest = () => {
//   const testData = {
//     'Data Structures': {
//       icon: "📚",
//       description: "Core concepts of data organization",
//       questions: [
//         {
//           q: "What is the time complexity of binary search?",
//           options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
//           correct: 2
//         },
//         {
//           q: "Which data structure uses LIFO?",
//           options: ["Queue", "Stack", "Array", "Tree"],
//           correct: 1
//         }
//       ]
//     },
//     'Operating Systems': {
//       icon: "⚙️",
//       description: "Fundamentals of OS concepts",
//       questions: [
//         {
//           q: "What is deadlock?",
//           options: ["CPU error", "Memory error", "Resource conflict", "System crash"],
//           correct: 2
//         },
//         {
//           q: "What is virtual memory?",
//           options: ["RAM", "ROM", "Hard disk space used as RAM", "Cache"],
//           correct: 2
//         }
//       ]
//     },
//     'Database': {
//       icon: "🗄️",
//       description: "Database management systems",
//       questions: [
//         {
//           q: "What is a primary key?",
//           options: ["Foreign key", "Unique identifier", "Index", "Constraint"],
//           correct: 1
//         },
//         {
//           q: "What is SQL?",
//           options: ["Programming language", "Query language", "Operating system", "Database"],
//           correct: 1
//         }
//       ]
//     },
//     'System Design': {
//       icon: "🏗️",
//       description: "Large scale system architecture",
//       questions: [
//         {
//           q: "What is load balancing?",
//           options: ["Data backup", "Traffic distribution", "Memory management", "CPU scheduling"],
//           correct: 1
//         },
//         {
//           q: "What is caching?",
//           options: ["Data deletion", "Temporary storage", "Permanent storage", "Data transfer"],
//           correct: 1
//         }
//       ]
//     },
//     'Networks': {
//       icon: "🌐",
//       description: "Computer networking concepts",
//       questions: [
//         {
//           q: "What is DNS?",
//           options: ["Email protocol", "Name resolution", "Security protocol", "File transfer"],
//           correct: 1
//         },
//         {
//           q: "What is HTTP?",
//           options: ["Security protocol", "Transfer protocol", "Database protocol", "Email protocol"],
//           correct: 1
//         }
//       ]
//     },
//     'Cloud Computing': {
//       icon: "☁️",
//       description: "Cloud technologies and services",
//       questions: [
//         {
//           q: "What is SaaS?",
//           options: ["Software as a Service", "System as a Service", "Security as a Service", "Storage as a Service"],
//           correct: 0
//         },
//         {
//           q: "What is cloud computing?",
//           options: ["Local storage", "Remote computing", "Database system", "Operating system"],
//           correct: 1
//         }
//       ]
//     }
//   };

//   const [subject, setSubject] = useState('');
//   const [answers, setAnswers] = useState({});
//   const [showScore, setShowScore] = useState(false);
//   const [score, setScore] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [isCorrect, setIsCorrect] = useState(false);

//   const handleSubjectSelect = (selectedSubject) => {
//     setSubject(selectedSubject);
//     setAnswers({});
//     setShowScore(false);
//     setCurrentQuestion(0);
//     setShowFeedback(false);
//   };

//   const handleAnswerSelect = (answerIndex) => {
//     const currentQuestions = testData[subject].questions;
//     const isAnswerCorrect = answerIndex === currentQuestions[currentQuestion].correct;
    
//     setAnswers({
//       ...answers,
//       [currentQuestion]: answerIndex
//     });
    
//     setIsCorrect(isAnswerCorrect);
//     setShowFeedback(true);

//     setTimeout(() => {
//       setShowFeedback(false);
//       if (currentQuestion < currentQuestions.length - 1) {
//         setCurrentQuestion(prev => prev + 1);
//       } else {
//         calculateScore();
//       }
//     }, 1000);
//   };

//   const calculateScore = () => {
//     let correct = 0;
//     const questions = testData[subject].questions;
    
//     questions.forEach((_, index) => {
//       if (answers[index] === questions[index].correct) {
//         correct++;
//       }
//     });
    
//     setScore(correct);
//     setShowScore(true);
//   };

//   if (!subject) {
//     return (
//       <div className="p-6 max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-center mb-8">Choose Your Subject</h1>
//          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {Object.entries(testData).map(([subj, data]) => (
//             <Card 
//               key={subj}
//               className="hover:shadow-lg cursor-pointer transform hover:-translate-y-1 transition-transform duration-200"
//               onClick={() => handleSubjectSelect(subj)}
//             >
//               <CardHeader>
//                 <div className="text-4xl mb-2">{data.icon}</div>
//                 <CardTitle>{subj}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600">{data.description}</p>
//                 <div className="mt-4 text-sm text-gray-500">
//                   {data.questions.length} Questions
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       // </div>
//     );
//   }

//   if (showScore) {
//     const percentage = (score / testData[subject].questions.length) * 100;
    
//     return (
//       <div className="p-6 max-w-xl mx-auto">
//         <Card className="text-center">
//           <CardHeader>
//             <CardTitle className="text-2xl">Test Complete! 🎉</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-6">
//             <div className="flex justify-center mb-4">
//               <Trophy size={60} className="text-yellow-500" />
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-blue-600">
//                 {score}/{testData[subject].questions.length}
//               </div>
//               <Progress value={percentage} className="w-full mt-4" />
//             </div>
//             <div className="mt-4 text-gray-600">
//               You scored {percentage}% in {subject}
//             </div>
//             <button
//               onClick={() => setSubject('')}
//               className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//             >
//               Try Another Subject
//             </button>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   const currentQ = testData[subject].questions[currentQuestion];

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <Card>
//         <CardHeader>
//           <div className="flex justify-between items-center">
//             <CardTitle>{subject}</CardTitle>
//             <div className="text-sm text-gray-500">
//               Question {currentQuestion + 1}/{testData[subject].questions.length}
//             </div>
//           </div>
//           <Progress 
//             value={(currentQuestion / testData[subject].questions.length) * 100} 
//             className="mt-4"
//           />
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <div className="text-xl font-medium mb-6">{currentQ.q}</div>
//           <div className="space-y-3">
//             {currentQ.options.map((option, oIndex) => (
//               <div
//                 key={oIndex}
//                 onClick={() => !showFeedback && handleAnswerSelect(oIndex)}
//                 className={`p-4 border rounded-lg cursor-pointer transition-all 
//                   ${answers[currentQuestion] === oIndex 
//                     ? showFeedback
//                       ? isCorrect
//                         ? 'bg-green-100 border-green-500'
//                         : 'bg-red-100 border-red-500'
//                       : 'bg-blue-100 border-blue-500'
//                     : 'hover:bg-gray-50'
//                   }`}
//               >
//                 <div className="flex items-center">
//                   {showFeedback && answers[currentQuestion] === oIndex && (
//                     isCorrect 
//                       ? <CheckCircle className="mr-2 text-green-500" />
//                       : <XCircle className="mr-2 text-red-500" />
//                   )}
//                   {option}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-between items-center mt-6">
//             <div className="flex items-center text-gray-500">
//               <Clock className="mr-2" size={16} />
//               <span>Take your time</span>
//             </div>
//             <div className="flex items-center text-gray-500">
//               <Book className="mr-2" size={16} />
//               <span>{subject}</span>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default SimpleMockTest;