import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=" bg-[#292211] fixed bottom-0 w-full h-[65px] py-2 px-6 flex items-center justify-between   ">
  <Link className=" flex items-center justify-center flex-col gap-1 " to={"/signup"}>
    <img className=" w-[25px] h-[25px] object-cover" src="./src/assets/icon/home.png" alt="" />
    <span className="text-secondary text-[10px] "> Home </span>
  </Link>
  <Link className=" flex items-center justify-center flex-col gap-1 " to={"/"}>
    <img className=" w-[30px] h-[30px] object-cover" src="./src/assets/icon/task-2.png" alt="" />
    <span className="text-secondary text-[10px] "> Task </span>
  </Link>
  <Link className=" flex items-center justify-center  " to={"/membershipPlan"}>
    <img className=" absolute -top-[18px] w-[55px] sm:w-[65px] h-[55px] sm:h-[65px] object-cover" src="./src/assets/icon/vip.png " alt="" />
  </Link>
  <Link className=" flex items-center justify-center flex-col gap-1 " to={"/"}>
    <img className=" w-[30px] h-[30px] object-cover" src="./src/assets/icon/contact.png " alt="" />
    <span className="text-secondary text-[10px] "> Contact </span>
  </Link>
  <Link className=" flex items-center justify-center flex-col gap-1 " to={"/fullLogin"}>
    <img className=" w-[30px] h-[30px] object-cover" src="./src/assets/icon/login.png " alt="" />
    <span className="text-secondary text-[10px] "> Login </span>
  </Link>
</footer>
  )
}

export default Footer