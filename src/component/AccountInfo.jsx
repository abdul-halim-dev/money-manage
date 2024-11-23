
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa6'

const AccountInfo = () => {
  return (
    <div className='w-full   bg-primary  scroll-mt-[200px]  '>
     <div className='w-full flex items-center justify-center flex-col  '>
     <Header />
      <div className='w-full py-2 relative '>
        <Link title='ড্যাশবোর্ড ' className=' absolute top-[6px] sm:top-[15px] left-[10px] sm:left-[30px] bg-[#808085] shadow-md py-2 px-2 rounded-md text-lg text-secondary' to={"/dashbord"}> <FaChevronLeft/> </Link>
      </div>

     </div>

      <div className='w-full  flex items-center justify-center gap-6 flex-col pb-[100px]'>
        <div className="flex items-center justify-center flex-col gap-2 pt-6" >
          <h2 className=" text-3xl sm:text-4xl font-bold " > Transfer Balance</h2>
          <p className='text-lg font-bold'>Transfer Balance to friends..</p>
        </div>
        <div className=' w-[95%] sm:w-[90%] flex items-center justify-center rounded-xl flex-col gap-4 bg-secondary  p-4'>
          <div className=' w-[170px] h-[170px] '>
            <img className='w-full h-full object-contain' src="https://i.ibb.co.com/MfTBS0g/dummy-profile.png" alt="" />
          </div>

          <div className='w-full flex gap-4 '>
            <div className='w-[50%] flex items-center flex-col gap-3  '>
              <div className=" w-full flex items-start justify-center flex-col gap-0   " >
                <label className='text-sm font-bold ' htmlFor="username"> Username </label>
                <input className=' text-lg  focus:border-b-2 focus:border-blue-500 focus:outline-none w-full bg-transparent border-b-2 border-active pb-1' type="text" name="username" id="username" />
              </div>

              <div className=" w-full flex items-start justify-center flex-col gap-0   " >
                <label className='text-sm font-bold ' htmlFor="naemailme"> E-mail Address </label>
                <input className=' text-lg  focus:border-b-2 focus:border-blue-500 focus:outline-none w-full bg-transparent border-b-2 border-active pb-1' type="email" name="email" id="email" />
              </div>

              <div className=" w-full flex items-start justify-center flex-col gap-0   " >
                <label className='text-sm font-bold ' htmlFor="address"> Address </label>
                <input className=' text-lg  focus:border-b-2 focus:border-blue-500 focus:outline-none w-full bg-transparent border-b-2 border-active pb-1' type="text" name="address" id="address" />
              </div>



            </div>

            <div className='w-[50%] flex items-center flex-col gap-3  '>
              <div className=" w-full flex items-start justify-center flex-col gap-0   " >
                <label className='text-sm font-bold ' htmlFor="lastname"> Lastname </label>
                <input className=' text-lg  focus:border-b-2 focus:border-blue-500 focus:outline-none w-full bg-transparent border-b-2 border-active pb-1' type="text" name="" id="lastname" />
              </div>

              <div className=" w-full flex items-start justify-center flex-col gap-0   " >
                <label className='text-sm font-bold ' htmlFor="phone"> Mobile Number </label>
                <input className=' text-lg  focus:border-b-2 focus:border-blue-500 focus:outline-none w-full bg-transparent border-b-2 border-active pb-1' type="tel" name="phone" id="phone" />
              </div>

              <div className=" w-full flex items-start justify-center flex-col gap-0   " >
                <label className='text-sm font-bold ' htmlFor="state"> State </label>
                <input className=' text-lg  focus:border-b-2 focus:border-blue-500 focus:outline-none w-full bg-transparent border-b-2 border-active pb-1' type="text" name="state" id="state" />
              </div>



            </div>

          </div>
          <div className='w-full flex items-center justify-center flex-col gap-3'>
            <div className=" w-full flex items-start justify-center flex-col gap-0   " >
              <label className='text-sm font-bold ' htmlFor="zipcode"> Zip Code </label>
              <input className=' text-lg  focus:border-b-2 focus:border-blue-500 focus:outline-none w-full bg-transparent border-b-2 border-active pb-1' type="text" name="zipcode" id="zipcode" />
            </div>
            <div className=" w-full flex items-start justify-center flex-col gap-0   " >
              <label className='text-sm font-bold ' htmlFor="city"> City </label>
              <input className=' text-lg  focus:border-b-2 focus:border-blue-500 focus:outline-none w-full bg-transparent border-b-2 border-active pb-1' type="text" name="city" id="city" />
            </div>
            <div className=" w-full flex items-start justify-center flex-col gap-0   " >
              <label className='text-sm font-bold ' htmlFor="country"> Country </label>
              <input className=' text-lg  focus:border-b-2 focus:border-blue-500 focus:outline-none w-full bg-transparent border-b-2 border-active pb-1' type="text" name="country" id="country" />
            </div>
            <button className=' w-full bg-active text-secondary text-lg py-1 font-semibold  rounded-xl '> Transfer </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AccountInfo