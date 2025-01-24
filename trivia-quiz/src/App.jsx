import React, { useEffect, useState } from "react";
import { fetchTrivia } from "./api/fetchTrivia";

function App() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function getQuestions() {
            const data = await fetchTrivia();
            setQuestions(data);
        }
        getQuestions();
    }, []);

    return <div>{questions.length > 0 ? "Questions loaded!" : "Loading..."}</div>;
}

export default App;
