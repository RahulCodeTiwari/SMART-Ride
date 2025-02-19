import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { captain, setCaptain } = React.useContext(CaptainDataContext)

    const navigate = useNavigate()

    const submitHandler =async (e) => {
    e.preventDefault();
    const Captain = {
        email:email,
        password 
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captain)

    if(response.status === 200){
        const data = response.data

        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
    }
   
    setEmail('')
    setPassword('d')
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <h4>for already registered login captain login page</h4>
        <img className='w-25 mb-10' src=".\src\assets\smartlogo2.jpg" alt="logo" />
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
        <p className='text-center-align'>join as driver? <Link to='/captain-signup' className='text-blue-600'>Create new Captain Account</Link></p>
        </div>
        <div>
        <Link
            to='/signup'
             className='bg-orange-400 flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'
            >Sign in as User</Link>
        </div>
    </div>
  )
}

export default CaptainLogin