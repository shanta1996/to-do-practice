import React, { useEffect, useState } from 'react'

const EffTo = () => {
    const [number, setNnumber] = useState(0)
    const [limit, setlimit] = useState('')
    useEffect(()=>{
    document.title=`count:${number}`
    },[number])
    useEffect(()=>{
        console.log(limit)
    },[limit])
    return (
        <div>
            <input className='border-2 p-2' type="text" onChange={(e)=>setlimit(e.target.value)} value={limit} />
            <p>{limit}</p>
            <p>{number}</p>
            <button onClick={() => setNnumber(number + 2)} className='border-2 p-2'>click</button>
        </div>
    )
}

export default EffTo