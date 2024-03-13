import React, { useState } from "react";
import { QuestionsAndOptions } from "../assets/data.js";

let count = 0;
const QandOList = () => {
  const [question, setQuestion] = useState(QuestionsAndOptions[0]);
  const [selectedOption, setSelectedOption] = useState({
    initialState: null,
    correctAnswer: "",
    wrongAnswer: "",
  });
  const nextQuestion = () => {
    setSelectedOption(null);
    count++;
    if (count > QuestionsAndOptions.length - 1) {
      count = QuestionsAndOptions.length - 1;
      alert("no more question");
    }
    setQuestion(QuestionsAndOptions[count]);
  };

  const previousQuestion = () => {
    setSelectedOption(null);
    count--;
    if (count < 0) {
      count = 0;
      alert("no more question");
    }
    setQuestion(QuestionsAndOptions[count]);
  };

  const answerSelect = (id) => {
    setSelectedOption(id);
  };

  return (
    <>
      <div>
        <h2 className="bg-gray-400 text-center text-xl font-semibold p-8">
          {question.question}
        </h2>

        <h1 className="flex justify-around bg-gray-300  p-3 text-lg py-10">
          {question.options.map((e) => (
            <div
              key={e.id}
              className={`font-medium select-none cursor-pointer border hover:bg-gray-400 border-black rounded-lg p-2 ${
                selectedOption === e.id && selectedOption === question.answer
                  ? "bg-green-500"
                  : ""
              }`}
              onClick={() => {
                answerSelect(e.id);
              }}
            >
              {e.id}. {e.text}
            </div>
          ))}
        </h1>
      </div>

      <div className="flex justify-center gap-2 pt-10">
        <button
          className="border border-black w-[100px] rounded-md"
          onClick={previousQuestion}
        >
          Previous
        </button>
        <button
          className="border border-black w-[100px] rounded-md"
          onClick={nextQuestion}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default QandOList;
