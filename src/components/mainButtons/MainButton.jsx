import React from "react";
import "./MainButton.scss";

const MainButtons = ({ text, children, handleClick }) => {
  return (
    <button className="wrapperButton" onClick={handleClick}>
      <div className="children">{children}</div>
      <h4 className="buttonsText">{text}</h4>
    </button>
  );
};

export default MainButtons;
