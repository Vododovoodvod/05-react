import propTypes from "prop-types";

export function ABQuestion (props) {
    return (
        <div>
            <div>{props.question}</div>
            <button onClick={() => props.onChoice(props.buttonAValue)}>{props.buttonA}</button>
            <button onClick={() => props.onChoice(props.buttonBValue)}>{props.buttonB}</button>
        </div>
    );
}

ABQuestion.propTypes = {
    onChoice: propTypes.func.isRequired,
    question: propTypes.string.isRequired,
    buttonA: propTypes.string.isRequired,
    buttonB: propTypes.string.isRequired,
    buttonAValue: propTypes.string.isRequired,
    buttonBValue: propTypes.string.isRequired,
}