import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})



    const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
        email:email,
        password:password
    })
   
    setEmail('')
    setPassword('')
    }

  return (
    
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <h4>for already registered user login page</h4>
        <img className='w-25 mb-10' src=".\src\assets\smartridelogo.jpg" alt="logo" />
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <h3 className='text-xl mb-2'>What's your email</h3>
            <input required
            value={email}
            onChange={(e)=> {
                setEmail(e.target.value)
            }}
             className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" placeholder='email@example.com' />
            <h3 className='text-xl mb-2'>Enter Password</h3>
            <input required
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
             className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
            type="password" placeholder='password' />
            <button
             className='bg-black text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'
            >login</button>
        </form>
        <p className='text-center-align'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
        </div>
        <div>
        <Link
            to='/captain-login'
             className='bg-green-400 flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'
            >Sign in as Captain</Link>
        </div>
    </div>
  )
}

export default UserLogin