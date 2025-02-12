import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})


    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            fullName:{
                firstName:firstName,
                lastName:lastName
            },
            email:email,
            password:password
        })
        console.log(userData);
        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')
        }
    


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <h4> for new captain sign up page</h4>
        <img className='w-25 mb-10' src=".\src\assets\smartlogo2.jpg" alt="logo" />
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <h3 className='text-xl mb-2'>What's your captain's name</h3>
            <div className='flex '>
            <input required
             className='bg-[#eeeeee] mb-8 mr-4 rounded  py-2 border text-lg placeholder:text-base'
            type="text" placeholder='first name'
            value={firstName}
            onChange={(e)=> {
                setFirstName(e.target.value)
            }}
            /> 
            
            <input required
             className='bg-[#eeeeee] mb-8  rounded  py-2 border  text-lg placeholder:text-base'
            type="text" placeholder='lastname'
            value={lastName}
            onChange={(e)=> {
                setLastName(e.target.value)
            }}
            />
            </div>
           
            <h3 className='text-base font-medium mb-2'>What's your captain's email</h3>
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
            >signup</button>
        </form>
        <p className='text-center-align'>Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
        </div>
        <div>
      <p className='text-[10px] leading-tight'>by proceeding, you consent to get calls, <span className='underline'>Google privacy policy</span>whatsapp or SMS messages, including by
        automated means, from SMART_Ride and its affiliates to the number provided
      </p>
        </div>
    </div>
  )
}

export default CaptainSignup