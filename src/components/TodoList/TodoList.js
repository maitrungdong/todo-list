import React from "react";
import "./todos.scss";

import TodoItem from "../TodoItem/TodoItem";

function TodoList(props) {
  const { todoList, onChangeTodoStatus, onChangeTodoTitle, onDeleteTodoItem } =
    props;

  return (
    <div className="todos">
      {todoList && todoList.length > 0 ? (
        <ul className="todos__list">
          {todoList.map((todo) => {
            return (
              <TodoItem
                id={todo.id}
                key={todo.id}
                title={todo.title}
                status={todo.status}
                onChangeTodoStatus={onChangeTodoStatus}
                onChangeTodoTitle={onChangeTodoTitle}
                onDeleteTodoItem={onDeleteTodoItem}
              />
            );
          })}
        </ul>
      ) : (
        <p className="todos__note">
          You have no any new tasks, enter a new task for today now!
        </p>
      )}
    </div>
  );
}

export default TodoList;
