import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { FaChevronLeft, FaFilter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Commission = () => {
    return (
        <div className='w-full   bg-primary h-screen  '>
            <Header />
            <div className=" relative flex items-center justify-center py-3 bg-secondary shadow-md  " >
                <Link title='ড্যাশবোর্ড ' className=' absolute top-[20%] left-[15px] sm:left-[30px] bg-[#808085] shadow-md py-2 px-2 rounded-md text-lg text-secondary' to={"/dashbord"}> <FaChevronLeft/> </Link>
                <p className='text-lg font-bold'> Commissions </p>
            </div>
            <div className='w-full  flex items-center justify-center gap-2 flex-col pt-[40px]'>
                <div className=' w-[95%] sm:w-[90%]  flex items-end justify-end'>
                    <button className=' flex items-center justify-center w-[80px] py-1 shadow-lg rounded-lg text-sm font-semibold bg-active text-secondary'> <FaFilter /> Filter </button>
                </div>
                <div className='w-full flex items-center justify-center flex-col gap-6'>
                    <div className=' w-[95%] sm:w-[90%] shadow-lg flex items-center justify-center rounded-xl flex-col   bg-secondary  p-4'>
                        <div className=" w-full flex items-center justify-center gap-3 md:flex-row flex-col  " >
                            <div className='w-full md:w-[50%] flex md:flex-row flex-col items-center justify-center gap-4 '>
                                <div className='w-full  md:w-[50%] flex items-start justify-center flex-col gap-0'>
                                    <span className='text-lg text-active'> TRX/Username </span>
                                    <input className='bg-primary focus:outline-none border-none w-full rounded-md text-lg font-medium py-1 pl-3 ' type="text" name="text" id="text" />
                                </div>
                                <div className=' w-full md:w-[50%] flex items-start justify-center flex-col gap-0'>
                                    <span className='text-lg text-active'> Remark </span>
                                    <select className='bg-primary focus:outline-none border-[1px] border-gray-500 w-full rounded-md text-lg font-medium px-3 focus:ring-4 ring-orange-400 py-2 ' name="" id="">
                                        <option className='bg-slate-700  text-white   ' value="any">Any </option>
                                        <option className='bg-slate-700  text-white   ' value="deposit">Deposit Commission </option>
                                        <option className='bg-slate-700  text-white   ' value="plan">Plan Subscribe Commission  </option>
                                        <option className='bg-slate-700  text-white   ' value="advertise"> Advertise View Commission </option>

                                    </select>
                                </div>
                            </div>
                            <div className='w-full md:w-[50%] flex md:flex-row  items-center justify-center gap-4 '>

                                <div className='w-[70%] flex items-start justify-center flex-col gap-0'>
                                    <span className='text-lg text-active'> Levels  </span>
                                    <select className='bg-primary focus:outline-none border-[1px] border-gray-500 w-full rounded-md text-lg font-medium px-3 focus:ring-4 ring-orange-400 py-2 ' name="" id="">
                                        <option className='bg-slate-700  text-white   ' value="any">Any </option>
                                        <option className='bg-slate-700  text-white   ' value="1st">1st level </option>
                                        <option className='bg-slate-700  text-white   ' value="2nd">2nd level  </option>
                                        <option className='bg-slate-700  text-white   ' value="3rd"> 3rd level </option>
                                        <option className='bg-slate-700  text-white   ' value="4th">4th level </option>

                                    </select>
                                </div>

                                <div className=' w-[30%]  pt-5  flex items-center justify-center'>
                                    <button className='w-full py-2 rounded-lg text-lg font-semibold bg-active text-secondary'> Filter </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='  w-[95%] sm:w-[90%] shadow-lg flex items-center justify-center   flex-col gap-3   bg-secondary  p-4'>
                        <div className=' border-b-2 pb-4 overflow-auto border-active w-full flex items-center justify-between gap-5  '>
                            <div className='flex items-start justify-center'>
                                <span className='text-[16px] text-active font-semibold'>Transaction </span>
                            </div>
                            <div className='flex items-start justify-center'>
                                <span className='text-[16px] text-active font-semibold'>Commission Form </span>
                            </div>
                            <div className='flex items-start justify-center'>
                                <span className='text-[16px] text-active font-semibold'>Commission Level </span>
                            </div>
                            <div className='flex items-start justify-center'>
                                <span className='text-[16px] text-active font-semibold'>Commission Type </span>
                            </div>

                            <div className='flex items-start justify-center'>
                                <span className='text-[16px] text-active font-semibold'> Amount </span>
                            </div>
                        </div>
                        <div className='   w-full flex items-center justify-center ' >
                            <span className='text-sm font-semibold'> Data Not Found </span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Commission