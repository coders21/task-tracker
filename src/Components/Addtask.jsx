import React, { useState } from 'react'

function Addtask({onTask}) {

  const [task,setTask]=useState("")
  const [day,setDay]=useState("")
  const [reminder,setReminder]=useState(false)

  const saveData = (e)=>{

    e.preventDefault()
    
    onTask({task,day,reminder})
    setTask("")
    setDay("")
    setReminder(false)
  }

  return (
    <div class="add-form">
      <form onSubmit={saveData}>
        <div className="form-control">
        <label>Task:</label><br/>
        <input className="text-box" type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="John"/>
        </div>
        <div className="form-control">
        <label >Day & Time:</label><br/>
        <input className="text-box" type="text" value={day} onChange={(e) => setDay(e.target.value)} placeholder="Doe"/>
        </div>
         <div className="form-control-1">
          <label for="vehicle1"> Set Reminder</label>
          <input type="checkbox" className="chkbox"  value={reminder} checked={reminder} onChange={(e) => setReminder(e.target.checked)}/>
        </div> 
        <div className="form-control-btn">
        <input type='submit' value='Save Task' className='btn-task' />
        </div>
        </form> 
    </div>
  )
}

export default Addtask;
