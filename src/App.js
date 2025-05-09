// import { useState, useEffect } from "react";
// import { questions } from "./data/questions";
// import Header from "./components/Header";
// import QuestionPage from "./components/QuestionPage";
// import Controls from "./components/Controls";
// import Sidebar from "./components/Sidebar";

// const TOTAL_TIME = 120 * 60; // 120 mins in seconds

// function App() {
//   const [currentQ, setCurrentQ] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

//   const [answers, setAnswers] = useState(
//     Array(68)
//       .fill()
//       .map(() => ({
//         selectedOption: null,
//         status: "not_visited", // Initially all questions are not visited
//       }))
//   );

//   // Update the question status when the user navigates to it
//   useEffect(() => {
//     // When the user navigates to a question, change its status to "not_answered"
//     setAnswers((prevAnswers) => {
//       const updatedAnswers = [...prevAnswers];
//       if (updatedAnswers[currentQ].status === "not_visited") {
//         updatedAnswers[currentQ].status = "not_answered"; // Make it red when visited
//       }
//       return updatedAnswers;
//     });
//   }, [currentQ]); // Trigger this effect when `currentQ` changes

//   // Timer logic
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           // handle auto-submit here
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   // Handle saving answers and updating question status to "answered"
//   const handleAnswer = (selectedOption) => {
//     setAnswers((prevAnswers) => {
//       const updatedAnswers = [...prevAnswers];
//       updatedAnswers[currentQ] = {
//         selectedOption,
//         status: "answered", // Change status to green when answered
//       };
//       return updatedAnswers;
//     });
//   };

//   return (
//     <div className="app">
//       <Header timeLeft={timeLeft} />
//       <div className="main-content">
//         <Sidebar answers={answers} onNavigate={(index) => setCurrentQ(index)} />
//         <QuestionPage
//           question={questions[currentQ]}
//           index={currentQ}
//           answer={answers[currentQ]}
//           setAnswers={setAnswers}
//           handleAnswer={handleAnswer} // Pass the answer handler to QuestionPage
//         />
//         <Controls
//           currentQ={currentQ}
//           setCurrentQ={setCurrentQ}
//           answers={answers}
//           setAnswers={setAnswers}
//           handleAnswer={handleAnswer} // Pass the answer handler to Controls
//         />
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import { questions } from "./data/questions";
import Header from "./components/Header";
import QuestionPage from "./components/QuestionPage";
import Controls from "./components/Controls";
import Sidebar from "./components/SideBar";

const TOTAL_TIME = 120 * 60; // 120 mins in seconds

function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

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
        selectedOption, // Just update the selected option
      };
      return updatedAnswers;
    });
  };
  const handleSubmit = () => {
    const confirmSubmit = window.confirm(
      "Are you sure you want to submit the test?"
    );
    if (confirmSubmit) {
      // Replace this with your actual submission logic
      console.log("✅ Test submitted!", answers);

      // Optional: you can also disable navigation or redirect here
      // Example: navigate("/results"); or setSubmitted(true);
    }
  };

  // Function to save the answer and update status
  const saveAnswer = () => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQ] = {
        ...updatedAnswers[currentQ],
        status: "answered", // Update status to answered when Save & Next is clicked
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

export default App;
