import { useState } from 'react'
import Header from './Components/Header'
import AddTask from './Components/Addtask'
import Task from './Components/Tasks'
import './App.css'

function App() {
  const [showtask,setshowtask]=useState(false)
  let [tasks, setTasks] = useState([
    {
      "id": 1,
      "task": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "task": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ])

  const addTask = (task)=>{
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }    
    setTasks([...tasks,newTask])
  
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <>
    <div className="container">
      <Header onAdd={()=>setshowtask(!showtask)} showaddtask={showtask}/>
      {showtask?
      <AddTask onTask={addTask}  />:null}
      {/* {console.log("tasks------",tasks)} */}
      <Task task={tasks} onDelete={deleteTask}/>

    </div>
    </>
  )
}

export default App
