import React, { useEffect, useState } from 'react'
import { FaCheck } from "react-icons/fa6";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Todo = () => {
    const [addInput, setAddInput] = useState('')
    const [addTask, setAddTask] = useState([])
    const [datetime, setdatetime] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        if (!addInput) return
        if(addTask.includes(addInput)){
            setAddInput('')
            return
        }
        setAddTask((prevTask)=>[...prevTask,addInput])
        console.log(addInput);
        setAddInput('')
        
    }
    const handleInput=(value)=>{
        setAddInput(value)
    }
    // console.log(addTask)

    useEffect(() => {
      const timeout=setInterval(() => {
        const newdate=new Date()
        const formatteddate=newdate.toLocaleDateString()
        const formattedtime=newdate.toLocaleTimeString()
        setdatetime(`${formatteddate} ${formattedtime}`)
    }, 1000);
    return ()=>clearInterval(timeout)
      
    }, [])
    

    const handleDelete=(e)=>{
        console.log(addTask)
        console.log(e)
     const deleted=addTask.filter((elem)=>elem!=e)
     setAddTask(deleted)
    }
    const handleDeleteAll=()=>{
       setAddTask([])
    }

    

  return (
    <>
    <div className='border-[1px] border-black min-h-[50vh] w-[30vw] flex flex-col items-center justify-center rounded-md'>
        <div className=''>
            <h1 className='text-3xl'>TO-DO-LIST</h1>
            <h2 className='text-md '>{datetime}</h2>
        </div>
        <div className='mt-10 '>
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
                <div>
                    <input className='border-[1px] border-black rounded-md p-2' type="text" name="" id="" placeholder='Enter your task here' onChange={(e)=>handleInput(e.target.value)} value={addInput}/>
                </div>
                <div className='w-full mt-7'>{addTask.map((task,index)=>{
                    return (
                        <li key={index} className='list-none flex items-center justify-evenly bg-teal-400 w-full mt-7 text-xl rounded-md'>
                            <span>{task}</span>
                            <button className='cursor-pointer'><FaCheck /></button>
                            <button className='cursor-pointer' onClick={()=>handleDelete(task)} > <MdOutlineDeleteOutline color='red' /></button>
                            
                          
                        </li>
                    )
                })}</div>
                <div className='mt-10'>
                    <button className='border-2 p-2 rounded-md border-black' type='submit'>Add Task</button>
                    <button onClick={handleDeleteAll} className='border-2 p-2 rounded-md border-red-600 text-red-600 ml-3' type='submit'>Clear All</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Todo