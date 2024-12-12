import React, { useState } from 'react'

const Shortcircuits = () => {
    const [loggin, setLoggin] = useState(true)
    const [setUser, setSetUser] = useState('')
    return (
        <>
            <div className='mt-6 flex gap-10'>
                {/* <p>{loggin?'you are logged in':'logged out'}</p> */}
                {loggin && <p>you are logged in</p>}
                <p>{setUser ? `hello ${setUser}` : 'must have to logged in'}</p>
            </div>
            <div className='flex gap-10 mt-3'>
                <button onClick={() => setLoggin(!loggin)} className='border-2 border-black p-2'>toggle login</button>
                <button onClick={() => setSetUser('shanta chaudhary')} className='border-2 border-black p-2'>set user</button>
                <button onClick={() => setSetUser("")} className='border-2 border-black p-2'>clear user</button>
            </div>

        </>
    )
}

export default Shortcircuits