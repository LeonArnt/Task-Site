import React from "react";
import ToDoTask from "../ToDoTask/ToDoTask";
import "./ToDoList.css";

export default function ToDoList({ toDoList, onEditClick }) {
  const hasTodoData = !!toDoList?.length;
  return (
    <div className="todo-list">
      {hasTodoData ? (
        toDoList.map((todoTaskItem) => {
          return (
            <ToDoTask
              key={todoTaskItem.id}
              task={todoTaskItem}
              onEditClick={onEditClick}
            />
          );
        })
      ) : (
        <div className="empty-list">
          Todo list is empty please click on the "Add new task" button to add
          new item.
        </div>
      )}
    </div>
  );
}
