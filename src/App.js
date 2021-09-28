import classes from "./App.module.scss";
import IdleTimer from "react-idle-timer";
import { useState, useEffect } from "react";

// Custom components:
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";

const TODO_LIST = [
  {
    id: "td1",
    title: "Learn HTML and CSS",
    status: "done",
  },
  {
    id: "td2",
    title: "Learn Javascript ES6",
    status: "new",
  },
  {
    id: "td3",
    title: "Learn ILETS",
    status: "new",
  },
  {
    id: "td4",
    title: "Clean your house",
    status: "done",
  },
  {
    id: "td5",
    title: "Luyện tập thể dục, thể thao",
    status: "new",
  },
];

function App() {
  const [todoList, setTodoList] = useState(TODO_LIST);
  const [todoInputValue, setTodoInputValue] = useState("");

  const changeTodoInputHandler = (e) => {};

  const submitFormHandler = () => {};

  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.form}>
        <input
          type="text"
          className={classes.form__input}
          value={todoInputValue}
          onChange={changeTodoInputHandler}
          placeholder="Type something at here..."
        />
        <button
          type="submit"
          onClick={submitFormHandler}
          className={[classes["btn"], classes["btn--submit"]].join(" ")}
        >
          Submit
        </button>
      </div>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
