import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

const BalanceTransfer = () => {
  return (
    <div className='w-full   bg-primary h-screen  '>

      <Header />
      <div className='w-full py-2 relative'>
        <Link title='ড্যাশবোর্ড ' className=' absolute top-[6px] sm:top-[15px] left-[10px] sm:left-[30px] bg-[#808085] shadow-md py-2 px-2 rounded-md text-lg text-secondary' to={"/dashbord"}> <FaChevronLeft /> </Link>
      </div>
      <div className='w-full  flex items-center justify-center gap-6 flex-col pb-[100px]'>
        <div className="flex items-center justify-center flex-col gap-2 pt-6" >
          <h2 className="text-4xl font-bold " > Transfer Balance</h2>
          <p className='text-lg font-bold'>Transfer Balance to friends..</p>
        </div>
        <div className=' w-[95%] sm:w-[90%] flex items-center justify-center rounded-xl flex-col gap-6 bg-secondary  p-4'>
          <div className=" w-full flex items-start justify-center flex-col gap-3   " >
            <label className='text-sm font-bold ' htmlFor="name"> Username </label>
            <input className='  focus:border-b-2 focus:border-blue-500 focus:outline-none w-full bg-transparent border-b-2 border-active pb-1' type="text" name="" id="name" />
          </div>

          <div className=" w-full flex items-start justify-center flex-col gap-3   " >
            <label className='text-sm font-bold ' htmlFor="amount"> Amount (Charge: 20 BDT + 2%) </label>
            <div className=' w-full flex items-center justify-center gap-5'>
              <input className=' w-full focus:border-b-2 focus:border-blue-500 focus:outline-none bg-transparent border-b-2 border-active appearance-auto pb-1' type="number" name="" id="amount" />
              <span className='text-lg font-semibold border-b-2 border-active pb-1'> BDT</span>
            </div>
          </div>
          <div className=" w-full flex items-start justify-center flex-col gap-3   " >
            <label className='text-sm font-bold ' htmlFor="text"> Amount Will Cut From Your Account </label>
            <div className=' w-full flex items-center justify-center gap-5'>
              <input className=' w-full focus:border-b-2 focus:border-blue-500 focus:outline-none bg-transparent border-b-2 border-active appearance-auto pb-1' type="text" name="" id="text" />
              <span className='text-lg font-semibold border-b-2 border-active pb-1'> BDT</span>
            </div>
          </div>
          <button className=' transferBTN relative mt-6 w-full bg-active text-secondary text-lg py-1 font-semibold  rounded-xl '> Transfer </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BalanceTransfer