import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa6'
import toast, { Toaster } from 'react-hot-toast'



const OpenTicket = () => {


    const [inputCount, setInputCount] = useState(1);

    const handleAddInput = () => {
        if (inputCount < 5) {
            setInputCount(inputCount + 1);

        } else {
            toast.error("You've added maximum number of file")
        }
    };

    return (
        <div className='w-full   bg-primary  '>
            <Header />
            <div className="flex items-center justify-center py-3  " >

                <p className='text-4xl font-bold'>Support Tickets </p>
            </div>

            <div className='w-full  flex items-center justify-center gap-2 flex-col pt-[40px] pb-[90px] '>
                <div className='w-[95%]  sm:w-[90%] flex items-end justify-end'>
                    <Link className='flex shadow-md items-center justify-center gap-1 bg-active text-secondary text-[14px] font-semibold py-1 px-2 rounded-lg ' to={"/supportTicket"}>My Support Ticket</Link>
                </div>
                <div className=' w-[95%] sm:w-[90%] rounded-lg shadow-lg flex items-center justify-center flex-col gap-1 p-3 bg-secondary '>

                    <div className='flex w-full items-start justify-center flex-col gap-2 '>
                        <label className='text-[14px] font-medium text-[#6e6476] ' htmlFor="name"> Name </label>
                        <input className='w-full bg-primary pl-3 py-2 text-[16px] rounded-lg focus:outline   outline-1 border-0' disabled type="text" name="name" id="name" value={"Dummy Name"} />
                    </div>

                    <div className='flex w-full items-start justify-center flex-col gap-2 '>
                        <label className='text-[14px] font-medium text-[#6e6476] ' htmlFor="email"> Email Address </label>
                        <input className='w-full bg-primary pl-3 py-2 text-[16px] rounded-lg focus:outline  outline-1 border-0' disabled type="email" name="email" id="email" value={"Dummy email"} />
                    </div>

                    <div className='flex w-full items-start justify-center flex-col gap-2 '>
                        <label className='text-[14px] font-medium text-[#6e6476] ' htmlFor="email"> Subject </label>
                        <input className='w-full bg-primary pl-3 py-2 text-[16px] rounded-lg  border-0 focus:outline  outline-1 ' type="email" name="email" id="email" value={"Dummy email"} />
                    </div>

                    <div className='flex w-full items-start justify-center flex-col gap-2 '>
                        <label className='text-[14px] font-medium text-[#6e6476] ' htmlFor="selectBox"> Priority </label>
                        <select required className='w-full bg-primary pl-3 py-2 text-[16px] rounded-lg  border-0 focus:outline  outline-1  ' name="selectBox" id="selectBox">
                            <option value="high"> High</option>
                            <option value="low"> Low</option>
                            <option value="medium"> Medium</option>

                        </select>
                    </div>

                    <div className='flex w-full items-start justify-center flex-col gap-2 '>
                        <label className='text-[14px] font-medium text-[#6e6476] ' htmlFor="message"> Message </label>
                        <textarea required className='w-full h-[160px] bg-primary pl-3 py-2 text-[16px] rounded-lg  border-0 focus:outline  outline-1 ' name="message" id=" message"></textarea>
                    </div>

                    <div className='w-full flex items-end justify-end '>

                        <button onClick={handleAddInput} className='flex shadow-md items-center justify-center gap-1 bg-active text-secondary text-[14px] font-semibold py-1 px-2 rounded-lg'> <FaPlus />  Add New  </button>
                    </div>

                    <div className='flex w-full items-start justify-center flex-col gap-2 '>

                        <label className='text-[16px] font-medium text-[#6e6476] ' htmlFor="email"> Attachments <span className='text-[14px]  text-red-500'>Max 5 files can be uploaded. Maximum upload size is 2M</span> </label>

                        <Toaster position="top-right" />

                        {Array.from({ length: inputCount }, (_, index) => (
                            <div className='w-full flex items-center justify-center flex-col gap-3' key={index}>
                                <input className=' cursor-pointer w-full flex bg-primary pl-3 py-2 text-[16px] rounded-lg  border-0 focus:outline  outline-1 ' type="file" name="file" id="file" />
                            </div>
                        ))}
                    </div>
                    <div className='w-full flex items-start justify-start '>
                        <p className='text-[14px] '>Allowed File Extensions: .jpg, .jpeg, .png, .pdf, .doc, .docx </p>
                    </div>

                    <div className='w-full py-4 '>
                        <button className='w-full bg-active py-2 rounded-lg shadow-md text-secondary text-lg font-semibold' type='submit'> Submit</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OpenTicket