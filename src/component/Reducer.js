import React, { useReducer } from "react";
import counterReducer from "../context/counterReducer";

const Reducer = () => {
  const [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1>Counter by using useReducer</h1>
      <h3>Counter Value : {state}</h3>
      
      <button className="btn btn-dark" onClick={() => dispatch("INCREMENT")}>
        Incremet Redecuer
      </button>
      {" "}
      <button className="btn btn-dark" onClick={() => dispatch("DECREMENT")}>
        Decrement Redecuer
      </button>
    </div>
  );
};
export default Reducer;
