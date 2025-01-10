import ImageUpload from "./components/ImageUpload";
import MCQDisplay from "./components/MCQDisplay";
import React, { useState } from 'react';


function App() {
    const [questions, setQuestions] = useState([]);

    const handleQuestions = (newQuestions) => {
        setQuestions(newQuestions);
    };

    return (
        <div className="App">
            <h1>Image to MCQs</h1>
            <ImageUpload onQuestionsFetched={handleQuestions} />
            <MCQDisplay questions={questions} />
        </div>
    );
}

export default App;
