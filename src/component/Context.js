import React, { useContext } from "react";
import counterContext from "../context/counterContext";

const Context = () => {
  const contextValue = useContext(counterContext);

  return (
    <div>
      <h1>Counter by using Context-API</h1>
      <h3>Counter value : {contextValue[0]}</h3>

      <button
        className="btn btn-dark"
        onClick={() => {
          contextValue[1](++contextValue[0]);
        }}
      >
        Increment Context
      </button>
      {" "}
      <button
        className="btn btn-dark"
        onClick={() => {
          contextValue[1](--contextValue[0]);
        }}
      >
        Decrement Context
      </button>
    </div>
  );
};
export default Context;
