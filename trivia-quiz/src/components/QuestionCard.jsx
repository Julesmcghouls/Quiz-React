import React from "react";

function QuestionCard({ question, choices, onAnswer }) {
    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h2 dangerouslySetInnerHTML={{ __html: question }} />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "20px",
                }}
            >
                {choices.map((choice, index) => (
                    <button
                        key={index}
                        onClick={() => onAnswer(choice)}
                        style={{
                            padding: "10px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            borderRadius: "5px",
                            border: "1px solid #ddd",
                            backgroundColor: "#4caf50",
                            color: "white",
                            transition: "background-color 0.3s",
                        }}
                    >
                        {choice}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default QuestionCard;
