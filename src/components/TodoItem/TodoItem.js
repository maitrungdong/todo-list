import React from "react";
import "./todoItem.scss";

function TodoItem(props) {
  const { title, status } = props;

  return (
    <li className="todo">
      <i
        className="fa fa-check todo__actions todo__actions--agree"
        aria-hidden="true"
      ></i>
      <span className={status === "done" ? "todo__title done" : "todo__title"}>
        {title}
      </span>
      <i
        className="fa fa-times todo__actions todo__actions--cancel"
        aria-hidden="true"
      ></i>
    </li>
  );
}

export default TodoItem;
