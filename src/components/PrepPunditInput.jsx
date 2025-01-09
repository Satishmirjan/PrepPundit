import React, { useState } from 'react';
import { FileText, Link, Image, Code, Upload } from 'lucide-react';

const InputTypes = {
  TEXT: 'text',
  PDF: 'pdf',
  LINK: 'link',
  IMAGE: 'image',
  CODE: 'code'
};

const DifficultyLevels = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard'
};

const PrepPunditInput = () => {
  const [selectedType, setSelectedType] = useState(InputTypes.TEXT);
  const [difficultyLevel, setDifficultyLevel] = useState(DifficultyLevels.MEDIUM);
  const [inputContent, setInputContent] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const renderInput = () => {
    switch (selectedType) {
      case InputTypes.TEXT:
        return (
          <textarea
            className="w-full h-64 p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300 ease-in-out"
            placeholder="Enter your text here..."
            value={inputContent}
            onChange={(e) => setInputContent(e.target.value)}
          />
        );
      case InputTypes.PDF:
      case InputTypes.IMAGE:
        return (
          <div className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 transition-all duration-300 hover:border-blue-500">
            <Upload className="w-12 h-12 text-gray-400 mb-4" />
            <input
              type="file"
              accept={selectedType === InputTypes.PDF ? ".pdf" : "image/*"}
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              Click to upload or drag and drop
            </label>
            {file && (
              <p className="mt-2 text-sm text-gray-600">
                Selected file: {file.name}
              </p>
            )}
          </div>
        );
      case InputTypes.LINK:
        return (
          <input
            type="url"
            className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Enter URL here..."
            value={inputContent}
            onChange={(e) => setInputContent(e.target.value)}
          />
        );
      case InputTypes.CODE:
        return (
          <textarea
            className="w-full h-64 p-4 rounded-lg border border-gray-300 font-mono focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
            placeholder="Enter or paste your code here..."
            value={inputContent}
            onChange={(e) => setInputContent(e.target.value)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
        {/* Input Type Selection */}
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedType(InputTypes.TEXT)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              selectedType === InputTypes.TEXT
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span>Text</span>
          </button>
          <button
            onClick={() => setSelectedType(InputTypes.PDF)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              selectedType === InputTypes.PDF
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Upload className="w-5 h-5" />
            <span>PDF</span>
          </button>
          <button
            onClick={() => setSelectedType(InputTypes.LINK)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              selectedType === InputTypes.LINK
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Link className="w-5 h-5" />
            <span>Link</span>
          </button>
          <button
            onClick={() => setSelectedType(InputTypes.IMAGE)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              selectedType === InputTypes.IMAGE
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Image className="w-5 h-5" />
            <span>Image</span>
          </button>
          <button
            onClick={() => setSelectedType(InputTypes.CODE)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              selectedType === InputTypes.CODE
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Code className="w-5 h-5" />
            <span>Code</span>
          </button>
        </div>

        {/* Dynamic Input Area */}
        <div className="transition-all duration-300 ease-in-out">
          {renderInput()}
        </div>

        {/* Difficulty Level Selection */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Select Difficulty Level
          </label>
          <div className="flex space-x-4">
            {Object.values(DifficultyLevels).map((level) => (
              <button
                key={level}
                onClick={() => setDifficultyLevel(level)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  difficultyLevel === level
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2">
          <span>Generate Questions</span>
        </button>
      </div>
    </div>
  );
};

export default PrepPunditInput;