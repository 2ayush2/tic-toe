import React from "react";

function square(props) {
  return (
    <div
      onClick={props.onClick}
      className="square"
      style={{ border: "1px solid", padding: "32px" }}
    >
      <span>{props.value}</span>
    </div>
  );
  console.log(props.value);
}

export default square;
