import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://unsplash.com/photos/black-traffic-light-on-go-signal-nPMBHpwnWkM)] h-screen pt-5  flex justify-between flex-col w-full bg-red-400 ' >

            <img className='w-25 ml-8' src=".\src\assets\smartridelogo.jpg" alt="logo" />
            <img className='' src="" alt="" />
            <div className='bg-white py-5 px-4'>
                <h2 className='text-2xl font-bold'>Get Started with SMART-Ride</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-2'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start