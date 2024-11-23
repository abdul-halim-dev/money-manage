import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FaGift, FaRightToBracket } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
   return (

      <footer className=" bg-[#fcfcfc] fixed bottom-0 w-full h-[67px] py-2 px-6 flex items-center justify-between shadow-2xl rounded-tl-3xl rounded-tr-3xl z-50 ">
         <Link className=" flex items-center justify-center flex-col gap-1 " to={"/"}>
            <FaHome className=' text-xl sm:text-3xl text-[#808085] ' />
            <span className="text-[#01cfff] text-[12px] "> হোম  </span>
         </Link>
         <Link className=" flex items-center justify-center flex-col gap-1 " to={"/taskList"}>
            <FaGift className=' text-xl sm:text-3xl text-[#808085] ' />
            <span className="text-[#01cfff] text-[12px] "> প্যাকেজ   </span>
         </Link>
         <Link className=" flex items-center justify-center   " to={"/membershipPlan"}>
            <img className=" bg-[#ffffff] rounded-lg shadow-xl p-1 absolute -top-[18px] w-[45px] h-[45px] object-cover" src="https://i.ibb.co.com/bgXfFMY/membership.png" alt="" />
         </Link>
         <Link className=" flex items-center justify-center flex-col gap-1 " to={"/login"}>
            <FaRightToBracket className=' text-xl sm:text-3xl text-[#808085] ' />
            <span className="text-[#01cfff] text-[12px]  ">  লগইন  </span>
         </Link>

         <Link to={"/dashbord"}>
            <img className=" w-[35px] h-[35px] bg-[#808086] rounded-full shadow-lg object-cover" src="https://i.ibb.co.com/MfTBS0g/dummy-profile.png" alt="" />
            <span className="text-[#01cfff] text-[12px]  "> প্রোফাইল   </span>
         </Link>
      </footer>
   )
}

export default Footer