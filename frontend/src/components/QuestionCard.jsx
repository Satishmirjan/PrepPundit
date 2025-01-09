import React from 'react';

const QuestionCard = ({ question, options, correctAnswer, selectedAnswer, onSelectAnswer }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {question}
      </h3>
      <div className="space-y-3">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`p-4 rounded-lg cursor-pointer transition-colors
              ${selectedAnswer === index 
                ? 'bg-indigo-100 border-2 border-indigo-500' 
                : 'bg-gray-50 hover:bg-gray-100'
              }
              ${correctAnswer === index && selectedAnswer !== null
                ? 'bg-green-100 border-2 border-green-500'
                : ''
              }
            `}
          >
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3
                ${selectedAnswer === index ? 'border-indigo-500' : 'border-gray-400'}
              `}>
                {selectedAnswer === index && (
                  <div className="w-3 h-3 rounded-full bg-indigo-500" />
                )}
              </div>
              <span className="text-gray-800">{option}</span>
            </div>
          </div>
        ))}
      </div>
      {selectedAnswer !== null && (
        <div className="mt-4 p-4 rounded-lg bg-gray-50">
          <p className={`text-sm ${selectedAnswer === correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
            {selectedAnswer === correctAnswer 
              ? '✓ Correct answer!'
              : `✗ Incorrect. The correct answer is: ${options[correctAnswer]}`
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;