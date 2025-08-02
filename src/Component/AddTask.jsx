import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Addtask } from "../Features/taskSclice";


function AddTask() {
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [status,setStatus] = useState("")
    
    const dispatch = useDispatch()


    const handleSubmit=(e) =>{
        e.preventDefault();
        const List={
            id:Date.now(),
            title,
            description,
            status
        };
        dispatch(Addtask(List));


        setTitle('')
        setDescription('')
        setStatus('To Do')

    }

    

    return (
        <div>
            <form className="mb-6" onSubmit={handleSubmit}>
                <h2 className="text-xl font-semibold mb-3 text-indigo-500"> Add New Task </h2>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Task Name"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <textarea
                        placeholder="Task Description"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        rows="3"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <select
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                         value={status}
                        onChange={(e)=>setStatus(e.target.value)}
                    >
                        <option value="To Do">To Do</option>
                        <option value="On Progress">On Progress</option> 
                        <option value="Completed">Completed</option>
                       

                    </select>

                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
                    
                >
                    Add Task
                </button>

            </form>


        </div>
    )
}

export default AddTask;