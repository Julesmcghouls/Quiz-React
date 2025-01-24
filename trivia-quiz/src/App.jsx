import { useEffect, useState } from "react";
import { fetchTrivia } from "./api/fetchTrivia";
import QuestionCard from "./components/QuestionCard";

const correctGif = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG95a3I5MnFwMjZyZ2I1aGNydXoweHZoaTgxNjQ4cG9lOThxcGJleCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AGW3VO7F5DLbARBuwi/giphy.gif";
const incorrectGif = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnY0aGs3dmxicWlkZTN3MDRpMjQwdHo2ZG40ODA3dDI3YThiZG9kaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JT7Td5xRqkvHQvTdEu/giphy.gif";

function App() {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState("");

    useEffect(() => {
        async function loadQuestions() {
            const data = await fetchTrivia();
            setQuestions(data);
        }
        loadQuestions();
    }, []);

    const handleAnswer = (selectedAnswer) => {
        const correctAnswer = questions[currentIndex].correct_answer;
        if (selectedAnswer === correctAnswer) {
            setScore(score + 1);
            setFeedback(correctGif);
        } else {
            setFeedback(incorrectGif);
        }

        setTimeout(() => {
            setFeedback("");
            setCurrentIndex(currentIndex + 1);
        }, 1500);
    };

    if (questions.length === 0) return <div>Loading...</div>;
    if (currentIndex >= questions.length)
        return <h2>Your final score is {score}/{questions.length}</h2>;

    const currentQuestion = questions[currentIndex];
    const choices = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort();

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Trivia Quiz</h1>
            {feedback ? (
                <img src={feedback} alt="Feedback" style={{ maxWidth: "300px" }} />
            ) : (
                <QuestionCard
                    question={currentQuestion.question}
                    choices={choices}
                    onAnswer={handleAnswer}
                />
            )}
            <p>Score: {score}</p>
        </div>
    );
}

export default App;
