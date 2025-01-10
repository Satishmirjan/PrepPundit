import React, { useState } from 'react';

const MCQDisplay = ({ questions }) => {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(null);

    // Handle answer selection
    const handleOptionChange = (questionIndex, selectedOption) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionIndex]: selectedOption,
        });
    };

    // Calculate the score
    const handleSubmit = () => {
        let correctAnswers = 0;
        questions.forEach((q, index) => {
            if (selectedAnswers[index] === q.answer) {
                correctAnswers++;
            }
        });
        setScore(correctAnswers);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
                Multiple Choice Questions
            </h2>

            {questions.map((q, index) => (
                <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">{q.question}</h3>
                    <div className="space-y-2">
                        {q.options.map((option, idx) => (
                            <label
                                key={idx}
                                className="flex items-center space-x-3 cursor-pointer group"
                            >
                                <input
                                    type="radio"
                                    name={`q${index}`}
                                    value={option}
                                    checked={selectedAnswers[index] === option}
                                    onChange={() => handleOptionChange(index, option)}
                                    className="h-5 w-5 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300"
                                />
                                <span className="text-gray-700 group-hover:text-blue-600 transition duration-200">
                                    {option}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            ))}

            <div className="text-center mt-6">
                {score === null ? (
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2 rounded-md font-medium text-white bg-green-600 hover:bg-green-700"
                    >
                        Submit Quiz
                    </button>
                ) : (
                    <div className="text-lg font-semibold text-gray-800">
                        You got {score} out of {questions.length} correct!
                    </div>
                )}
            </div>
        </div>
    );
};

export default MCQDisplay;
