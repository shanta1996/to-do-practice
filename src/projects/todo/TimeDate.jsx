import React, {useEffect, useState } from 'react'

const TimeDate = () => {
    const [datetime, setdatetime] = useState('')


    useEffect(() => {
        const timeout = setInterval(() => {
            const newdate = new Date()
            const formatteddate = newdate.toLocaleDateString()
            const formattedtime = newdate.toLocaleTimeString()
            setdatetime(`${formatteddate} ${formattedtime}`)
        }, 1000);
        return () => clearInterval(timeout)

    }, [])
  return (
    <>
    <h2 className='text-md '>{datetime}</h2>
    </>
  )
}

export default TimeDate