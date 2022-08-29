import React, { useState } from 'react'
import { todoPriorityEnum } from '../../models/todoPriorityEnum'
import './ToDoForm.css'
import generateTaskId from '../../utils/generateTaskId'

export default function ToDoForm({data, onSubmit, onCancel}) {
  const initTaskData = [{
    id: '',
    title: '',
    text: '',
    priority: todoPriorityEnum.None
  }];
  const [formData , setFormData] = useState(data || initTaskData )

  const handleInputChange= (e) => {
    const newFormData = {...formData, [e.target.name]: e.target.value};
    setFormData(newFormData)
  }

  const handlePriorityChange = (priorityValue) => {
    setFormData({
      ...formData,
      priority: priorityValue,
    });
  }

  const handleFormSubmit = (e) => {
    e.stopPropagation();
    if (typeof onSubmit === "function") {
      // generate unique id for new task
      const taskData = {
        ...formData,
        id:generateTaskId()
      };
      onSubmit({ ...taskData });
    }
  };


  return (
    <div className='todo-form-container'>
      <div className="todo-form">
        <div className='form-line'>
            <label htmlFor="title">Title</label>
            <input 
            onChange={(e) => handleInputChange(e)}
            type="text" 
            name="title" 
            id="title-inp" 
            value={formData.title}
            placeholder='Please enter task title' />
        </div>
        <div className='form-line'>
          <label htmlFor="task">Text</label>
          <textarea 
          onChange={(e) => handleInputChange(e)}
          name="text" 
          id="text-inp"
          type="text" 
          value={formData.text}
          cols="30" 
          rows="10" 
          placeholder='Please enter task here'></textarea>
        </div>
        <div className="form-line">
            <h3 className="priority-line">Priority</h3>
            <button className={formData.priority === todoPriorityEnum.High? "secondary-btn":''}
            onClick={() => handlePriorityChange(todoPriorityEnum.High)}
            >High</button>
            <button className={formData.priority === todoPriorityEnum.Medium? "secondary-btn":''}
            onClick={() => handlePriorityChange(todoPriorityEnum.Medium)}
            >Medium</button>
            <button className={formData.priority === todoPriorityEnum.Low? "secondary-btn":''}
            onClick={() => handlePriorityChange(todoPriorityEnum.Low)}
            >Low</button>
        </div>
        <div className='primary-btn-position'>
          <button type="button" className='priority-btn' onClick={(e) => handleFormSubmit(e)}>Create</button>
          <button type="button" className='priority-btn' onClick={() => onCancel()}>Cancel</button>
        </div>
        </div>
    </div>
  )
}
