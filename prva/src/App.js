import logo from './image.jpg';
import './App.css';
import { idHelpers, arrayHelpers }  from "./library/helpers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ja sam Tomislav.
        </p>
        <a
          className="Vododovoodvod GIT"
          href="https://github.com/Vododovoodvod/05-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vododovoodvod GIT
        </a>
        <p>{idHelpers.generateID()}</p>
        <p>{console.log(arrayHelpers.getRandomElement([1, 2, 3]))}</p>
      </header>
    </div>
  );
}

export default App;
