import "./App.css";
import { idHelpers } from "./library/helpers";
import { Quiz } from "./library/components/Quiz";
import { useContext, useState } from "react";
import { LoginForm } from "./library/components/LoginForm";
import { AppContext } from "./library/contexts/AppContext";
import { Title } from "./library/components/Title";

function App() {
  const appState = useContext(AppContext);
  console.log(appState);
  const [quizAnswer, setQuizAnswer] = useState(null);

  const handleSubmit = (answers, id) => {
    setQuizAnswer({ answers, id });
  };

  const [loginInfo, setLoginInfo] = useState(null);
  const handleLogin = (fromState) => {
    setLoginInfo(fromState);
  };

  const [sec, setSec] = useState(0);
  const goUp = () => {
    setSec((sec) => sec+1);
  }

  let answerComponents = null;
  
  if (quizAnswer !== null) {
    answerComponents = Object.keys(quizAnswer.answers).map((key) => {
    return (
      <div key={key}> {key} : {quizAnswer.answers[key]}</div>
    );
    })};

  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <button onClick={()=>{appState.setState("1")}}>Click me</button>

        <button onClick={()=>{appState.setLocale("HR")}}>HR</button>
        <button onClick={()=>{appState.setLocale("EN")}}>EN</button>
        <button onClick={()=>{appState.setLocale("DE")}}>DE</button>

        {loginInfo === null && <LoginForm onLogin={handleLogin}/>}
        {loginInfo !== null && (
          <div>
            <div>Ime: {loginInfo.name}</div>
            <div>Email: {loginInfo.email}</div>
            <div>Time: {sec} s</div>
          </div>
        )}
        {loginInfo !== null && quizAnswer === null && <Quiz onSubmit={handleSubmit} timeUp={goUp}/>}
        {quizAnswer !== null && (
          <div>
            {answerComponents}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
