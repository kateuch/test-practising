import { useState } from "react";

const Greetings = () => {
  const [changedText, setChangedText] = useState(false);
  const onButtonClicked = () => {
    setChangedText(true);
  };
  return (
    <>
      <button onClick={onButtonClicked}>
        {!changedText ? "Show greetings" : "Hide greetings"}
      </button>
      {changedText && (
        <div>
          <h2>Hello World!</h2>
          <p>Good to see you!</p>
        </div>
      )}
    </>
  );
};
export default Greetings;
