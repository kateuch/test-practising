import { useState } from "react";
import Outputs from "./Outputs";

const Greetings = () => {

  const [changedText, setChangedText] = useState(false);
  const onButtonClicked = () => {
    setChangedText(!changedText);
  };
  return (
    <>
      <button onClick={onButtonClicked}>
        {!changedText ? "Show greetings" : "Hide greetings"}
      </button>
      {changedText && (

        <div className='greetings'>

            <h2>Hello World!</h2>
          <p>Good to see you!</p>

        </div>
      )}
    </>
  );
};
export default Greetings;
