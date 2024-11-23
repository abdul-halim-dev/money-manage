import React from 'react'
import { FaBangladeshiTakaSign } from 'react-icons/fa6'

const PurchesMembership = () => {
    return (
        <div className='w-full h-screen items-center justify-center flex bg-primary p-3'>

            <div className=' w-full sm:w-[50%] flex items-center justify-center flex-col gap-3 py-3 shadow-lg rounded-lg bg-secondary'>
                <div className=' w-full flex items-start justify-start border-b-2 border-active p-3 '>
                    <span className='text-[16px] font-semibold '>Confirmation to purches VIP 2 daily 80tk</span>
                </div>
                <div className='w-full flex items-center justify-center flex-col gap-2'>
                    <h4 className='text-sm font-semibold'>Daily Ads Limit: <span className='text-active'> 2</span></h4>
                    <h4 className='text-[16px] font-semibold'>Referral Level: <span className='text-active'> 1</span></h4>
                    <h4 className='text-[16px] font-semibold'> Plan Validity:   <span className='text-active'> 28 Days </span></h4>
                </div>
                <div className='w-full flex items-start justify-center flex-col gap-1 px-3 '>
                    <label className='text-[16px] font-semibold' htmlFor="select-wallet"> Select Wallet</label>
                    <select className='w-full bg-transparent outline-none border-[1px] focus:bg-primary border-active py-2 px-2 rounded-lg text-lg ' name="select-wallet" id="select-wallet">
                        <option value="one"> Select One </option>
                        <option value="deposit"> Deposit Walltet - <FaBangladeshiTakaSign /> 30.00 </option>
                        <option value="bkash"> BKash </option>
                        <option value="nagad"> Nagad </option>

                    </select>
                </div>
                <div className='w-full flex items-start justify-center flex-col gap-1 px-3 '>
                    <label className='text-[16px] font-semibold' htmlFor="number">  Invest Amount </label>
                    <div className='w-full flex items-center justify-center '>

                        <input className=' w-[85%] sm:w-[90%] bg-transparent outline-none border-[1px] focus:bg-primary border-active h-[40px] px-3 rounded-tl-lg rounded-bl-lg text-lg ' required type="number" name="number" id="number" />
                        <span className='  w-[15%] sm:w-[10%] bg-active h-[40px] flex items-center justify-center text-secondary   '>BDT </span>
                    </div>
                </div>
                <div className='w-full flex items-end justify-end gap-2 px-3 border-t-2 border-active pt-3 '>
                    <button className='bg-black shadow-md text-secondary border-0 px-4 py-1 text-[16px] font-semibold rounded-lg '> No </button>
                    <button className='bg-active shadow-md text-secondary border-0 px-4 py-1 text-[16px] font-semibold rounded-lg '> Yes </button>
                </div>
            </div>

        </div>
    )
}

export default PurchesMembership