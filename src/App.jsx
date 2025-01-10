import React, { useState, useEffect } from "react";
import "./App.css";

const questionBank = {
  bubble_sort: [
    { question: "What is the time complexity of Bubble Sort?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"], correct: 2 },
    { question: "In Bubble Sort, what does the algorithm repeatedly do?", options: ["Swap adjacent elements", "Sort the entire array at once", "Divide the array into parts", "Sort based on the middle element"], correct: 0 },
    { question: "What is the worst case time complexity of Bubble Sort?", options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"], correct: 1 },
    { question: "What is the best case time complexity of Bubble Sort?", options: ["O(n log n)", "O(n)", "O(n^2)", "O(1)"], correct: 1 },
    { question: "Which of the following is true about Bubble Sort?", options: ["It is stable", "It is not stable", "It is fast", "It does not use swapping"], correct: 0 },
    { question: "Bubble Sort is best suited for?", options: ["Large datasets", "Small datasets", "Sorting strings", "Complex data"], correct: 1 },
    { question: "Which sorting algorithm is considered less efficient than Bubble Sort?", options: ["Insertion Sort", "Merge Sort", "Selection Sort", "Quick Sort"], correct: 2 },
    { question: "What is the main disadvantage of Bubble Sort?", options: ["High space complexity", "Slow performance", "Does not handle duplicates", "Requires extra memory"], correct: 1 },
    { question: "What is the space complexity of Bubble Sort?", options: ["O(n)", "O(1)", "O(n^2)", "O(log n)"], correct: 1 },
    { question: "Which of the following algorithms can be optimized with a flag in Bubble Sort?", options: ["Insertion Sort", "Merge Sort", "Quick Sort", "Bubble Sort"], correct: 3 }
  ],
  environmental: [
    { question: "What is the primary cause of global warming?", options: ["Deforestation", "Greenhouse gas emissions", "Ozone depletion", "Acid rain"], correct: 1 },
    { question: "What is the process of converting waste materials into new products?", options: ["Recycling", "Incineration", "Composting", "Landfilling"], correct: 0 },
    { question: "Which of the following is a renewable energy source?", options: ["Coal", "Natural gas", "Solar power", "Nuclear power"], correct: 2 },
    { question: "What is the greenhouse effect?", options: ["Absorption of heat by the Earth's atmosphere", "Ozone layer depletion", "Air pollution from industries", "Melting of ice caps"], correct: 0 },
    { question: "What is the main cause of ocean acidification?", options: ["Increased CO2 levels", "Deforestation", "Oil spills", "Overfishing"], correct: 0 },
    { question: "Which country produces the most renewable energy?", options: ["USA", "Germany", "China", "India"], correct: 2 },
    { question: "Which greenhouse gas is most responsible for climate change?", options: ["Carbon Dioxide", "Methane", "Nitrous Oxide", "Water vapor"], correct: 0 },
    { question: "What is the main source of methane emissions?", options: ["Agriculture", "Transportation", "Waste Management", "Forestry"], correct: 0 },
    { question: "Which is the most sustainable energy source?", options: ["Solar", "Wind", "Geothermal", "All of the above"], correct: 3 },
    { question: "What is the Kyoto Protocol?", options: ["A global climate agreement", "An energy-efficient technology", "A method of reducing air pollution", "An environmental NGO"], correct: 0 }
  ],
  computer_science: [
    { question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], correct: 1 },
    { question: "Which data structure uses LIFO (Last In, First Out)?", options: ["Queue", "Stack", "Linked List", "Array"], correct: 1 },
    { question: "What is the height of a balanced binary tree with N nodes?", options: ["O(N)", "O(log N)", "O(1)", "O(N^2)"], correct: 1 },
    { question: "Which of the following is a sorting algorithm?", options: ["DFS", "Merge Sort", "Bubble Sort", "Both B and C"], correct: 3 },
    { question: "What is the primary function of the operating system?", options: ["Run user applications", "Manage hardware resources", "Control external devices", "Execute scripts"], correct: 1 },
    { question: "Which algorithm is used for finding the shortest path in a graph?", options: ["DFS", "Dijkstra's Algorithm", "Bubble Sort", "Merge Sort"], correct: 1 },
    { question: "Which data structure is used to implement recursive calls?", options: ["Queue", "Stack", "Graph", "Array"], correct: 1 },
    { question: "What is the main purpose of hashing?", options: ["Data retrieval", "Encryption", "Memory allocation", "Data compression"], correct: 0 },
    { question: "Which is an example of a dynamic programming problem?", options: ["Fibonacci Sequence", "Merge Sort", "Binary Search", "Quick Sort"], correct: 0 },
    { question: "Which algorithm is typically used for searching in a sorted array?", options: ["Linear Search", "Binary Search", "Bubble Sort", "Insertion Sort"], correct: 1 }
  ],
  electrical_engineering: [
    { question: "What is Ohm's Law?", options: ["V = I * R", "V = I / R", "V = I + R", "V = I - R"], correct: 0 },
    { question: "Which of these is the unit for electrical resistance?", options: ["Volt", "Ampere", "Ohm", "Watt"], correct: 2 },
    { question: "Which component is used to store electrical energy?", options: ["Resistor", "Capacitor", "Inductor", "Transistor"], correct: 1 },
    { question: "Which of these materials is a good conductor of electricity?", options: ["Plastic", "Copper", "Wood", "Glass"], correct: 1 },
    { question: "What is the primary function of a transformer?", options: ["Increase or decrease voltage", "Increase or decrease current", "Convert AC to DC", "Filter signals"], correct: 0 },
    { question: "Which of the following is used to measure electrical current?", options: ["Voltmeter", "Ammeter", "Oscilloscope", "Wattmeter"], correct: 1 },
    { question: "In an AC circuit, the current is...", options: ["Constant", "Alternating", "Unidirectional", "None of the above"], correct: 1 },
    { question: "What is the power factor in AC circuits?", options: ["The ratio of real power to apparent power", "The ratio of voltage to current", "The ratio of current to resistance", "None of the above"], correct: 0 },
    { question: "What is the unit of electrical power?", options: ["Watt", "Joule", "Coulomb", "Volt"], correct: 0 },
    { question: "What is the purpose of an inductor in an electrical circuit?", options: ["To store energy in a magnetic field", "To resist current flow", "To store energy in an electric field", "To increase current"], correct: 0 }
  ]
};

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let timer;
    if (timerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      nextQuestion();
    }
    return () => clearInterval(timer);
  }, [timeLeft, timerActive]);

  const startQuiz = () => {
    let questionType = "";
    if (videoUrl.includes("https://www.youtube.com/watch?v=MtpxOdtS9KU&list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg")) {
      questionType = "environmental";
    } else if (videoUrl.includes("https://www.youtube.com/watch?v=DyoCAsrdGIY")) {
      questionType = "computer_science";
    } else if (videoUrl.includes("https://www.youtube.com/watch?v=ACsLvXuaKxw")) {
      questionType = "operating_system";
    } else if (videoUrl.includes("https://www.youtube.com/watch?v=zYRMn8g43mc")) {
      questionType = "electrical_engineering";
    } else {
      alert("Invalid video URL");
      return;
    }

    setQuestions(questionBank[questionType]);
    setCurrentIndex(0);
    setUserAnswers([]);
    setScore(0);
    setTimeLeft(60);
    setTimerActive(true);
  };

  const handleAnswer = (index) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentIndex] = index;
    setUserAnswers(newAnswers);

    if (index === questions[currentIndex].correct) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setTimeLeft(60);
    } else {
      setTimerActive(false);
    }
  };

  const restartQuiz = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h1>Educational MCQ Generator</h1>

      <div className="input-section">
        <label>Enter Video URL:</label>
        <input
          type="url"
          placeholder="https://www.youtube.com/watch?v=..."
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button onClick={startQuiz}>Start Quiz</button>
      </div>

      {questions.length > 0 && (
        <>
          <div className="timer">Time left: {timeLeft} seconds</div>

          <div className="questions-section">
            <div className="question">
              <p>
                <strong>Q{currentIndex + 1}: </strong>
                {questions[currentIndex].question}
              </p>
              <div className="options">
                {questions[currentIndex].options.map((option, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name={`question-${currentIndex}`}
                      onChange={() => handleAnswer(index)}
                      checked={userAnswers[currentIndex] === index}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {currentIndex < questions.length - 1 && (
            <button onClick={nextQuestion}>Next</button>
          )}

          {currentIndex === questions.length - 1 && (
            <div>
              <h3>Your score: {score} out of {questions.length}</h3>
              <button onClick={restartQuiz}>Restart Quiz</button>
            </div>
        
          )}
          {questions.length > 0 && currentIndex === questions.length - 1 && (
  <div className="answer-key">
    <h3>Answer Key</h3>
    <ul>
      {questions.map((q, index) => (
        <li key={index}>
          <strong>Q{index + 1}:</strong> {q.question}
          <br />
          <strong>Correct Answer:</strong> {q.options[q.correct]}
        </li>
      ))}
    </ul>
  </div>
)}

        </>
      )}
    </div>
  );
}

export default App;
