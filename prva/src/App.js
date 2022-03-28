import logo from './image.jpg';
import './App.css';

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
      </header>
    </div>
  );
}

export default App;
