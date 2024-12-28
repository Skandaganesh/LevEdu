// src/Quiz.js
"use client"

import React, { useState } from 'react';

const Quiz = ({ question, option_1, option_2, option_3, option_4, correct_option, explanation }) => {
  // const { question, option_1, option_2, option_3, option_4, correct_option, explanation } = questionData;
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const [lock,setLock] = useState(false);

  const handleOptionChange = (option) => {
    if (!isSubmitted) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSubmitted) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className='w-full h-full snap-start relative rounded overflow-hidden flex flex-col justify-center' >
    <div className="min-w-full mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4">{question}</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          {[option_1, option_2, option_3, option_4].map((option, index) => (
            <label key={index} className={`flex items-center p-2 border rounded cursor-pointer ${selectedOption === option ? 'bg-blue-200' : 'bg-gray-100'}`}>
              <input
                type="radio"
                name="quiz-option"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submit
        </button>
      </form>

      {isSubmitted && (
        <div className="mt-4">
          {selectedOption === correct_option ? (
            <p className="text-green-500">Correct! 🎉</p>
          ) : (
            <p className="text-red-500">Incorrect! The correct answer is: {correct_option}</p>
          )}
          <p className="mt-2 text-gray-700">{explanation}</p>
        </div>
      )}
    </div>
  </div>
  );
};

export default Quiz;
