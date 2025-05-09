// import React from "react";

// const Controls = ({ currentQ, setCurrentQ, answers, setAnswers }) => {
//   const totalQuestions = answers.length;

//   const updateStatus = (newStatus) => {
//     setAnswers((prev) => {
//       const updated = [...prev];
//       updated[currentQ] = {
//         ...updated[currentQ],
//         status: newStatus,
//       };
//       return updated;
//     });
//   };

//   const goNext = () => {
//     if (currentQ < totalQuestions - 1) {
//       setCurrentQ(currentQ + 1);
//     }
//   };

//   const handleSaveNext = () => {
//     updateStatus("answered");
//     goNext();
//   };

//   const handleReviewNext = () => {
//     const isAnswered = answers[currentQ].selectedOption !== null;
//     updateStatus(isAnswered ? "answered_review" : "review");
//     goNext();
//   };

//   const handleClear = () => {
//     setAnswers((prev) => {
//       const updated = [...prev];
//       updated[currentQ] = {
//         selectedOption: null,
//         status: "not_answered",
//       };
//       return updated;
//     });
//   };

//   return (
//     <div style={styles.container}>
//       <button style={styles.btn} onClick={handleSaveNext}>
//         ✅ Save & Next
//       </button>
//       <button style={styles.btn} onClick={handleReviewNext}>
//         🟣 Review & Next
//       </button>
//       <button style={styles.btn} onClick={handleClear}>
//         ❌ Clear
//       </button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: "10px 20px",
//     display: "flex",
//     gap: "10px",
//     justifyContent: "center",
//   },
//   btn: {
//     padding: "10px 15px",
//     fontSize: "16px",
//     borderRadius: "6px",
//     border: "none",
//     cursor: "pointer",
//     backgroundColor: "#ddd",
//     transition: "0.2s",
//   },
// };

// export default Controls;
import React from "react";

const Controls = ({ currentQ, setCurrentQ, answers, setAnswers }) => {
  const totalQuestions = answers.length;

  const updateStatus = (newStatus) => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentQ] = {
        ...prev[currentQ],
        status: newStatus,
      };
      return updated;
    });
  };

  const goNext = () => {
    if (currentQ < totalQuestions - 1) {
      setCurrentQ(currentQ + 1);
    }
  };

  const handleSaveNext = () => {
    updateStatus("answered");
    goNext();
  };

  const handleReviewNext = () => {
    const isAnswered = answers[currentQ].selectedOption !== null;
    updateStatus(isAnswered ? "answered_review" : "review");
    goNext();
  };

  const handleClear = () => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentQ] = {
        ...prev[currentQ], // 🔥 preserve the structure
        selectedOption: null,
        status: "not_answered",
      };
      return updated;
    });
  };

  return (
    <div style={styles.container}>
      <button style={styles.btn} onClick={handleSaveNext}>
        ✅ Save & Next
      </button>
      <button style={styles.btn} onClick={handleReviewNext}>
        🟣 Review & Next
      </button>
      <button style={styles.btn} onClick={handleClear}>
        ❌ Clear
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "10px 20px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  btn: {
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#ddd",
    transition: "0.2s",
  },
};

export default Controls;
