import React from 'react'
// import logo from './assets/step2.svg'
import { Link } from 'react-router-dom'

const Room = () => {
  return (
    <div>
        <div className='flex items-center justify-center'>
          <h1 className='text-5xl'>Hello!</h1>
        </div>
        <div className='flex w-2/4  justify-center ml-80 mt-8'>
          <h1 className='flex text-justify text-2xl'>Our hostel is not just a place to stay; it's a nurturing community designed especially for students who find themselves far from their homes. Our mission is to make this new chapter of your life as comfortable and enriching as possible.</h1>
        </div>
        <div className='flex items-center justify-center mt-8'>
          <h1 className='text-5xl underline'>Room booking step</h1>
        </div>
        <div className=' w-2/4  justify-center ml-96 mt-8'>
          <h1 className='text-3xl underline'>Register:-</h1>
          <p>Create an account and login to our Hostel Hub portal</p>
        </div>
        <div className=' w-2/4  justify-center ml-96 mt-8'>
          <h1 className='text-3xl underline'>Choose a room:-         </h1>
          <p>Browse through all our available rooms and pick one that suits you</p>
        </div>
        <div className=' w-2/4  justify-center ml-96 mt-8'>
          <h1 className='text-3xl underline'>Make payment:-          </h1>
          <p>Pay the rent along with a refundable safety deposit fee</p>
        </div>
        <div className=' w-2/4  justify-center ml-96 mt-8'>
          <h1 className='text-3xl underline'>Enjoy your stay:-          </h1>
          <p>Go to your selected branch and our receptionist will guide you to your room</p>
        </div>
        <div className='flex justify-center mt-8'>
          <h1 className='text-4xl'>Click below button to book room </h1>
        </div>
        <div className='flex justify-center mt-7'>
          <button className='text-2xl border-2 border-slate-400 rounded-lg hover:bg-slate-400'> <Link to='/Roombook'>Room Book </Link></button>
        </div>
    </div>
  )
}

export default Room