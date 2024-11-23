import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa6'


const SupportTicket = () => {
    return (
        <div className='w-full   bg-primary h-screen  '>

            <Header />
            <div className="flex items-center justify-center py-3  " >

                <p className='text-4xl font-bold'>Support Tickets </p>
            </div>

            <div className='w-full  flex items-center justify-center gap-2 flex-col pt-[40px]'>
                <div className='w-[95%]  sm:w-[90%] flex items-end justify-end'>
                    <Link className='flex shadow-md items-center justify-center gap-1 bg-active text-secondary text-[14px] font-semibold py-1 px-2 rounded-lg ' to={"/openTicket"}> <FaPlus /> New Ticket</Link>
                </div>
                <div className='border-t-[1px] border-indigo-500  border-b-[1px] w-[95%] sm:w-[90%] rounded-lg shadow-lg flex items-center justify-center flex-col gap-3 px-3 bg-secondary py-3'>
                    <div className='w-full flex overflow-auto  '>
                        <table class=" border-b-2 pb-3  border-active w-full text-sm text-left rtl:text-right text-black ">
                            <thead class="text-xs   text-black uppercase ">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Subject
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Priority
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Last Reply
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Action
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

export default SupportTicket