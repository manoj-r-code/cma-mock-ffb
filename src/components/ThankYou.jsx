import "./ThankYou.css";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="thankyou-page">
      <h1>🎉 Thank You!</h1>
      <p>
        Your responses have been recorded successfully. Best of luck with your
        CMA journey!
      </p>
      <button className="home-button" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default ThankYou;
