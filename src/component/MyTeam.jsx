import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { FaChevronLeft, FaCopy, FaEnvelope, FaGift, FaShare, FaUserPlus } from 'react-icons/fa6'

import { useRef } from "react";
import copy from "copy-to-clipboard";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';


const MyTeam = () => {

    const textRef = useRef();

    const copyToClipboard = () => {

        let copyText = textRef.current.value;

        let isCopy = copy(copyText);

        if (isCopy) {
            toast.success('Link is Copied')
        }
    }
    return (
        <div className='w-full   bg-primary h-screen  '>
            <Toaster position="top-right" />
            <Header />
            <div className=" relative flex items-center justify-center py-3 bg-secondary shadow-md  " >
                <Link title='ড্যাশবোর্ড ' className=' absolute top-[8px]   left-[10px] sm:left-[30px] bg-[#808085] shadow-md py-2 px-2 rounded-md text-lg text-secondary' to={"/dashbord"}> <FaChevronLeft/> </Link>
                <p className='text-lg font-bold'> Referred Users </p>
            </div>
            <div className='w-full  flex items-center justify-center gap-6 flex-col pt-[40px] pb-[90px] '>
                <div className='w-[95%] sm:w-[90%] '>
                    <div className='w-full shadow-lg py-3 flex items-center justify-between px-3  bg-secondary rounded-xl'>

                        <div className='flex items-center justify-center flex-col gap-1'>
                            <div title='Mail'>
                                <FaEnvelope className='text-xl  text-active ' />
                            </div>
                            <span className='text-[11px] font-bold  '>Send Invitation  </span>
                        </div>

                        <div>
                            <span title='Arrow Redo' className=' text-active'><FaShare /> </span>
                        </div>
                        <div className='flex items-center justify-center flex-col gap-1'>
                            <div title='Person Add'>
                                <FaUserPlus className='text-xl  text-active ' />
                            </div>
                            <span className='text-[11px] font-bold '>Upgrade VIP </span>
                        </div>
                        <div>
                            <span title='Arrow Redo' className=' text-active'><FaShare /> </span>
                        </div>


                        <div className='flex items-center justify-center flex-col gap-1'>
                            <div title='Gift'>
                                <FaGift className='text-xl  text-active ' />
                            </div>
                            <span className='text-[11px] font-bold '>Earn Rewards  </span>
                        </div>

                    </div>
                </div>
                <div className='w-[95%] sm:w-[90%]  shadow-lg pt-3 pb-8 flex flex-col gap-2 items-center justify-centter px-3  bg-secondary rounded-xl'>
                    <div className=" w-full flex items-center justify-center " >
                        <p className='text-xl font-bold'> Referral Link </p>
                    </div>
                    <div className=' w-full flex items-center justify-center flex-col gap-2 '>
                        <input ref={textRef} disabled className=' w-full bg-primary border-none focus:outline-none pl-3 py-2 rounded-3xl' type="text" name="" id="" value={`https://drsmarket.xyz?reference=nusrat24`} />
                        <button onClick={copyToClipboard} className='w-full bg-active rounded-3xl text-[16px] font-bold text-secondary py-1 flex items-center justify-center '> <FaCopy /> Copy </button>
                    </div>
                </div>

                <div className='  w-[95%] sm:w-[90%] rounded-lg shadow-lg flex items-center justify-center flex-col gap-3 px-3 bg-secondary py-3'>

                    <div className='w-full flex overflow-auto  '>
                        <table class=" border-b-2 pb-3  border-active w-full text-sm text-left rtl:text-right text-black ">
                            <thead class="text-xs   text-black uppercase ">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Gateway | Transaction
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Initiated
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Amount
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Conversion
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Details
                                    </th>


                                </tr>
                            </thead>
                            {/* <tbody>
            <tr class="">

                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>

            </tr>
           
        </tbody> */}

                        </table>
                    </div>

                    <div className='   w-full flex items-center justify-center ' >
                        <span className='text-sm font-semibold'> Data Not Found </span>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyTeam