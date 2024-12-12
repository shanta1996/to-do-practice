import React, { useEffect, useState } from 'react'

const Subs = () => {
    const [number, setNnumber] = useState(0)
    useEffect(()=>{
const cleanupdata=setInterval(() => {
    setNnumber((prev)=>prev+1)
}, 1000); 
return ()=>clearInterval(cleanupdata)
    },[])
   
  
    return (
        <div>
            
            <p>{number}</p>
            <button className='border-2 p-2'>click</button>
        </div>
    )
}

export default Subs