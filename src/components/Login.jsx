import React, { useState } from 'react'

const Login = () => {
    const [fullname, setFullname] = useState('')
    const [password, setPassword] = useState('')
 
    const handleSubmit=(e)=>{
        e.preventDefault()
   const sendData={
    fullname,
    password
   }
      console.log(sendData)
    }
  return (
    <>
     <div className='mt-16'>
        <h1>Login</h1>
            <p>{fullname}  {password}</p>
                <form onSubmit={handleSubmit} className='w-[300px]'>
                    <div className=' mb-4'>
                        <input className='w-full  border-[1px] border-black' type="text" name="fullname" id="fullname" placeholder='Enter Your Name' onChange={(e)=>setFullname(e.target.value)} value={fullname} />
                    </div>
                 

                    <div className='  mt-3'>
                        <input className='w-full  border-[1px] border-black' type="password" name="password" id="password" placeholder='Enter Your password' autoComplete='off' onChange={(e)=>setPassword(e.target.value)} value={password} />
                    </div>
                    <button type='submit' className='p-2 mt-5  border-[1px] border-black'>Submit</button>
                </form>
            </div>
    </>
  )
}

export default Login