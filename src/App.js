import React from "react";

const App = () => {
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className="temperature-display">50°F</div>
      </div>
      <div className="button-container">
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};

export default App;
