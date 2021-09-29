import React from "react";
import "./header.scss";
function Header() {
  return (
    <div className="header">
      <div className="header__icon">
        <img
          src="https://img.icons8.com/color/48/000000/todo-list--v2.gif"
          alt="GIF"
          className="header__gif"
        />
      </div>
      <h3>What's the plan for today?</h3>
    </div>
  );
}

export default Header;
