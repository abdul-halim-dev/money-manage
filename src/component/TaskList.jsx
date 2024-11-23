import React from 'react'
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import Footer from '../component/Footer';
import Header from '../component/Header';

const TaskList = () => {
  return (

    <div className=' w-full    bg-primary '>
      <Header/>
      <div className='w-full pb-[80px]  flex items-center justify-center flex-col gap-4 '>
        <div className='w-full bg-[#828a97] flex items-center justify-between px-6 py-2'>
        <h3 className='text-2xl font-bold text-secondary'>প্যাকেজ </h3>
        </div>

        <div className='w-[96%] sm:w-[90%] flex items-center justify-center gap-4 flex-wrap py-4 '>

        <div className=' w-[47%] sm:w-[31%] flex items-center justify-center flex-col  bg-[#ffffff] shadow-md rounded-br-lg rounded-bl-lg '>
          <span className='w-full bg-active text-secondary flex items-center justify-center py-2 text-[16px] sm:text-lg font-semibold drop-shadow  '> 
          মিনি প্ল্যান 
          </span>
          <div className='w-full flex items-center justify-center   py-2  '>
            <h1 className='text-2xl font-bold flex items-center justify-center '>  <FaBangladeshiTakaSign/> 500 </h1>
          </div>
          <div className='  w-full flex items-center px-1 py-3 justify-center flex-col gap-1  '>
              <span className='text-black  text-[14px] sm:text-[16px] font-semibold'> দৈনিক 1টি বিজ্ঞাপন</span>
              <span className=' text-black  text-[14px] sm:text-[16px] flex items-center justify-center font-semibold'> দৈনিক আয় 30 <FaBangladeshiTakaSign/>  </span>
              <span className='text-black   text-[14px] sm:text-[16px] font-semibold'> মেয়াদ 30 দিন </span>
            </div>
            <button className='w-full flex items-center justify-center py-1 bg-active text-secondary text-lg font-semibold shadow-xl rounded-lg'>Buy Now </button>
        </div>
 
        <div className=' w-[47%] sm:w-[31%] flex items-center justify-center flex-col  bg-[#ffffff] shadow-md rounded-br-lg rounded-bl-lg '>
          <span className='w-full bg-active text-secondary flex items-center justify-center py-2 text-[16px] sm:text-lg font-semibold drop-shadow  '> 
          স্ট্যান্ডার্ড  প্ল্যান 
          </span>
          <div className='w-full flex items-center justify-center   py-2  '>
            <h1 className='text-2xl font-bold flex items-center justify-center '>  <FaBangladeshiTakaSign/> 500 </h1>
          </div>
          <div className='  w-full flex items-center px-1 py-3 justify-center flex-col gap-1  '>
              <span className='text-black  text-[14px] sm:text-[16px] font-semibold'> দৈনিক 1টি বিজ্ঞাপন</span>
              <span className=' text-black  text-[14px] sm:text-[16px] flex items-center justify-center font-semibold'> দৈনিক আয় 30 <FaBangladeshiTakaSign/>  </span>
              <span className='text-black   text-[14px] sm:text-[16px] font-semibold'> মেয়াদ 30 দিন </span>
            </div>
            <button className='w-full flex items-center justify-center py-1 bg-active text-secondary text-lg font-semibold shadow-xl rounded-lg'>Buy Now </button>
        </div>
 
        <div className=' w-[47%] sm:w-[31%] flex items-center justify-center flex-col  bg-[#ffffff] shadow-md rounded-br-lg rounded-bl-lg '>
          <span className='w-full bg-active text-secondary flex items-center justify-center py-2 text-[16px] sm:text-lg font-semibold drop-shadow  '> 
          প্রিমিয়াম  প্ল্যান 
          </span>
          <div className='w-full flex items-center justify-center   py-2  '>
            <h1 className='text-2xl font-bold flex items-center justify-center '>  <FaBangladeshiTakaSign/> 500 </h1>
          </div>
          <div className='  w-full flex items-center px-1 py-3 justify-center flex-col gap-1  '>
              <span className='text-black  text-[14px] sm:text-[16px] font-semibold'> দৈনিক 1টি বিজ্ঞাপন</span>
              <span className=' text-black  text-[14px] sm:text-[16px] flex items-center justify-center font-semibold'> দৈনিক আয় 30 <FaBangladeshiTakaSign/>  </span>
              <span className='text-black   text-[14px] sm:text-[16px] font-semibold'> মেয়াদ 30 দিন </span>
            </div>
            <button className='w-full flex items-center justify-center py-1 bg-active text-secondary text-lg font-semibold shadow-xl rounded-lg'>Buy Now </button>
        </div>
 
        <div className=' w-[47%] sm:w-[31%] flex items-center justify-center flex-col  bg-[#ffffff] shadow-md rounded-br-lg rounded-bl-lg '>
          <span className='w-full bg-active text-secondary flex items-center justify-center py-2 text-[16px] sm:text-lg font-semibold drop-shadow  '> 
          গোল্ড প্ল্যান 
          </span>
          <div className='w-full flex items-center justify-center   py-2  '>
            <h1 className='text-2xl font-bold flex items-center justify-center '>  <FaBangladeshiTakaSign/> 500 </h1>
          </div>
          <div className='  w-full flex items-center px-1 py-3 justify-center flex-col gap-1  '>
              <span className='text-black  text-[14px] sm:text-[16px] font-semibold'> দৈনিক 1টি বিজ্ঞাপন</span>
              <span className=' text-black  text-[14px] sm:text-[16px] flex items-center justify-center font-semibold'> দৈনিক আয় 30 <FaBangladeshiTakaSign/>  </span>
              <span className='text-black   text-[14px] sm:text-[16px] font-semibold'> মেয়াদ 30 দিন </span>
            </div>
            <button className='w-full flex items-center justify-center py-1 bg-active text-secondary text-lg font-semibold shadow-xl rounded-lg'>Buy Now </button>
        </div>
 
        <div className=' w-[47%] sm:w-[31%] flex items-center justify-center flex-col  bg-[#ffffff] shadow-md rounded-br-lg rounded-bl-lg '>
          <span className='w-full bg-active text-secondary flex items-center justify-center py-2 text-[16px] sm:text-lg font-semibold drop-shadow  '> 
          ডায়মন্ড  প্ল্যান 
          </span>
          <div className='w-full flex items-center justify-center   py-2  '>
            <h1 className='text-2xl font-bold flex items-center justify-center '>  <FaBangladeshiTakaSign/> 500 </h1>
          </div>
          <div className='  w-full flex items-center px-1 py-3 justify-center flex-col gap-1  '>
              <span className='text-black  text-[14px] sm:text-[16px] font-semibold'> দৈনিক 1টি বিজ্ঞাপন</span>
              <span className=' text-black  text-[14px] sm:text-[16px] flex items-center justify-center font-semibold'> দৈনিক আয় 30 <FaBangladeshiTakaSign/>  </span>
              <span className='text-black   text-[14px] sm:text-[16px] font-semibold'> মেয়াদ 30 দিন </span>
            </div>
            <button className='w-full flex items-center justify-center py-1 bg-active text-secondary text-lg font-semibold shadow-xl rounded-lg'>Buy Now </button>
        </div>
 
       
        <div className=' w-[47%] sm:w-[31%] flex items-center justify-center flex-col  bg-[#ffffff] shadow-md rounded-br-lg rounded-bl-lg '>
          <span className='w-full bg-active text-secondary flex items-center justify-center py-2 text-[16px] sm:text-lg font-semibold drop-shadow  '> 
          মিনি প্ল্যান 
          </span>
          <div className='w-full flex items-center justify-center   py-2  '>
            <h1 className='text-2xl font-bold flex items-center justify-center '>  <FaBangladeshiTakaSign/> 500 </h1>
          </div>
          <div className='  w-full flex items-center px-1 py-3 justify-center flex-col gap-1  '>
              <span className='text-black  text-[14px] sm:text-[16px] font-semibold'> দৈনিক 1টি বিজ্ঞাপন</span>
              <span className=' text-black  text-[14px] sm:text-[16px] flex items-center justify-center font-semibold'> দৈনিক আয় 30 <FaBangladeshiTakaSign/>  </span>
              <span className='text-black   text-[14px] sm:text-[16px] font-semibold'> মেয়াদ 30 দিন </span>
            </div>
            <button className='w-full flex items-center justify-center py-1 bg-active text-secondary text-lg font-semibold shadow-xl rounded-lg'>Buy Now </button>
        </div>
        </div>
      </div>
  <Footer/>
    </div>
  )
}

export default TaskList