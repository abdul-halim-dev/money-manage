import React from 'react'
import { Link } from 'react-router-dom'
import { FaBangladeshiTakaSign} from 'react-icons/fa6'
 
const Header = () => {
  return (
    <header className=" z-50 bg-active sticky top-0 py-4 px-8 w-full h-[55px] flex items-center justify-between text-secondary ">
      <Link className='px-3 bg-[#dedddd] text-[#373745] text-lg font-bold  py-1 shadow-md rounded-lg' to={"/"}>
           ABLAB
      </Link>
      <Link to={"/deposit"} className="w-[90px] h-[33px] flex items-center justify-center gap-1   px-1 text-lg font-semibold bg-[#dedddd]  border-0 outline-none rounded-xl shadow-lg text-[#373745] "> <FaBangladeshiTakaSign/> 120.00 </Link>
      <Link to={"/dashbord"}>
          <img className=" w-[38px] h-[38px] bg-[#dedddd] rounded-full shadow-lg object-cover" src="https://i.ibb.co.com/MfTBS0g/dummy-profile.png" alt="" />
        </Link>
      </header>
  )
}

export default Header