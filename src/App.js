import React, { useState } from "react";
import "./App.css";
import Parent from "./component/Parent";
import counterContext from "./context/counterContext";

function App() {
  const count = useState(0);
  return (
    <div className="app">
      <counterContext.Provider value={count}>
        <Parent />
      </counterContext.Provider>
    </div>
  );
}

export default App;
