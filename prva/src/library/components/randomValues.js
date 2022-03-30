import { arrayHelpers }  from "../helpers";

export function randomValue() {
    return (
      <div>
        { arrayHelpers.getRandomElement([1, 2, 3]) }
      </div>
    );
  }