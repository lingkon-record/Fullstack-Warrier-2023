"use client"
import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    const wordCount = text.trim().split(/\s+/).filter((word) => word !== "").length;

    if (wordCount > 10) {
      setError("⚠️ You can only input 10 words.");
    } else {
      setError("");
    }

    setInputValue(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const wordCount = inputValue.trim().split(/\s+/).filter((word) => word !== "").length;

    if (wordCount === 10) {
      alert("🎉 Submission successful!");
    } else {
      alert(`❌ Please input exactly 10 words. Current count: ${wordCount}`);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <textarea
            value={inputValue}
            onChange={handleInputChange}
            rows="4"
            style={{
              width: "100%",
              padding: "1rem",
              border: error ? "2px solid #ef4444" : "2px solid #d1d5db",
              borderRadius: "8px",
              outline: "none",
              fontSize: "1rem",
              color: "#374151",
            }}
            placeholder="Type your 10 words here..."
          />
          {error && (
            <p style={{ color: "#ef4444", marginTop: "0.5rem", fontSize: "0.9rem" }}>
              {error}
            </p>
          )}
          <button
            type="submit"
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
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={(e) =>
              (e.target.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) =>
              (e.target.style.transform = "scale(1)")
            }
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
