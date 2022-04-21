import { Link, useParams } from "react-router-dom";

export function HelpPage() {
    const params = useParams();

    return (
        <div>
        {params.topic ? <h1>Help page for topic {params.topic}</h1> : <h1>Help</h1>} 
        
        <Link to="/">Home page</Link>
        </div>
    );
}