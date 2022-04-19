import { Quiz } from "./components/Quiz";
import { useContext, useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { AppContext } from "./contexts/AppContext";
import { Title } from "./components/Title";
import { Heading } from "./components/typography/Heading";
import { Button } from "./components/Button";

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
        <Heading element="h1" size="1">Hello world!</Heading>
        <Title/>
        <Button buttonType="primary" onClick={()=>{appState.setState("1")}}>
          Click Me
        </Button>

        <Button buttonType="primary" onClick={()=>{appState.setLocale("HR")}}>
          HR
        </Button>
        <Button buttonType="secondary" onClick={()=>{appState.setLocale("EN")}}>
          EN
        </Button>
        <Button buttonType="ghost" onClick={()=>{appState.setLocale("DE")}}>
          DE
        </Button>

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
