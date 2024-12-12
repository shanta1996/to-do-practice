import React, { useState } from 'react'

const RctRegistration = () => {
    const [user, setUser] = useState({
        fullname: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
      const {name,value}=e.target
      setUser((preData)=>({...preData,[name]:value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // const formDdata = {
        //     fullname,
        //     email,
        //     password
        // }
        // console.log(formDdata)
        console.log(user)
    setUser({fullname:'',email:'',password:''})
    }
    return (
        <>
            <div className='mt-16'>
                <p>{user.fullname} {user.email} {user.password}</p>
                <form onSubmit={handleSubmit} className='w-[300px]'>
                    <div className=' mb-4'>
                        <input className='w-full  border-[1px] border-black' type="text" name="fullname" id="fullname" placeholder='Enter Your Name' onChange={handleChange} value={user.fullname} />
                    </div>
                    <div className=''>
                        <input className='w-full  border-[1px] border-black' type="email" name="email" id="email" placeholder='Enter Your email' autoComplete='off' onChange={handleChange} value={user.email} />
                    </div>

                    <div className='  mt-3'>
                        <input className='w-full  border-[1px] border-black' type="password" name="password" id="password" placeholder='Enter Your password' autoComplete='off' onChange={handleChange} value={user.password} />
                    </div>
                    <button type='submit' className='p-2 mt-5  border-[1px] border-black'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default RctRegistration