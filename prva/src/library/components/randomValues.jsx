import { arrayHelpers }  from "../helpers";

export function RandomValue() {
        const value =  arrayHelpers.getRandomElement([1, 2, 3]);
        const isOdd = value % 2 === 1;
        const element = isOdd ? <span>is odd</span> : <span>is even</span>;

        return (
          <div>
            {value} {element}
          </div>
        )
  }