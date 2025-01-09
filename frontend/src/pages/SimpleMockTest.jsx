import React, { useState } from 'react';

const SimpleMockTest = () => {
  // Test questions for all subjects
  const testData = {
    'Data Structures': [
      {
        q: "What is the time complexity of binary search?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        correct: 2
      },
      {
        q: "Which data structure uses LIFO?",
        options: ["Queue", "Stack", "Array", "Tree"],
        correct: 1
      }
    ],
    'Operating Systems': [
      {
        q: "What is deadlock?",
        options: ["CPU error", "Memory error", "Resource conflict", "System crash"],
        correct: 2
      },
      {
        q: "What is virtual memory?",
        options: ["RAM", "ROM", "Hard disk space used as RAM", "Cache"],
        correct: 2
      }
    ],
    'Database': [
      {
        q: "What is a primary key?",
        options: ["Foreign key", "Unique identifier", "Index", "Constraint"],
        correct: 1
      },
      {
        q: "What is SQL?",
        options: ["Programming language", "Query language", "Operating system", "Database"],
        correct: 1
      }
    ],
    'System Design': [
      {
        q: "What is load balancing?",
        options: ["Data backup", "Traffic distribution", "Memory management", "CPU scheduling"],
        correct: 1
      },
      {
        q: "What is caching?",
        options: ["Data deletion", "Temporary storage", "Permanent storage", "Data transfer"],
        correct: 1
      }
    ],
    'Networks': [
      {
        q: "What is DNS?",
        options: ["Email protocol", "Name resolution", "Security protocol", "File transfer"],
        correct: 1
      },
      {
        q: "What is HTTP?",
        options: ["Security protocol", "Transfer protocol", "Database protocol", "Email protocol"],
        correct: 1
      }
    ],
    'Cloud Computing': [
      {
        q: "What is SaaS?",
        options: ["Software as a Service", "System as a Service", "Security as a Service", "Storage as a Service"],
        correct: 0
      },
      {
        q: "What is cloud computing?",
        options: ["Local storage", "Remote computing", "Database system", "Operating system"],
        correct: 1
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