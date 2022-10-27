import React, { useState } from "react";

const App = () => {
  const [temp, setTemp] = useState(62);
  const [tempColor, setTempColor] = useState("cold");
  let newTemp = temp;

  const colorSet = () => {
    if (newTemp < 65) {
      setTempColor("cold");
    } else if (newTemp >= 65 && newTemp < 80) {
      setTempColor("warm");
    } else setTempColor("hot");
  };

  const increaseTemp = () => {
    if (temp === 106) {
      return;
    }
    newTemp += 1;
    setTemp(newTemp);
    colorSet(newTemp);
  };

  const decreaseTemp = () => {
    if (temp === -3) {
      return;
    }
    newTemp -= 1;
    setTemp(newTemp);
    colorSet(newTemp);
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>{temp}°F</div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemp}>+</button>
        <button onClick={decreaseTemp}>-</button>
      </div>
    </div>
  );
};

export default App;
