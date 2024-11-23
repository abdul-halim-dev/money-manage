import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Deposit = () => {
    return (
        <div className='w-full flex items-center justify-center flex-col gap-0 '>
            <Header />
            <div className='w-full flex items-start justify-center  '>
                <div className=' w-full flex items-center justify-center flex-col gap-5 '>
                    <div className='w-full flex items-center justify-between bg-primary p-3'>
                        <div className='flex items-start justify-center flex-col gap-1 '>
                            <h1 className='text-xl font-bold'> Deposit Methods </h1>
                            <p className='text-[12px] font-semibold'> You can Deposit here</p>
                            <p className='text-[12px] font-semibold' > for Purchasing a Plan.</p>
                        </div>
                        <div className='w-[100px] h-[100px] '>
                            <img className='w-full h-full object-contain shadow-lg' src="https://i.ibb.co.com/1dPq3Pj/payment-card.jpg" alt="" />
                        </div>
                    </div>
                    <div className=' w-full px-6 sm:w-[50%] '>
                        <div className=' w-full  bg-primary p-3 shadow-md rounded-lg flex items-center justify-center flex-col gap-3'>

                            <div className='w-full flex items-start justify-center flex-col gap-1' >
                                <label className='text-sm font-bold' htmlFor="method"> Select Gateway </label>
                                <select required title='Please select an item in the list' className=' text-[18px] font-semibold w-full bg-secondary shadow-md px-2 py-2 rounded-lg focus:ring-2 ring-offset-1 ring-active ' name="method" id="method">
                                    <option value="gateway">Select Gateway  </option>
                                    <option value="nagad"> Nagad </option>
                                    <option value="bkash"> BKash </option>
                                </select>
                            </div>
                            <div className='w-full flex items-start justify-center flex-col gap-1' >
                                <label className='text-sm font-bold' htmlFor="amount"> Amount </label>
                                <div className='w-full flex items-center justify-center gap-1'>

                                    <input className='pb-2 w-full border-b-2 border-indigo-400 focus:border-b-2 text-[16px] font-semibold  focus:border-active outline-none bg-transparent' title='Please enter a number' required type="number" name="amount" id="amount" />
                                    <span className='pb-1 text-lg font-semibold border-b-2 border-active '> BDT </span>
                                </div>
                            </div>
                            <button className='w-full bg-active py-[5px] rounded-xl shadow-lg text-secondary font-semibold text-lg'> Submit </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Deposit