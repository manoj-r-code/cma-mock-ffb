// import "./ThankYou.css";
// import { useNavigate } from "react-router-dom";

// const ThankYou = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="thankyou-page">
//       <h1>🎉 Thank You!</h1>
//       <p>
//         Your responses have been recorded successfully. Best of luck with your
//         CMA journey!
//       </p>
//       <button className="home-button" onClick={() => navigate("/")}>
//         Back to Home
//       </button>
//     </div>
//   );
// };
// export default ThankYou;

import "./ThankYou.css";
import { useNavigate, useLocation } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const { score } = location.state || { score: 0 };
  const { score, answers } = location.state || { score: 0, answers: [] };

  return (
    <div className="thankyou-page">
      <h1>🎉 Thank You!</h1>

      <p>
        Your responses have been recorded successfully.
        <h3>Your Score: {score} / 10</h3>
      </p>

      {/* <button className="home-button" onClick={() => navigate("/review")}>
        Back to Home
      </button> */}
      <button className="home-button" onClick={() => navigate("/review", { state: { answers } })}>
  Review Your Answers
</button>

    </div>
  );
};

export default ThankYou;
