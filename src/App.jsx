import React, { useRef, useState } from "react";
import TodoItem from "./todo_item";
import "./App.css";
export default function App() {
  const inputRef = useRef(null);
  const [todoMap, setTodoMap] = useState({});
  const [editedTodo, setEditedTodo] = useState(null);

  function addTodo(event) {
    event.preventDefault();
    const todoVal = inputRef.current.value.trim();
    console.log(todoVal);

    if (todoVal === "") {
      alert("Enter Todo");
      return;
    }

    const todoID = editedTodo !== null ? editedTodo.id : crypto.randomUUID();

    const newTodoMap = {
      ...todoMap,
    };

    newTodoMap[todoID] = {
      id: todoID,
      value: todoVal,
      completed: false,
    };
    console.log(newTodoMap);

    setTodoMap(newTodoMap);

    inputRef.current.value = "";
    console.log(JSON.stringify(newTodoMap));
    setEditedTodo(null);
  }

  function toggleTodo(todo) {
    const newTodoMap = {
      ...todoMap,
    };

    newTodoMap[todo.id] = {
      id: todo.id,
      value: todo.value,
      completed: !todo.completed,
    };
    console.log(newTodoMap);

    setTodoMap(newTodoMap);
  }

  function editTodo(todo) {
    setEditedTodo(todo);
    inputRef.current.value = todo.value;
  }

  function deleteTodo(todo) {
    const newTodoMap = {
      ...todoMap,
    };
    delete newTodoMap[todo.id];
    setTodoMap(newTodoMap);
  }
  return (
    <>
      <h1>Todo App</h1>
      <div className="todo-form">
        <label htmlFor="item"></label>
        <input ref={inputRef} type="text" id="item" />
        <button onClick={addTodo} className="btn">
          {editedTodo ? "Edit Todo" : "Add Todo"}
        </button>
      </div>
      <ul className="header">
        {Object.values(todoMap).map((todo) => (
          <TodoItem
            todo={todo}
            onEdit={() => editTodo(todo)}
            onDelete={() => deleteTodo(todo)}
            onChecked={() => toggleTodo(todo)}
          ></TodoItem>
        ))}
      </ul>
    </>
  );
}
