"use client"

import React from "react";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url('https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/11/BMD-3832.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "1rem",
            color: "#333",
          }}
        >
          Enter Exactly <span style={{ color: "#3b82f6" }}>10 Words</span>
        </h2>
        <textarea
          rows="4"
          style={{
            width: "100%",
            padding: "1rem",
            border: "2px solid #d1d5db",
            borderRadius: "8px",
            outline: "none",
            fontSize: "1rem",
            color: "#374151",
          }}
          placeholder="Type your 10 words here..."
        />
        <button
          style={{
            marginTop: "1.5rem",
            width: "100%",
            background: "linear-gradient(to right, #3b82f6, #6366f1)",
            color: "white",
            fontWeight: "bold",
            padding: "0.75rem",
            borderRadius: "8px",
            cursor: "pointer",
            border: "none",
            fontSize: "1rem",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
