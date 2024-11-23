import React from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const AccountRecovery = () => {
  return (
    <div className='relative w-full h-screen flex items-center justify-start flex-col gap-4 p-3 bg-primary'>
      <div className=' absolute top-0  w-full flex items-center justify-between p-3'>
        <Link className='text-active text-lg ' to={"/fullLogin"}> <FaAngleLeft /> </Link>
        <Link className='text-active text-[16px] ' to={"/signup"}>
          Register
        </Link>
      </div>

      <div className='w-full flex items-center justify-center'>
        <div className='w-full flex items-center justify-center flex-col gap-2 pt-[50px]  '>
          <div className='w-full flex items-center justify-center flex-col gap-2 '>
            <h1 className='text-4xl font-bold'> Account Recovery </h1>
            <p className='text-[16px] font-semibold text-center'> To recover your account please provide your email or username to find your account.</p>
          </div>
          <div className=' w-full sm:w-[65%] rounded-xl shadow-md flex items-center justify-center flex-col gap-3 p-4 pb-7 bg-secondary'>
            <div className='w-full flex items-start justify-center flex-col gap-1'>
              <label className='text-[13px] font-semibold ' htmlFor="username"> Email or Username </label>
              <input required className='w-full text-[15px] font-semibold border-b-2 pb-2 border-indigo-500 focus:border-b-2 focus:border-active outline-none' type="text" name="" id="username" />
            </div>
            <button className=' mt-5 w-full bg-active py-2 text-[16px] rounded-lg text-secondary font-semibold ' type="submit">Login</button>
            <div className='w-full flex items-start justify-start'>
              <Link className='text-active text-[16px] ' to={"/fullLogin"}> Back to login </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountRecovery