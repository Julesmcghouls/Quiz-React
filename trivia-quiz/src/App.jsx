import React, {useState} from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div>
      <h1>Trivia Quiz</h1>
    </div>
  );
}

export default App;