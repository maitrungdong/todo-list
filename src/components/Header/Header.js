import React from "react";
import classes from "./header.module.scss";
function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.header__icon}>
        <img
          src="https://img.icons8.com/color/48/000000/todo-list--v2.gif"
          alt="GIF"
          className={classes.header__gif}
        />
        <h3>What's the plan for today?</h3>
      </div>
    </div>
  );
}

export default Header;
