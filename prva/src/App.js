import "./App.css";
import { idHelpers } from "./library/helpers";
import { Quiz } from "./library/components/Quiz";
import { useState } from "react";

function App() {
  const [quizAnswer, setQuizAnswer] = useState(null);
  const id = idHelpers.generateID();
  const handleSubmit = (answers, id) => {
    setQuizAnswer({ answers, id });
  };

  return (
    <div className="App">
      <header className="App-header">
        {quizAnswer === null && <Quiz id={id} onSubmit={handleSubmit} />}
        {quizAnswer !== null && (
          <div>
            {JSON.stringify(quizAnswer)}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
