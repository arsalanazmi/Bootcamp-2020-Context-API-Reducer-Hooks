import React from "react";
import Context from "./Context";
import Reducer from "./Reducer";

const Parent = () => {
  return (
    <div>
      <Context />
      <br/>
      <Reducer />
    </div>
  );
};
export default Parent;
