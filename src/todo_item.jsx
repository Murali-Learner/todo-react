import React from "react";
import "./App.css";
export default function TodoItem({ todo, onEdit, onDelete, onChecked }) {
  return (
    <ul className="list">
      <li key={todo.id}>
        <label>
          <input className="check" type="checkbox" onChange={onChecked} />
          {todo.value}
        </label>
        <button className="btn delete-btn" onClick={onDelete}>
          Delete
        </button>
        <button className="btn edit-btn" onClick={onEdit}>
          Edit
        </button>
      </li>
    </ul>
  );
}
