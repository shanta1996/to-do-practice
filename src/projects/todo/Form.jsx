import React, { useState } from 'react'

const Form = ({ handle }) => {
    const handleInput = (value) => {
        setAddInput({id:value,content:value,checked:false})
    }

    const [addInput, setAddInput] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()
        handle(addInput)
        setAddInput({id:'',content:'',checked:''})
    }
   
    // console.log(addTask)
 
    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
                <div className='flex gap-[10px]'>
                    <input className='border-[1px] border-black rounded-md p-2' type="text" name="" id="" placeholder='Enter your task here' onChange={(e) => handleInput(e.target.value)} value={addInput.content} />
                    <button className='border-2 p-2 rounded-md border-black' type='submit'>Add Task</button>
              
                </div>
            </form>
        </>
    )
}

export default Form