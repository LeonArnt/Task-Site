import React, { useState } from "react";
import "./ToDoPage.css";
import ToDoForm from "../../components/ToDoForm/ToDoForm";
import ToDoList from "../../components/ToDoList/ToDoList";

export default function ToDoPage() {
  const [toDoList, setToDoList] = useState([]);
  const [formSubmit, setFormSubmit] = useState(false);
  const [selected, setSelected] = useState ({})

  const handleToDoFormSubmit = (taskData) => {
    let copyList = [...toDoList]
    copyList.push(taskData)
    setToDoList(copyList);
    handleButtonClick()
  };

  const handleButtonClick = () => {
    setFormSubmit(!formSubmit);
  };

  const handleEditButton = (id) => {
    setSelected(toDoList.find(item => item.id === id))
    handleButtonClick()
  }

  return (
    <>
      {formSubmit ? 
        <><ToDoForm
          onCancel={handleButtonClick}
          onSubmit={(taskData) => handleToDoFormSubmit(taskData)}
          data={selected}
        ></ToDoForm>
        </> : <>
        <ToDoList toDoList={toDoList} onEditClick={handleEditButton}/>
          <div className="todo-page">
            <button className="primary-btn" onClick={() => handleButtonClick()}>Add New Task</button>
          </div></>}
    </>
  );
}
