import logo from './image.jpg';
import './App.css';
import { idHelpers }  from "./library/helpers";
import { randomValue } from "./library/components/randomValues";
import { RepositoryLink } from "./library/components/repositoryLink";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ja sam Tomislav.
        </p>
        < RepositoryLink />
        <p>{idHelpers.generateID()}</p>
        < randomValue />
      </header>
    </div>
  );
}

export default App;
