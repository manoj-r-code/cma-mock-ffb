// // src/components/ReviewPage.jsx
// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { questions } from "../data/questions";
// import "./ReviewPage.css";

// function ReviewPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { answers } = location.state || {};
//   console.log(answers);
//   console.log("📚 Loaded questionss:", questions);

//   if (!answers) {
//     return <div>No data to review. Please take the test first.</div>;
//   }

//   return (
//     <div className="review-container">
//       <h2>📝 Review Your Answers</h2>
//       {questions.map((q, idx) => {
//         const userAnswerIndex = answers[idx].selectedOption;
//         const userAnswer = q.options[userAnswerIndex]; // could be undefined
//         const correctAnswer = q.correctAnswer;

//         return (
//           <div key={idx} className="review-question">
//             <h3>
//               Q{idx + 1}. {q.question}
//             </h3>
//             <ul>
//               {q.options.map((opt, optIndex) => {
//                 let className = "";

//                 if (userAnswerIndex === optIndex) {
//                   if (opt === correctAnswer) className = "correct";
//                   else className = "wrong";
//                 } else if (opt === correctAnswer) {
//                   // Optional: Highlight the correct answer even if user didn't pick it
//                   className = "correct";
//                 }

//                 return (
//                   <li key={optIndex} className={`option ${className}`}>
//                     {opt}
//                     {userAnswerIndex === optIndex ? " ← Your choice" : ""}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         );
//       })}
//       <button className="home-button" onClick={() => navigate("/")}>
//         Go Home
//       </button>
//     </div>
//   );
// }

// export default ReviewPage;
// src/components/ReviewPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import "./ReviewPage.css";

function ReviewPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers } = location.state || {};
  console.log(answers);
  console.log("📚 Loaded questionss:", questions);

  if (!answers) {
    return <div>No data to review. Please take the test first.</div>;
  }

  return (
    <div className="review-container">
      <h2>📝 Review Your Answers</h2>
      {questions.map((q, idx) => {
        const userAnswerIndex = answers[idx].selectedOption;
        // const userAnswer = q.options[userAnswerIndex]; // could be undefined
        const correctAnswer = q.correctAnswer;

        return (
          <div key={idx} className="review-question">
            <h3>
              Q{idx + 1}. {q.question}
            </h3>
            <ul>
              {q.options.map((opt, optIndex) => {
                let className = "";

                // If the user didn't answer the question
                if (userAnswerIndex === undefined || userAnswerIndex === null) {
                  if (opt === correctAnswer) {
                    className = "correct-blue"; // Blue color for correct answer
                  } else {
                    className = "unanswered"; // Neutral color for other options
                  }
                } else {
                  // User attempted the question
                  if (userAnswerIndex === optIndex) {
                    if (opt === correctAnswer) className = "correct";
                    else className = "wrong";
                  } else if (opt === correctAnswer) {
                    className = "correct"; // Highlight correct answer
                  }
                }

                return (
                  <li key={optIndex} className={`option ${className}`}>
                    {opt}
                    {userAnswerIndex === optIndex && (
                      <span className="user-choice-badge"></span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <button className="home-button" onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
}

export default ReviewPage;

