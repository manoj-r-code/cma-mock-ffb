import React from "react";

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

const Header = ({ timeLeft }) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>🧠 CMA Mock Test</h1>
      <div style={styles.timer}>
        ⏳ Time Left: <span style={styles.time}>{formatTime(timeLeft)}</span>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#222",
    color: "white",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "24px",
  },
  timer: {
    fontSize: "18px",
    backgroundColor: "#444",
    padding: "5px 10px",
    borderRadius: "6px",
  },
  time: {
    fontWeight: "bold",
    marginLeft: "5px",
  },
};

export default Header;
