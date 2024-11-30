import React from 'react'
import { Link } from 'react-router-dom'

function One() {
  return (
    <div className=''>
      <div className='flex items-center justify-center mt-10'>
        <h1 className='font-bold text-4xl underline'>HELLO VIEW'S</h1>
      </div>
      <div className='flex items-center justify-center mt-10'>
        <h1 className='font-sans text-5xl underline'>WELCOME TO MY = ARSH HOSTEL BOYS </h1>
      </div>
      <div className='flex items-center justify-center mt-10'>
        <h1 className='font-bold text-3xl underline'>CHOOSE YOUR BUTTON</h1>
      </div>
      <div className='flex items-center justify-around space-x-6 m-8'>
        <div className='border-2 border-black mt-16 w-full bg-slate-500 rounded-full hover:bg-slate-800'>
          <button className='text-3xl p-20 font-bold no-underline'> <Link to="/register"> NEW USER CLICKHERE</Link></button>
        </div>
        
        <div className='border-2 border-black mt-16 w-full h-full  bg-zinc-500  rounded-full flex hover:bg-zinc-800'>
          <button className='text-3xl p-20 font-bold '><Link to= "/login"> OLD USER CLICKHERE </Link></button>
        </div>
      </div>
    </div>
  )
}

export default One