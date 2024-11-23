import React from 'react'
import { FaBangladeshiTakaSign, FaBitbucket } from 'react-icons/fa6'

const Profileinfo = () => {
    return (
        <div className='w-[95%] sm:w-[90%] shadow-lg bg-secondary/70 flex items-center justify-center p-5  flex-col gap-4 rounded-lg '>
           
           
            <div className='w-full   flex items-center justify-between  '>
                <div className=' flex items-center justify-center flex-col'>
                    <div className='w-[80px] h-[80px] rounded-full bg-active p-2 flex items-center justify-center'>
                        <img className='w-full h-full object-contain rounded-full'  src="https://i.ibb.co.com/MfTBS0g/dummy-profile.png" alt="" />

                    </div>
                    <span className='text-black text-[12px] font-semibold '> Jaber Ali</span>
                </div>
                <div className=' flex items-center justify-center flex-col gap-3 '>
                    <div className=' bg-primary flex items-center justify-center gap-2 rounded-full pr-2' >

                        <span className='rounded-full bg-active text-secondary  p-1'> <FaBitbucket /> </span>
                        <span className='  text-black text-sm font-semibold '> No Plan</span>
                    </div>

                    <div className=' flex items-center justify-center flex-col gap-0 '>
                        <h4 className='text-black text-sm font-semibold  '> My Balance </h4>
                        <h3 className='text-black text-lg font-semibold flex items-center justify-center gap-1 '>  <FaBangladeshiTakaSign />  30.00</h3>
                    </div>
                </div>
            </div>
            <div className=' w-full flex items-center justify-between  py-3 border-t-2 border-active'>
                <div className='w-[50%]   flex items-center justify-center  flex-col gap-2 '>
                     <span className='text-lg font-semibold '> 0.00 BDT </span>
                    <span className='text-sm font-semibold'> Total Deposit </span>
                </div>
                <div className='w-[50%]  relative  flex items-center justify-center flex-col gap-2 '>
                <span className='text-lg font-semibold '> 0.00 BDT </span>
                    <span className='text-sm font-semibold'> Total Withdraw </span>    
                    <span className='absolute top-0 left-0 w-[3px] h-full bg-active'> </span>
                </div>
            </div>
        </div>
    )
}

export default Profileinfo