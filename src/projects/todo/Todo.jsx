import React, { useState } from 'react'

import Form from './Form';
import Task from './Task';
import TimeDate from './TimeDate';

const Todo = () => {
    const [addTask, setAddTask] = useState([])

    const handleSubmit = (addInput) => {
        if (!addInput) return
        if (addTask.includes(addInput)) return
        setAddTask((prevTask) => [...prevTask, addInput])
        console.log(addInput);
    }




    const handleDelete = (e) => {
        console.log(addTask)
        console.log(e)
        const deleted = addTask.filter((elem) => elem != e)
        setAddTask(deleted)
    }

    const handleDeleteAll = () => {
        setAddTask([])
    }
// const upperCase=()=>{
//     const upper=addTask. toUpperCase()
//     setAddTask(upper)
// }
    return (
        <>
            <div className='border-[1px] border-black min-h-[50vh] w-[30vw] flex flex-col items-center justify-center rounded-md mx-auto'>
                <div className=''>
                    <h1 className='text-3xl'>TO-DO-LIST</h1>
                    <TimeDate/>
                </div>
                <div className='mt-10 '>
                    <Form handle={handleSubmit} />

                    <div className='w-full mt-7'>{addTask.map((task, index) => {
                        return (
                            <Task key={index} data={task} handledelete={handleDelete} />
                        )
                    })}
                    </div>
                </div>
                <button onClick={handleDeleteAll} className='border-2 mt-5 p-2 rounded-md border-red-600 text-red-600 ' type='submit'>Clear All</button>
            </div>
        </>
    )
}

export default Todo