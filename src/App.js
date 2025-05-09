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
// import "./App.css";
// import NavBar from "./components/NavBar";
// import { Routes, Route } from "react-router-dom";
// import Home from "./components/pages/Home";
// import GameBoard from "./components/pages/Game";
// import Gallery from "./components/pages/Gallery";
// import Login from "./components/pages/Login";
// import Register from "./components/pages/Register";

// function App() {
//   return (
//     <>
//       <NavBar />
//       <main className="main-content">
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/gallery" element={<Gallery />}></Route>
//           <Route path="/game" element={<GameBoard />}></Route>
//         </Routes>
//       </main>
//     </>
//   );
// }

// export default App;

import "./App.css";
import { Routes, Route,Navigate } from "react-router-dom";
import Container from "./components/Container";
import Instructions from "./components/Instructions";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Instructions />} />
        <Route path="/test" element={<Container />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}

export default App;
