import React, { useState } from 'react'

const Counter = () => {
    const [number, seNnumber] = useState(0)
    const [stepup, setStepup] = useState(0)

    return (
        <>
            <p>{number}</p>
            <input className='border-2 p-2' type="number" onChange={(e) => setStepup(Number(e.target.value))} value={stepup} />

            <button onClick={() => seNnumber(number + stepup)} disabled={number >= 100} className='border-2 p-2'>click</button>



            <button onClick={() => seNnumber(number - stepup)} disabled={number <= 0} className='border-2 p-2'>click to decrease</button>
            <button onClick={() => seNnumber(0)} className='border-2 p-2'>reset</button>


        </>
    )
}

export default Counter