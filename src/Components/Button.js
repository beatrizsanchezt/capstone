import React from "react";
import "./Button.css"; // import the styles for the button component

function Button(props) {
  return (
    <button className="button" onClick={props.onClick} {...props}>
      {props.text}
    </button>
  );
}

export default Button;
