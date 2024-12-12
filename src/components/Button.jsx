import { useState } from 'react'

const Button = () => {
  const [clickButton, setClickButton] = useState(false)

  return (
    <>
      <div className='flex justify-center h-screen items-center '>
      <button onClick={()=>setClickButton(!clickButton)} className='bg-teal-600 p-4 '>Click to Start</button>
      </div>
    </>
  )
}

export default Button