import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./conpornents/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceChange, setFaceChange] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickChangeFace = () => {
    setFaceChange(!faceChange);
  };
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceChange || setFaceChange(true);
      } else {
        faceChange && setFaceChange(false);
      }
    }
  }, [num]);
  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMessage color="blue" message="Hou are you?" />
      <ColorfulMessage color="tomato" message="I'm fime." />
      <button onClick={onClickCountUp}>Count Up!</button>
      <br />
      <button onClick={onClickChangeFace}>Tern!</button>
      <p>{num}</p>
      {faceChange && <p>( ✌︎'ω')✌︎</p>}
      {faceChange || <p>✌︎('ω'✌︎ )</p>}
    </>
  );
};

export default App;
