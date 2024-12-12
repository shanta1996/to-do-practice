import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [time, settime] = useState('')
    useEffect(()=>{
        const updated=setInterval(() => {
            const newDate=new Date()
            settime(newDate.toLocaleTimeString())
        }, 1000);
       return ()=>clearInterval(updated)
    },[])
  return (
    <div>
        <div>{time}</div>
    </div>
  )
}

export default Effect