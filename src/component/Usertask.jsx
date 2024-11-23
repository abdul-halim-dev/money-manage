import React from 'react'

import { FaArrowDown, FaArrowUp, FaUser } from 'react-icons/fa6'
import CountdownTimer from './CountdownTimer'
import { Link } from 'react-router-dom'

const Usertask = () => {




  return (
    <div className='w-[95%] sm:w-[90%]  flex items-center justify-center  flex-col gap-4 '>

      <div className='w-full shadow-lg py-2 flex items-center justify-around  bg-secondary rounded-xl'>

        <div className='flex items-center justify-center flex-col gap-1'>
          <Link to={"/deposit"} className=' w-[50px] h-[50px] bg-active shadow-md flex items-center justify-center rounded-xl'>
            <FaArrowUp className='text-xl  text-secondary ' />
          </Link>
          <span>Deposit </span>
        </div>
        <div className='flex items-center justify-center flex-col gap-1'>
          <Link to={"/myteam"} className=' w-[50px] h-[50px] bg-active shadow-md flex items-center justify-center rounded-xl'>
            <FaUser className='text-xl  text-secondary ' />
          </Link>
          <span>Invite </span>
        </div>
        <div className='flex items-center justify-center flex-col gap-1'>
          <Link to={"/withdraw"} className=' w-[50px] h-[50px] bg-active shadow-md flex items-center justify-center rounded-xl'>
            <FaArrowDown className='text-xl  text-secondary ' />
          </Link>
          <span>Withdraw </span>
        </div>
      </div>
      <div className='w-full flex items-center justify-between gap-4'>

        <div className='w-[50%] bg-secondary shadow-lg rounded-xl p-3 flex items-start justify-center flex-col gap-1 '>
          <span className='text-lg  font-medium '> Complete </span>
          <h3 className=' text-xl font-bold '> 0 Task </h3>
        </div>
        <div className='w-[50%] bg-secondary shadow-lg rounded-xl p-3 flex items-start justify-center flex-col gap-1 '>
          <span className='text-lg  font-medium '> Complete </span>
          <h3 className=' text-xl font-bold '> 0 Task </h3>
        </div>
      </div>
      <div className='w-full flex items-start justify-start p-3 gap-3 bg-secondary  rounded-xl shadow-xl'>
        <div className='w-[50px] h-[50px] '>
          <img className='w-full h-full object-cover' src="https://i.ibb.co.com/tcqbVPf/pending.png" alt="" />
        </div>
        <div className='flex items-start justify-center flex-col gap-1'>
          <span>Next Reminder </span>
          <div className='text-2xl font-bold '>
            <CountdownTimer duration={2 * 24 * 60 * 60 * 1000} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Usertask