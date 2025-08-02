import React from "react";
import { useSelector, useDispatch } from "react-redux";

function TaskList() {
    const [dlt,setDlt] = useState(flase)
    const tasks = useSelector((state) =>  state.tasks.tasks)
    const dispatch = useDispatch()
    return (
       {dlt? "":
         <div>
            <h1>Task</h1>
            <ul className="space-y-4">
            <div>
                {tasks.map((task) => (
                    <li key={task.id} className="bg-gray-50 p-4 rounded-md shadow-sm flex justify-between">
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">{task.title}</h3>
                            {task.description && <p className="text-gray-600">{task.description}</p>}
                            <p className='mt-1 text-sm font-semibold'>
                                Status: <span className='italic underline'>{task.status}</span>
                            </p>
                        </div>
                        <div className="flex space-x-2">
                            <button className='px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-red-600'>Edit </button>
                                <button
                                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                                        onClick = {setDlt(true)} 
                                    Delete
                                </button>
                        </div>
                    </li>
                ))}
            </div>
            </ul>

        </div>
       }
    )
}

export default TaskList;