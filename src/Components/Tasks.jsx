import React from 'react'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

function Tasks({task,onDelete}) {
  


  return (
    <div class="view-task">
      {task.map((task,index)=>{
          return(
              <div className="show-tasks">
                <div className="inline-select">
                    <h3>{task.task}
                    </h3>
                    <FaTimes
                    style={{ color: 'red', cursor: 'pointer', margin:'15px'}}
                    onClick={() => onDelete(task.id)}
                    />
                </div>
                  <p>{task.day}</p>
              </div>
          )
      })}
    </div>
  )
}

export default Tasks;
