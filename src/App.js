import "./App.scss";
import IdleTimer from "react-idle-timer";
import { useState, useEffect } from "react";

// Custom components:
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInputValue, setTodoInputValue] = useState("");

  useEffect(() => {
    const storedTodoList = localStorage.getItem("TodoList");
    if (storedTodoList === null) return;
    setTodoList(JSON.parse(storedTodoList));
  }, []);

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(todoList));
  }, [todoList]);

  const changeTodoInputHandler = (e) => {
    setTodoInputValue(e.target.value);
  };

  const changeTodoStatusHandler = (todoId, status) => {
    let updateTodoList = [...todoList];
    updateTodoList = updateTodoList.map((todo) => {
      if (todo.id === todoId) {
        todo.status = status;
      }
      return todo;
    });
    setTodoList(updateTodoList);
  };

  const changeTodoTitleHandler = (todoId, title) => {
    let updateTodoList = [...todoList];
    updateTodoList = updateTodoList.map((todo) => {
      if (todo.id === todoId) {
        todo.title = title;
      }
      return todo;
    });
    setTodoList(updateTodoList);
  };

  const deleteTodoItemHandler = (todoId) => {
    const updateTodoList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(updateTodoList);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (todoInputValue.trim() === "") return;

    setTodoList((prevState) => {
      return [
        {
          id: Math.random().toString(),
          title: todoInputValue,
          status: "new",
        },
        ...prevState,
      ];
    });

    setTodoInputValue("");
  };

  return (
    <div className="app">
      <Header />
      <form className="form" onSubmit={submitFormHandler}>
        <input
          type="text"
          className="form__input"
          value={todoInputValue}
          onChange={changeTodoInputHandler}
          placeholder="Type any tasks at here..."
        />
        <button
          type="submit"
          onClick={submitFormHandler}
          className="btn btn--submit"
        >
          Submit
        </button>
      </form>
      <TodoList
        todoList={todoList}
        onChangeTodoStatus={changeTodoStatusHandler}
        onDeleteTodoItem={deleteTodoItemHandler}
        onChangeTodoTitle={changeTodoTitleHandler}
      />
    </div>
  );
}

export default App;
