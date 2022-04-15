import { useContext} from "react";
import { AppContext } from "../contexts/AppContext";

export function Title() {
    const appState = useContext(AppContext);

    return(
        <div>{appState.locale}</div>
    )
}