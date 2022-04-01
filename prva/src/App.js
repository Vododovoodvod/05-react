import logo from './image.jpg';
import './App.css';
import { idHelpers }  from "./library/helpers";
import { RandomValue } from "./library/components/randomValues";
import { RepositoryLink } from "./library/components/repositoryLink";
import { ABQuestion } from './library/components/ABQuestion';


function App() {
  const onChoice = (choiceValue) => {console.log(choiceValue)};
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ja sam Tomislav.
        </p>
        < RepositoryLink />
        <p>{idHelpers.generateID()}</p>
        < RandomValue />
        < ABQuestion 
        question="Make the right choice:"
        buttonA="Blue pill"
        buttonB="Red pill"
        buttonAValue="A"
        buttonBValue="B"
        onChoice={onChoice}/>
      </header>
    </div>
  );
}

export default App;
