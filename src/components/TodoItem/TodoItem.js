import React, { useState } from "react";
import "./todoItem.scss";

function TodoItem(props) {
  const {
    id,
    title,
    status,
    onChangeTodoStatus,
    onChangeTodoTitle,
    onDeleteTodoItem,
  } = props;
  const [titleInputValue, setTitleInputValue] = useState(title);

  const changeTitleInputValueHandler = (e) => {
    const tv = e.target.value;
    setTitleInputValue(tv);
  };

  const submitTitleInputValueHandler = () => {
    if (titleInputValue.trim() === "") return setTitleInputValue(title);
    onChangeTodoTitle(id, titleInputValue);
  };

  return (
    <li className="todo">
      {status !== "done" && (
        <i
          className="fa fa-check todo__actions todo__actions--agree"
          aria-hidden="true"
          onClick={() => onChangeTodoStatus(id, "done")}
        ></i>
      )}
      <input
        type="text"
        className={status === "done" ? "todo__title done" : "todo__title"}
        value={titleInputValue}
        onChange={changeTitleInputValueHandler}
        onBlur={submitTitleInputValueHandler}
        onKeyDown={(e) => {
          if (e.code === "Enter") submitTitleInputValueHandler();
        }}
      />
      <i
        className="fa fa-times todo__actions todo__actions--cancel"
        aria-hidden="true"
        onClick={() => onDeleteTodoItem(id)}
      ></i>
    </li>
  );
}

export default TodoItem;
