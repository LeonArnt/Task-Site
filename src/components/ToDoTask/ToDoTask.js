import React from "react";
import { todoPriorityName } from "../../models/todoPriorityEnum";
import "./ToDoTask.css";

export default function  ToDoTask({ task, onEditClick }) {
  const priorityName = todoPriorityName[task?.priority];
  return (
    <div className="todo-task">
      <div className="todo-task__content">
        <div className="todo-task__title">{task?.title}</div>
        <div className="todo-task__text">{task?.text}</div>
        <div className="todo-task__priority">
          <div className={`priority__${priorityName?.toLowerCase()}`}>
            {priorityName}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="todo-task__edit-btn"
        onClick={() => onEditClick(task.id)}
      >
        Edit
      </button>
    </div>
  );
}
