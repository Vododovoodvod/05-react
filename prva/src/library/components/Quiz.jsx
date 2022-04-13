import { useEffect, useState } from "react";
import { ABCQuestion } from "./ABCQuestion";
import { ABQuestion } from "./ABQuestion";
import { FreeInputQuestion } from "./FreeInputQuestion";

const question = [
  {text: "Enter your name", id: "name"},
  {text: "Enter your age", id: "age"},
  {text: "Enter your favorite food", id: "food"},
  {text: "Enter your band", id: "band"}
];

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
    }); //ništa triggera uvijek

    useEffect(() => {
      const delta = setInterval(() => {
        props.timeUp();
        console.log("a");
      }, 1000);

      return () => {
        clearInterval(delta);
      }
    }, []);

  const handleAnswer = (id, choiceValue) => {
    setState((currentState) => ({
      ...currentState,
      [id]: choiceValue,
    }));
  };

  const handleSubmit = () => {
    props.onSubmit(state, props.id);
  };

  const questionsMap = question.map((question, index) => {
    return(<FreeInputQuestion key={index} id={question.id} text={question.text} onKeyUp={handleAnswer} />)
  }
  );

  return (
    <div>
      {questionsMap}
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
