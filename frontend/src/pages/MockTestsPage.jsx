import React, { useState, useEffect } from 'react';
import TestCard from '../components/TestCard';
import QuestionCard from '../components/QuestionCard';

const MockTestsPage = () => {
  const [tests, setTests] = useState({});
  const [selectedTest, setSelectedTest] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    const categories = ['dsa', 'os', 'db', 'system_design'];
    Promise.all(
      categories.map(category =>
        fetch(`http://localhost:5000/api/mock-tests/${category}`)
          .then(res => res.json())
          .then(data => ({ [category]: data }))
      )
    ).then(results => {
      const combinedData = Object.assign({}, ...results);
      setTests(combinedData);
    });
  }, []);

  const handleTestClick = (test) => {
    setSelectedTest(test);
    setSelectedAnswers({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {selectedTest ? (
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{selectedTest.title}</h2>
            {selectedTest.questions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question.question}
                options={question.options}
                correctAnswer={question.correctAnswer}
                selectedAnswer={selectedAnswers[question.id]}
                onSelectAnswer={(answer) => handleAnswerSelect(question.id, answer)}
              />
            ))}
            <button
              onClick={() => setSelectedTest(null)}
              className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Back to Tests
            </button>
          </div>
        ) : (
          <>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Structures and Algorithms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tests.dsa?.map(test => (
                  <TestCard
                    key={test.id}
                    title={test.title}
                    onClick={() => handleTestClick(test)}
                  />
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Operating Systems</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tests.os?.map(test => (
                  <TestCard
                    key={test.id}
                    title={test.title}
                    onClick={() => handleTestClick(test)}
                  />
                ))}
              </div>
            </section>

            {/* Add other sections similarly */}
          </>
        )}
      </div>
    </div>
  );
};

export default MockTestsPage;