import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa6'

const WithdrawHistory = () => {

const tableItem = [
    {id:1, title:"Bangla "},
    {id:1, title:"Sabina "},
    {id:1, title:"Bangladesh "},
    {id:1, title:"Narayon "},
    {id:1, title:"Dhaka "},
    {id:1, title:"Dhaka "},
]


  return (
    <div className='w-full   bg-primary h-screen  '>
    <Header />
    <div className=" relative flex items-center justify-center py-3 bg-secondary shadow-md  " >
    <Link title='ড্যাশবোর্ড ' className=' absolute top-[8px]   left-[10px] sm:left-[30px] bg-[#808085] shadow-md py-2 px-2 rounded-md text-lg text-secondary' to={"/dashbord"}> <FaChevronLeft/> </Link>
        <p className='text-lg font-bold'> Withdraw Log </p>
    </div>
    <div className='w-full  flex items-center justify-center gap-2 flex-col pt-[40px]'>      
<div className='  w-[95%] sm:w-[90%] rounded-lg shadow-lg flex items-center justify-center flex-col gap-3 px-3 bg-secondary py-3'>
 <div className='w-full flex  flex-col gap-2'>
    <div className='w-full flex items-start justify-start gap-2  border-b-2 border-active pb-3 '>
        <input className='bg-primary py-1 pl-3 text-lg font-semibold rounded-xl shadow focus:outline-none focus:border-2 border-active' type="search" name="search" id="search" placeholder='Search by transactions' />
        <button className='bg-active py-[11px] text-secondary px-5 rounded-lg shadow-md '> <FaSearch/> </button>
    </div>
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

export default WithdrawHistory