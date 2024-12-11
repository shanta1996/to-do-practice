import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Task = ({data,handledelete}) => {
  
    return (
        <>
            <li  className='list-none flex items-center justify-evenly bg-teal-400 w-full mt-7 text-xl rounded-md'>
                <span>{data}</span>
                <button className='cursor-pointer'><FaCheck /></button>
                <button className='cursor-pointer' onClick={() => handledelete(data)} > <MdOutlineDeleteOutline color='red' /></button>
                {/* <button onClick={()=>uppercs(data)}>upper</button> */}

            </li>
        </>
    )
}

export default Task