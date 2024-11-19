 
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const ChangePassword = () => {
  return (
   
    <div className='w-full   bg-primary h-screen  '>
    
    <Header/>

    <div className='w-full  flex items-center justify-center gap-2 flex-col pb-[100px]'>
    <div className="flex items-center justify-center flex-col gap-2 pt-6" >
        <h2 className="text-4xl font-bold " > Password </h2>
        <p className='text-lg font-bold'>Update account Password ..</p>
      </div>
     <div className=' w-[95%] sm:w-[90%] flex items-center justify-center rounded-xl flex-col gap-6 bg-secondary  p-4'>
      
      <div className=" w-full flex items-start justify-center flex-col gap-3   " >
        <label className='text-sm font-bold ' htmlFor="currentpassword"> Current Password </label>
        <input className='  focus:border-b-2 focus:border-blue-500 focus:outline-none w-full bg-transparent border-b-2 border-active pb-1' type="password" name="currentpassword" id="currentpassword" />
      </div>
      <div className=" w-full flex items-start justify-center flex-col gap-3   " >
        <label className='text-sm font-bold ' htmlFor="password">  Password </label>
        <input className='  focus:border-b-2 focus:border-blue-500 focus:outline-none w-full bg-transparent border-b-2 border-active pb-1' type="password" name="password" id="password" />
      </div>

       
      <div className=" w-full flex items-start justify-center flex-col gap-3   " >
        <label className='text-sm font-bold ' htmlFor="confirmpassword"> Confirm Password </label>
        <input className='  focus:border-b-2 focus:border-blue-500 focus:outline-none w-full bg-transparent border-b-2 border-active pb-1' type="password" name="confirmpassword" id="confirmpassword" />
      </div>

       

      <button className=' w-full bg-active text-secondary text-lg py-1 font-semibold  rounded-xl '> Transfer </button>


    </div>
    </div>

<Footer/>
   </div>


  )
}

export default ChangePassword