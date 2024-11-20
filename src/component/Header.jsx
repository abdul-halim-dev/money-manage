import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className=" z-50 bg-active sticky top-0 py-4 px-8 w-full h-[55px] flex items-center justify-between text-secondary ">
    
      <Link className='px-3 bg-secondary text-black text-lg font-bold  py-1 shadow-md rounded-lg' to={"/"}>
           ABLAB
        </Link>

      <Link to={"/dashbord"}>
          <img className=" w-[35px] h-[35px] bg-secondary rounded-full shadow-lg object-cover" src="https://i.ibb.co.com/MfTBS0g/dummy-profile.png" alt="" />
        </Link>


      </header>

  )
}

export default Header