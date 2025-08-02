import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTask from './Component/AddTask'
import TaskList from './Component/TaskList'



function App() {
  const [count, setCount] = useState(0)
  // const [listArr, setlistArr] = useState([])

  return (
    <>
      <div>
        <div className="min-h-screen bg-gray-100 p-4">
          <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6">
            <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600">
              Task Management App
            </h1>
             <AddTask /> 
             <TaskList />
            
          </div>
        </div>
      </div>

    </>
  )
}

export default App
