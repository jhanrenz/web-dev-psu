import { useState, useEffect } from "react";

interface Question {
  question: string;
  options: string[]; 
  answer: number; // index of correct answer (0, 1, 2, or 3)
}

const Quiz = () => {
  const questions: Question[] = [
    {
      question: "How often do you recycle?",
      options: ["Never", "Sometimes", "Always", "Rarely"],
      answer: 2, // Correct answer is "Always"
    },
    {
      question: "Do you use reusable bags when shopping?",
      options: ["Never", "Sometimes", "Always", "Rarely"],
      answer: 2,
    },
    {
      question: "How much water do you save?",
      options: ["None", "I try", "I save a lot", "I don't know"],
      answer: 2,
    },
    {
      question: "Do you compost food waste?",
      options: ["No", "Sometimes", "Yes", "I wish I could"],
      answer: 2,
    },
    {
      question: "Do you prefer public transportation over driving?",
      options: ["Never", "Sometimes", "Always", "I wish I could"],
      answer: 2,
    },
    {
      question: "Do you buy eco-friendly products?",
      options: ["No", "Sometimes", "Yes", "I wish I could afford it"],
      answer: 2,
    },
    {
      question: "Do you avoid single-use plastics?",
      options: ["No", "Sometimes", "Yes", "I try"],
      answer: 2,
    },
    {
      question: "Do you turn off lights when not in use?",
      options: ["Never", "Sometimes", "Always", "Rarely"],
      answer: 2,
    },
    {
      question: "How often do you eat plant-based food?",
      options: ["Never", "Sometimes", "Always", "I try"],
      answer: 2,
    },
    {
      question: "Do you purchase items with minimal packaging?",
      options: ["No", "Sometimes", "Yes", "I try"],
      answer: 2,
    },
  ];

  const [userAnswers, setUserAnswers] = useState<number[]>(new Array(questions.length).fill(-1)); // -1 means unanswered
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timer, setTimer] = useState(10); // 10 seconds for each question
  const [isAnswering, setIsAnswering] = useState(true); // Flag to prevent answering after time is up
  const [quizStarted, setQuizStarted] = useState(false); // To track if the quiz has started

  const handleAnswerChange = (index: number, answer: number) => {
    if (!isAnswering) return; // Prevent answering once the time is up
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = answer;
    setUserAnswers(updatedAnswers);
    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(10); // Reset timer for the next question
      setIsAnswering(true); // Allow answering for the new question
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    const score = userAnswers.filter((answer, index) => answer === questions[index].answer).length;
    if (score >= 8) {
      return "Wow! You're an Eco Friendly Person!";
    } else if (score >= 5) {
      return "You're Semi Eco Friendly!";
    } else {
      return "You're a Beginner Eco Friendly! Keep it up!";
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setTimer(10); // Start the timer when quiz starts
  };

  const startAgain = () => {
    // Reset everything to start the quiz again
    setUserAnswers(new Array(questions.length).fill(-1)); // Reset answers
    setCurrentQuestionIndex(0); // Go back to first question
    setShowResults(false); // Hide results
    setTimer(10); // Reset timer
    setIsAnswering(true); // Allow answering again
    setQuizStarted(true); // Start the quiz again
  };

  useEffect(() => {
    if (timer === 0 && isAnswering) {
      setIsAnswering(false); // Disable answering when time runs out
      moveToNextQuestion(); // Move to next question when time is up
    }
  }, [timer]);

  useEffect(() => {
    if (isAnswering && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval); // Clear the interval when time runs out or the quiz ends
    }
  }, [isAnswering, timer]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="max-w-xl w-full p-8 bg-white rounded-lg shadow-lg"> {/* Increased padding */}
    <h1 className="text-3xl font-semibold text-center text-green-600 mb-8 transition-transform duration-300 hover:scale-105">
      Eco-Friendly Quiz
    </h1>

    {!quizStarted ? (
      <div className="text-center">
        <p className="text-lg text-gray-500 mb-8">Get ready to test your eco-friendly habits!</p>
        <button
          onClick={startQuiz}
          className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all ease-in-out duration-200"
        >
          Start Quiz
        </button>
      </div>
    ) : showResults ? (
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800">{calculateResults()}</h2>
        <div className="mt-8">
          <button
            onClick={startAgain}
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all ease-in-out duration-200"
          >
            Start Again
          </button>
        </div>
      </div>
    ) : (
      <div>
        <div className="text-center mb-8">
          <p className="text-lg font-medium text-gray-500">
            Time left: {timer}s
          </p>
          <div className="mt-6">
            <p className="text-xl font-medium text-green-700">{questions[currentQuestionIndex].question}</p>
            <div className="grid grid-cols-2 gap-6 mt-6">
              {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                <label
                  key={optionIndex}
                  className={`cursor-pointer flex items-center justify-center p-8 rounded-lg text-white transition-all ease-in-out duration-200 ${  
                    optionIndex === 0
                      ? "bg-red-500 hover:bg-red-600"
                      : optionIndex === 1
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : optionIndex === 2
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    value={optionIndex}
                    checked={userAnswers[currentQuestionIndex] === optionIndex}
                    onChange={() => handleAnswerChange(currentQuestionIndex, optionIndex)}
                    className="hidden"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
</div>

  );
};

export default Quiz;
