import { useState } from "react";

export function LoginForm(props) {
    const [state, setState] = useState({});

    const handleChange = (event) => {
        setState({...state, [event.target.name]: [event.target.value]})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onLogin(state);
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                <div>
                    Name: 
                    <input type="text" id="name" name="name" onChange={handleChange}/>
                </div>
                <div>
                    Email: 
                    <input type="text" id="email" name="email" onChange={handleChange}/>
                </div>
                <div>
                    <button type="submit">Sign in</button>
                </div>
            </label>
        </form>
    );
}