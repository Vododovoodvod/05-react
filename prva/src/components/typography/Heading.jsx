import "../../styles/typography/Heading.css";

export function Heading(props) {
    return <h1 className="h1">{props.children}</h1>;
}