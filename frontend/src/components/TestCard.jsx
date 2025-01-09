import React from 'react';

const TestCard = ({ title, description, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2">{description || 'Click to start test'}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-indigo-600">10 questions</span>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
          Start Test
        </button>
      </div>
    </div>
  );
};

export default TestCard;
