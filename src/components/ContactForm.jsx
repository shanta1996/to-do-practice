import React, { useState } from 'react'

const ContactForm = () => {
    const [user, setuser] = useState({
        fullname: '',
        password: '',
        message: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setuser((items) => ({ ...items, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }

    return (
        <>
            <div className='mt-16'>
                <h1>ContactForm</h1>
                <p>{user.message}</p>
                <form onSubmit={handleSubmit} className='w-[300px]'>
                    <div className=' mb-4'>
                        <input className='w-full  border-[1px] border-black' type="text" name="fullname" placeholder='Enter Your Name' onChange={handleChange} value={user.fullname} />
                    </div>


                    <div className='  mt-3'>
                        <input className='w-full  border-[1px] border-black' type="password" name="password" placeholder='Enter Your password' autoComplete='off' onChange={handleChange} value={user.password} />
                    </div>
                    <div className='  mt-3'>
                        <textarea type="text" name="message" className='w-full  border-[1px] border-black' placeholder=' Your message' onChange={handleChange} value={user.message} ></textarea>
                    </div>
                    <button type='submit' className='p-2 mt-5  border-[1px] border-black'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm