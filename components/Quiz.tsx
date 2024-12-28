"use client";
import React, { useState } from "react";

interface Question {
  id: number;
  text: string;
  options: string[];
  correctOption: string;
  explanation: string;
}

const Quiz = ({ questions }: { questions: Question[] }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [feedback, setFeedback] = useState<Record<number, string>>({});

  const handleOptionSelect = (questionId: number, option: string, correctOption: string, explanation: string) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: option });
    if (option === correctOption) {
      setFeedback({ ...feedback, [questionId]: `✅ Correct! ${explanation}` });
    } else {
      setFeedback({ ...feedback, [questionId]: `❌ Wrong. ${explanation}` });
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md space-y-6">
      <h3 className="text-lg font-semibold">Quiz</h3>
      {questions.map((question) => (
        <div key={question.id} className="space-y-2">
          <p className="text-gray-700 font-medium">{question.text}</p>
          {question.options.map((option) => (
            <label
              key={option}
              className={`block p-2 border rounded-md ${
                selectedAnswers[question.id] === option
                  ? option === question.correctOption
                    ? "border-green-500"
                    : "border-red-500"
                  : "border-gray-300"
              }`}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option}
                onChange={() =>
                  handleOptionSelect(question.id, option, question.correctOption, question.explanation)
                }
                className="mr-2"
                disabled={!!selectedAnswers[question.id]}
              />
              {option}
            </label>
          ))}
          {feedback[question.id] && (
            <p className="text-sm font-medium mt-2">
              {feedback[question.id]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Quiz;
