import { useEffect, useState } from "react";
import { ABCQuestion } from "./ABCQuestion";
import { ABQuestion } from "./ABQuestion";
import { FreeInputQuestion } from "./FreeInputQuestion";

export function Quiz(props) {
  const [state, setState] = useState({});

    useEffect(() => {
        console.log("First mount!");
    }, []); //prazan array triggera sdamo prvi puta

    useEffect(() => {
        console.log("New state!");

        return () => {
            console.log("Old state!");
        }
    }) //ništa triggera uvijek

  const handleAnswer = (id, choiceValue) => {
    setState((currentState) => ({
      ...currentState,
      [id]: choiceValue,
    }));
  };

  const handleSubmit = () => {
    props.onSubmit(state, props.id);
  };

  return (
    <div>
      <FreeInputQuestion id="question3" text="Enter your name" onKeyUp={handleAnswer} />
      <ABQuestion
        id="question1"
        question="Make the right choice"
        buttonA="Blue pill"
        buttonB="Red pill"
        buttonAValue="Blue"
        buttonBValue="Red"
        onChoice={handleAnswer}
      />
      <ABCQuestion
        id="question2"
        question="Make the right choice"
        buttonA="Blue pill"
        buttonB="Red pill"
        buttonC="Pink pill"
        buttonAValue="Blue"
        buttonBValue="Red"
        buttonCValue="Pink"
        onChoice={handleAnswer}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
