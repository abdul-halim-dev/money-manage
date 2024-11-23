import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { FaChevronLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Withdraw = () => {
    return (
        <div className='w-full flex items-center justify-center flex-col gap-5 '>
            <Header />
            <div className='w-full flex items-start justify-center  '>
                <div className=' w-full flex items-center justify-center flex-col gap-1 '>
                    <div className='relative w-full flex items-center justify-center gap-2 flex-col'>
                    <Link title='ড্যাশবোর্ড ' className=' absolute top-[0px]   left-[10px] sm:left-[30px] bg-[#808085] shadow-md py-2 px-2 rounded-md text-lg text-secondary' to={"/dashbord"}> <FaChevronLeft/> </Link>

                        <h3 className='text-4xl font-bold '> Withdraw </h3>
                        <p className='text-lg font-semibold'> Choose Gateway to Withdraw..</p>
                    </div>

                    <div className=' w-full px-6 sm:w-[50%] '>
                        <div className=' w-full  bg-primary p-3 shadow-md rounded-lg flex items-center justify-center flex-col gap-3'>

                            <div className='w-full flex items-start justify-center flex-col gap-1' >
                                <label className='text-sm font-bold' htmlFor="method"> Method </label>
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

export default Withdraw