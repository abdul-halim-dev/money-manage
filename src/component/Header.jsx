import React from 'react'
import { Link } from 'react-router-dom'
import {  TbCurrencyTaka } from "react-icons/tb";
import { BiSolidBell } from "react-icons/bi";
 
const Header = () => {
  return (
    <header className="  rounded-bl-3xl rounded-br-3xl z-50 bg-active sticky top-0 py-4 px-4 sm:px-8 w-full gap-1  flex items-center justify-between text-secondary ">
     
     <div className='flex items-center justify-center gap-3'>
     <Link className='  w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]' to={"/dashbord"}>
          <img className=" w-full h-full bg-secondary rounded-full shadow-lg object-cover" src="https://i.ibb.co.com/MfTBS0g/dummy-profile.png" alt="" />
        </Link>
        <div className='flex items-start justify-center flex-col gap-1'>

        <h3 className=' text-lg sm:text-2xl font-medium tracking-[2px] '>  Shamsuzzaman </h3>
        <div className='   flex items-center justify-center relative'>
      
          <span className=' bg-secondary w-[max-content] py-0 px-9 sm:px-11 sm:py-1  text-active rounded-full text-center text-xl sm:text-2xl font-bold'> ৫৪১৫.০০ </span>
       
       <span className='w-[22px] h-[22px] sm:w-[30px] sm:h-[30px] shadow-lg flex items-center justify-center rounded-full bg-active absolute top-[4px] right-[4px]  sm:top-[6px] sm:right-[8px] '> <TbCurrencyTaka className='text-xl '/></span>
       
        </div>

        </div>
     </div>
     
     <span className='  w-[36px] h-[36px] sm:w-[45px] sm:h-[45px] bg-secondary text-active text-2xl rounded-full flex items-center justify-center cursor-pointer'> <BiSolidBell/> </span>
     
      </header>
  )
}

export default Header