import { Link } from "react-router-dom";

export function HomePage() {
    return (
      <div>
        <h1>Po izboru</h1>
        <Link to="/help">Help page</Link>
        <br></br>
        <Link to="/help/jabuke">Help page for jabuke</Link>
        <br></br>
        <Link to="/help/visnje">Help page for višnje</Link>
        <br></br>
        <Link to="/help/kruske">Help page for kruške</Link>
      </div>
    );
  }