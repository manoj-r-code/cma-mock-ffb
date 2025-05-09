// import React from "react";

// const Sidebar = ({ answers, onNavigate, onSubmit }) => {
//   const getStatusEmoji = (status) => {
//     switch (status) {
//       case "answered":
//         return "🟩"; // Green for answered
//       case "not_answered":
//         return "🔴"; // Red for not answered
//       case "review":
//         return "🟣"; // Purple for marked for review
//       case "answered_review":
//         return "☑️"; // Green + Purple for answered and marked for review
//       default:
//         return "⬜"; // Default empty box for not visited
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h3 style={styles.title}>Question Status</h3>
//       <div style={styles.nav}>
//         {answers.map((answer, index) => {
//           const isVisited = answer.status !== "not_visited";
//           return (
//             <div
//               key={index}
//               onClick={() => onNavigate(index)}
//               style={{
//                 ...styles.navItem,
//                 backgroundColor: isVisited ? "#d4f7d4" : "transparent",
//               }}
//               title={`Question ${index + 1}: ${answer.status}`}
//             >
//               <span style={styles.status}>{getStatusEmoji(answer.status)}</span>
//             </div>
//           );
//         })}
//       </div>
//       <button style={styles.submitButton} onClick={onSubmit}>
//         🚀 Submit Test
//       </button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     marginTop: "45px",
//     width: "200px",
//     padding: "20px",
//     backgroundColor: "#f4f4f4",
//     borderRadius: "8px",
//     position: "fixed", // Fixed positioning
//     top: "10px", // Adjust to place it at the top
//     right: "10px", // Position it on the right
//     height: "calc(100vh - 20px)", // Take full height minus the padding
//     overflowY: "auto", // Add scroll if needed
//   },
//   title: {
//     fontSize: "18px",
//     fontWeight: "bold",
//     marginBottom: "10px",
//   },
//   nav: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   },
//   navItem: {
//     display: "flex",
//     alignItems: "center",
//     fontSize: "16px",
//     cursor: "pointer",
//     padding: "5px 10px",
//     borderRadius: "6px",
//     transition: "background 0.3s",
//   },
//   status: {
//     fontSize: "20px",
//     marginRight: "10px",
//   },
//   submitButton: {
//     marginTop: "20px",
//     padding: "10px 15px",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     fontWeight: "bold",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontSize: "16px",
//     width: "100%",
//     transition: "background 0.3s",
//   },
// };

// export default Sidebar;import React from "react";
import "./SideBar.css"; // Import the CSS file

const Sidebar = ({ answers, onNavigate, onSubmit }) => {
  const getStatusEmoji = (status) => {
    switch (status) {
      case "answered":
        return "🟩"; // Green for answered
      case "not_answered":
        return "🔴"; // Red for not answered
      case "review":
        return "🟣"; // Purple for marked for review
      case "answered_review":
        return "☑️"; // Green + Purple for answered and marked for review
      default:
        return "⬜"; // Default empty box for not visited
    }
  };

  return (
    <div className="sidebar-container">
  <div className="legend">
    <div className="legend-row">
      <p>🟩 Answered</p>
      <p>🔴 Not Answered</p>
    </div>
    <div className="legend-row">
      <p>🟣 Review</p>
      <p>☑️ Answered & Review</p>
    </div>
    <div className="legend-row">
      <p>⬜ Not Visited</p>
    </div>
  </div>


      <h3 className="sidebar-title">Choose a question</h3>
      <div className="questions-container">
        {answers.map((answer, index) => {
          const isVisited = answer.status !== "not_visited";
          return (
            <div
              key={index}
              onClick={() => onNavigate(index)}
              className={`nav-item ${isVisited ? "visited" : ""}`}
              title={`Question ${index + 1}: ${answer.status}`}
            >
              <span className="status">{getStatusEmoji(answer.status)}</span>
              {index + 1} {/* Display question number */}
            </div>
          );
        })}
      </div>
      <button className="submit-button" onClick={onSubmit}>
        🚀 Submit Test
      </button>
    </div>
  );
};

export default Sidebar;
