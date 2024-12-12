import React, { useState } from 'react'

import Form from './Form';
import Task from './Task';
import TimeDate from './TimeDate';

const Todo = () => {
    const [addTask, setAddTask] = useState(()=>{
        const rawdata=localStorage.getItem('reactTodo')
        if (!rawdata) return []
        return JSON.parse(rawdata)
    })

    const handleSubmit = (addInput) => {
        const { id, content, checked } = addInput
        // if (!addInput) return
        if (!content) return
        // if (addTask.includes(addInput)) return
        const contentmatch = addTask.find((curent) => curent == content)
        if (contentmatch) return
        // setAddTask((prevTask) => [...prevTask, addInput])
        setAddTask((prevtask) => [...prevtask, { id, content, checked }])
        // console.log(addInput);
    }




    const handleDelete = (e) => {
        // console.log(addTask)
        // console.log(e)
        const deleted = addTask.filter((elem) => elem.content != e)
        setAddTask(deleted)
    }

    const handleDeleteAll = () => {
        setAddTask([])
    }

    const handleChecked = (cont) => {
        const updatetask = cont.map((currtask) => {
            if (currtask.content == cont) {
                return { ...currtask, checked: !currtask.checked }
            }
            else {
                return currtask
            }
        })
        setAddTask(updatetask)
    }

    localStorage.setItem("reactTodo",JSON.stringify(addTask))
    // const upperCase=()=>{
    //     const upper=addTask. toUpperCase()
    //     setAddTask(upper)
    // }
    return (
        <>
            <div className='border-[1px] border-black min-h-[50vh] w-[30vw] flex flex-col items-center justify-center rounded-md mx-auto'>
                <div className=''>
                    <h1 className='text-3xl'>TO-DO-LIST</h1>
                    <TimeDate />
                </div>
                <div className='mt-10 '>
                    <Form handle={handleSubmit} />

                    <div className='w-full mt-7'>{addTask.map((task) => {
                        return (
                            <Task key={task.id} checked={task.checked} data={task.content} handledelete={handleDelete} handlechecked={handleChecked} />
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