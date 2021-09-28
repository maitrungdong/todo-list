import React from "react";
import classes from "./todo.module.scss";

import TodoItem from "../TodoItem/TodoItem";

function TodoList(props) {
  const { todoList } = props;

  return (
    <ul className={classes["todos-container"]}>
      {todoList.map((todo) => {
        return (
          <TodoItem
            id={todo.id}
            key={todo.id}
            title={todo.title}
            status={todo.status}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
