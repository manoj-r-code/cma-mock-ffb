import { useNavigate } from "react-router-dom";
import "./Instructions.css"; // Optional CSS file for styling

const Instructions = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/test"); // Navigate to test route
  };

  return (
    <div className="instructions-page">
      <h1>📝 CMA Mock Test Instructions</h1>
      <ul>
        <li>You have 60 minutes to complete the test.</li>
        <li>There are 60 questions, one per page.</li>
        <li>You can use Save & Next, Review & Next, or Clear options.</li>
        <li>
          The sidebar shows question status: 🟩 Answered,🔴 Not Answered, 🟣
          Review, ☑️ Answered and marked for review, ⚪ Unvisited.
        </li>
        <li>
          Once time runs out or you click Submit, your answers will be saved.
        </li>
        <li>
          Please ensure you are in a quiet environment and have a stable
          internet connection. Good luck!
        </li>
      </ul>

      <button className="start-button" onClick={handleStart}>
        🚀 Start Test
      </button>
    </div>
  );
};

export default Instructions;
