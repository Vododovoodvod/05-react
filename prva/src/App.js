import "./App.css";
import { idHelpers } from "./library/helpers";
import { Quiz } from "./library/components/Quiz";
import { useState } from "react";
import { LoginForm } from "./library/components/LoginForm";

function App() {
  const [quizAnswer, setQuizAnswer] = useState(null);

  const id = idHelpers.generateID();
  const handleSubmit = (answers, id) => {
    setQuizAnswer({ answers, id });
  };

  const [loginInfo, setLoginInfo] = useState(null);
  const handleLogin = (fromState) => {
    setLoginInfo(fromState);
  };

  return (
    <div className="App">
      <header className="App-header">
        {loginInfo === null && <LoginForm onLogin={handleLogin}/>}
        {loginInfo !== null && (
          <div>
            <div>Ime: {loginInfo.name}</div>
            <div>Email: {loginInfo.email}</div>
          </div>
        )}
        {loginInfo !== null && quizAnswer === null && <Quiz id={id} onSubmit={handleSubmit} />}
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
