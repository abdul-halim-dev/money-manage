import React, { useRef } from 'react'
import Footer from './Footer'
import Header from './Header'
import { FaCopy, FaInfoCircle } from 'react-icons/fa'
import copy from 'copy-to-clipboard'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa6'

const TwoFactor = () => {

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
        <Link title='ড্যাশবোর্ড ' className=' absolute top-[8px]   left-[10px] sm:left-[30px] bg-[#808085] shadow-md py-2 px-2 rounded-md text-lg text-secondary' to={"/dashbord"}> <FaChevronLeft /> </Link>

        <p className='text-lg font-bold'>2FA Setting </p>
      </div>

      <div className='w-full  flex items-center justify-center gap-2 flex-col pt-[40px]'>
        <div className=' sm:pb-0 pb-[100px]  w-[95%] sm:w-[90%] flex items-start justify-center gap-3 py-3 sm:flex-row flex-col '>

          <div className=' w-full sm:w-[50%] pb-6  flex items-center justify-center flex-col gap-2 rounded-lg shadow-lg bg-secondary '>

            <div className=' w-full   border-b-2 border-active flex items-start justify-start px-3 py-3 '>
              <h4> Add Your Account </h4>
            </div>
            <div className='w-full items-center justify-center flex-col gap-0 flex px-3 '>
              <div className='w-full flex items-center justify-center flex-col gap-2'>
                <div className='w-full flex items-start justify-start'>
                  <span className='text-[12px] font-bold '>
                    Use the QR code or setup key on your Google Authenticator app to add your account.
                  </span>
                </div>
                <div className='w-[40px] h-[40px] '>
                  <img className='w-full h-full object-cover' src="https://i.ibb.co.com/b2M9zwC/scan.png" alt="" />
                </div>
              </div>
              <div className=' w-full flex items-start justify-center flex-col '>
                <label className='text-sm font-semibold ' htmlFor="copyCode"> Setup Key </label>
                <div className='w-full flex items-center justify-center gap-1 '>
                  <input ref={textRef} className='w-[95%] outline-none py-2 rounded-lg bg-primary text-lg pl-3 ' type="text" name="" value={'O4HOF6BR2YVYV6EJ'} id="copyCode" />
                  <button title='Copy Link' onClick={copyToClipboard} className='w-[5%] text-active text-xl '><FaCopy /> </button>
                </div>
              </div>
              <div className='w-full flex items-center justify-center flex-col gap-1'>
                <div className='w-full flex items-start justify-start '>
                  <span className='flex items-center justify-center gap-1 text-sm  font-semibold '> <FaInfoCircle /> Help</span>
                </div>
                <div className='w-full flex items-center justify-center'>
                  <p className='text-[15px] font-semibold '>Google Authenticator is a multifactor app for mobile devices. It generates timed codes used during the 2-step verification process. To use Google Authenticator, install the Google Authenticator application on your mobile device  <a className='text-active hover:underline' href='#'> Download</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full sm:w-[50%] pb-6  flex items-center justify-center flex-col gap-2 rounded-lg shadow-lg bg-secondary '>

            <div className=' w-full   border-b-2 border-active flex items-start justify-start px-3 py-3 '>
              <h4> Enable 2FA Security </h4>
            </div>

            <div className='w-full px-3  '>
              <div className='w-full flex items-start  justify-center flex-col gap-3 py-5'>
                <label className='text-sm font-semibold' htmlFor="optcode"> Google Authenticatior OTP</label>
                <input className='w-full border-b-2 border-blue-600 focus:border-b-active outline-none pb-1' type="text" name="" id="optcode" required />
              </div>
              <button type='submit' className='w-full py-[5px] rounded-xl shadow-lg bg-active text-secondary text-lg font-semibold'> Submit </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TwoFactor