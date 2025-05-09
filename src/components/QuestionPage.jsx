import React from "react";

const QuestionPage = ({ question, index, answer, setAnswers }) => {
  const handleOptionChange = (optionIndex) => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        selectedOption: optionIndex,
        // status: "answered"
      };
      return updated;
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.qHeader}>
        Q{index + 1}. {question.question}
      </h2>
      <div style={styles.options}>
        {question.options.map((opt, i) => (
          <label key={i} style={styles.optionLabel}>
            <input
              type="radio"
              name={`question-${index}`}
              checked={answer.selectedOption === i}
              onChange={() => handleOptionChange(i)}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    flexGrow: 1,
  },
  qHeader: {
    fontSize: "20px",
    marginBottom: "15px",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  optionLabel: {
    backgroundColor: "#f0f0f0",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default QuestionPage;
