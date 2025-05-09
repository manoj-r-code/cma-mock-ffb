
import { useState, useEffect } from "react";
import { questions } from "../data/questions";
import Header from "./Header";
import QuestionPage from "./QuestionPage";
import Controls from "./Controls";
import Sidebar from "./SideBar";
import { useNavigate } from "react-router-dom";
import "./Container.css"; // Optional CSS file for styling
const TOTAL_TIME = 120 * 60; // 120 mins in seconds

function Container() {
  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const navigate = useNavigate();

  const [answers, setAnswers] = useState(
    Array(68)
      .fill()
      .map(() => ({
        selectedOption: null,
        status: "not_visited", // Initially all questions are not visited
      }))
  );

  // Update the question status when the user navigates to it
  useEffect(() => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      if (updatedAnswers[currentQ].status === "not_visited") {
        updatedAnswers[currentQ].status = "not_answered"; // Keep it as not_answered when visited but not saved
      }
      return updatedAnswers;
    });
  }, [currentQ]);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // handle auto-submit here
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Handle saving answers and updating question status to "answered"
  const handleAnswer = (selectedOption) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQ] = {
        ...updatedAnswers[currentQ],
        selectedOption: selectedOption || null, // Clear if no option is selected
        status: selectedOption ? "answered" : "not_answered", // Set the correct status based on selection
      };
      return updatedAnswers;
    });
  };

  const handleSubmit = () => {
    const confirmSubmit = window.confirm("Are you sure you want to submit the test?");
    if (confirmSubmit) {
      console.log("✅ Test submitted!", answers);
      navigate("/thank-you"); // ✅ this works
    }
  };
  

  // Function to save the answer and update status
  const saveAnswer = () => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      const currentAnswer = updatedAnswers[currentQ];

      // Check if the selectedOption is null (answer was cleared)
      updatedAnswers[currentQ] = {
        ...currentAnswer,
        status: currentAnswer.selectedOption ? "answered" : "not_answered", // If answered, mark as answered
      };
      return updatedAnswers;
    });
  };

  return (
    <div className="app">
      <Header timeLeft={timeLeft} />
      <div className="main-content">
        <Sidebar
          answers={answers}
          onNavigate={(index) => setCurrentQ(index)}
          onSubmit={handleSubmit}
        />
        <QuestionPage
          question={questions[currentQ]}
          index={currentQ}
          answer={answers[currentQ]}
          setAnswers={setAnswers}
          handleAnswer={handleAnswer}
        />
        <Controls
          currentQ={currentQ}
          setCurrentQ={setCurrentQ}
          answers={answers}
          setAnswers={setAnswers}
          saveAnswer={saveAnswer} // Pass the saveAnswer function to Controls
        />
      </div>
    </div>
  );
}

export default Container;
