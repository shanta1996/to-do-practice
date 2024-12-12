import React, { useState } from 'react'

const Registration = () => {
    const [fullname, setFullname] = useState('')
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const handleChange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'fullname':
                setFullname(value)
                break
            case 'email':
                setemail(value)
                break
            case 'password':
                setPassword(value)
                break

        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formDdata={
            fullname,
            email,
            password
        }
        console.log(formDdata)
        setFullname('')
        setemail('')
        setPassword('')
    }
    return (
        <>
            <div className='mt-16'>
            <p>{fullname} {email} {password}</p>
                <form onSubmit={handleSubmit} className='w-[300px]'>
                    <div className=' mb-4'>
                        <input className='w-full  border-[1px] border-black' type="text" name="fullname" id="fullname" placeholder='Enter Your Name' onChange={handleChange} value={fullname} />
                    </div>
                    <div className=''>
                        <input className='w-full  border-[1px] border-black' type="email" name="email" id="email" placeholder='Enter Your email' autoComplete='off' onChange={handleChange} value={email} />
                    </div>

                    <div className='  mt-3'>
                        <input className='w-full  border-[1px] border-black' type="password" name="password" id="password" placeholder='Enter Your password' autoComplete='off' onChange={handleChange} value={password} />
                    </div>
                    <button type='submit' className='p-2 mt-5  border-[1px] border-black'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Registration