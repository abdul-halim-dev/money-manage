import React from 'react'
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';

const MembershipPlan = () => {
  return (

    <div className=' w-full    bg-primary '>
  <header className=" z-50 bg-active sticky top-0 py-4 px-8 w-full h-[60px] flex items-center justify-between   text-white">
      
      <Link to={"/"}>
          <img className=" w-[30px] h-[30px] object-cover" src="https://i.ibb.co.com/p0WZsBZ/logo.png" alt="" />
        </Link>

      <Link to={"/dashbord"}>
          <img className=" w-[30px] h-[30px] object-cover"  src="https://i.ibb.co.com/MfTBS0g/dummy-profile.png" alt="" />
        </Link>


      </header>


      <div className='w-full pb-[80px]  flex items-center justify-center flex-col gap-4 '>
        
        <div className='w-full bg-[#828a97] flex items-center justify-between px-6 py-2'>
          <div className='flex items-start justify-center flex-col gap-1'>
            <h3 className='text-2xl font-bold text-yellow-500'>VIP Labels</h3>
            <span className='text-secondary text-[16px] font-bold' > To upgrade VIP labels follow vip limits</span>
          </div>
          <div >
            <img className='w-[80px] h-[80px] object-cover' src="https://i.ibb.co.com/D88B4JR/locker-3.png" alt="" />
          </div>
        </div>

        <div className='w-[96%] sm:w-[90%] flex items-center justify-center gap-4 flex-wrap py-4 '>

        <div className=' w-[47%] sm:w-[31%] flex items-center justify-center flex-col bg-secondary shadow-md rounded-br-lg rounded-bl-lg '>
          <span className='w-full bg-active text-secondary flex items-center justify-center py-2 text-[16px] sm:text-lg font-semibold drop-shadow-xl  '> 
          মিনি প্ল্যান 
          </span>
          <div className='w-full flex items-center justify-center bg-[#01ffff] py-4 shadow'>
            <h1 className='text-xl font-bold flex items-center justify-center '>  <FaBangladeshiTakaSign/> 500 </h1>
          </div>
          <div className=' w-full flex items-start px-1 py-3 justify-center flex-col gap-1  '>
              <span className='text-[#919191] text-[14px] font-semibold'> Daily 1 Ads</span>
              <span className=' text-[#919191] text-[14px] flex items-center justify-center font-semibold'> Daily Income 30 <FaBangladeshiTakaSign/>  </span>
              <span className='text-[#919191] text-[14px] font-semibold'> Validity 30 days </span>
            </div>
            <button className='w-full flex items-center justify-center py-1 bg-active text-secondary text-lg font-semibold shadow-xl rounded-lg'>Buy Now </button>
        </div>
 

        <div className='w-[47%] sm:w-[31%] flex items-center justify-center flex-col bg-secondary shadow-md rounded-br-lg rounded-bl-lg '>
          <span className='w-full bg-active text-secondary flex items-center justify-center py-2 text-[16px] sm:text-lg font-semibold drop-shadow-xl  '> 
          স্ট্যান্ডার্ড  প্ল্যান 
          </span>
          <div className='w-full flex items-center justify-center bg-[#01ffff] py-4 shadow'>
            <h1 className='text-xl font-bold flex items-center justify-center '>  <FaBangladeshiTakaSign/> 500 </h1>
          </div>
          <div className=' w-full flex items-start px-1 py-3 justify-center flex-col gap-1  '>
              <span className='text-[#919191] text-[14px] font-semibold'> Daily 1 Ads</span>
              <span className=' text-[#919191] text-[14px] flex items-center justify-center font-semibold'> Daily Income 30 <FaBangladeshiTakaSign/>  </span>
              <span className='text-[#919191] text-[14px] font-semibold'> Validity 30 days </span>
            </div>
            <button className='w-full flex items-center justify-center py-1 bg-active text-secondary text-lg font-semibold shadow-xl rounded-lg'>Buy Now </button>
        </div>
 

        <div className='w-[47%] sm:w-[31%] flex items-center justify-center flex-col bg-secondary shadow-md rounded-br-lg rounded-bl-lg '>
          <span className='w-full bg-active text-secondary flex items-center justify-center py-2 text-[16px] sm:text-lg font-semibold drop-shadow-xl  '> 
          প্রিমিয়াম  প্ল্যান 
          </span>
          <div className='w-full flex items-center justify-center bg-[#01ffff] py-4 shadow'>
            <h1 className='text-xl font-bold flex items-center justify-center '>  <FaBangladeshiTakaSign/> 2000 </h1>
          </div>
          <div className=' w-full flex items-start px-1 py-3 justify-center flex-col gap-1  '>
              <span className='text-[#919191] text-[14px] font-semibold'> Daily 3 Ads</span>
              <span className=' text-[#919191] text-[14px] flex items-center justify-center font-semibold'> Daily Income 90 <FaBangladeshiTakaSign/>  </span>
              <span className='text-[#919191] text-[14px] font-semibold'> Validity 30 days </span>
            </div>
            <button className='w-full flex items-center justify-center py-1 bg-active text-secondary text-lg font-semibold shadow-xl rounded-lg'>Buy Now </button>
        </div>
 

        <div className='w-[47%] sm:w-[31%] flex items-center justify-center flex-col bg-secondary shadow-md rounded-br-lg rounded-bl-lg '>
          <span className='w-full bg-active text-secondary flex items-center justify-center py-2 text-[16px] sm:text-lg font-semibold drop-shadow-xl  '> 
          গোল্ড প্ল্যান 
          </span>
          <div className='w-full flex items-center justify-center bg-[#01ffff] py-4 shadow'>
            <h1 className='text-xl font-bold flex items-center justify-center '>  <FaBangladeshiTakaSign/> 3000 </h1>
          </div>
          <div className=' w-full flex items-start px-1 py-3 justify-center flex-col gap-1  '>
              <span className='text-[#919191] text-[14px] font-semibold'> Daily 4 Ads</span>
              <span className=' text-[#919191] text-[14px] flex items-center justify-center font-semibold'> Daily Income 120 <FaBangladeshiTakaSign/>  </span>
              <span className='text-[#919191] text-[14px] font-semibold'> Validity 30 days </span>
            </div>
            <button className='w-full flex items-center justify-center py-1 bg-active text-secondary text-lg font-semibold shadow-xl rounded-lg'>Buy Now </button>
        </div>
 

        <div className='w-[47%] sm:w-[31%] flex items-center justify-center flex-col bg-secondary shadow-md rounded-br-lg rounded-bl-lg '>
          <span className='w-full bg-active text-secondary flex items-center justify-center py-2 text-[16px] sm:text-lg font-semibold drop-shadow-xl  '> 
          ডায়মন্ড  প্ল্যান 
          </span>
          <div className='w-full flex items-center justify-center bg-[#01ffff] py-4 shadow'>
            <h1 className='text-xl font-bold flex items-center justify-center '>  <FaBangladeshiTakaSign/> 5000 </h1>
          </div>
          <div className=' w-full flex items-start px-1 py-3 justify-center flex-col gap-1  '>
              <span className='text-[#919191] text-[14px] font-semibold'> Daily 7 Ads</span>
              <span className=' text-[#919191] text-[14px] flex items-center justify-center font-semibold'> Daily Income 210 <FaBangladeshiTakaSign/>  </span>
              <span className='text-[#919191] text-[14px] font-semibold'> Validity 30 days </span>
            </div>
            <button className='w-full flex items-center justify-center py-1 bg-active text-secondary text-lg font-semibold shadow-xl rounded-lg'>Buy Now </button>
        </div>
 

        <div className='w-[47%] sm:w-[31%] flex items-center justify-center flex-col bg-secondary shadow-md rounded-br-lg rounded-bl-lg '>
          <span className='w-full bg-active text-secondary flex items-center justify-center py-2 text-[16px] sm:text-lg font-semibold drop-shadow-xl  '> 
          মিনি প্ল্যান 
          </span>
          <div className='w-full flex items-center justify-center bg-[#01ffff] py-4 shadow'>
            <h1 className='text-xl font-bold flex items-center justify-center '>  <FaBangladeshiTakaSign/> 500 </h1>
          </div>
          <div className=' w-full flex items-start px-1 py-3 justify-center flex-col gap-1  '>
              <span className='text-[#919191] text-[14px] font-semibold'> Daily 1 Ads</span>
              <span className=' text-[#919191] text-[14px] flex items-center justify-center font-semibold'> Daily Income 30 <FaBangladeshiTakaSign/>  </span>
              <span className='text-[#919191] text-[14px] font-semibold'> Validity 30 days </span>
            </div>
            <button className='w-full flex items-center justify-center py-1 bg-active text-secondary text-lg font-semibold shadow-xl rounded-lg'>Buy Now </button>
        </div>
 


        </div>


      </div>

      {/* <footer className=" bg-[#989494] fixed bottom-0 w-full h-[65px] py-2 px-6 sm:px-14 flex items-center justify-between   ">
  <Link className=" flex items-center justify-center flex-col gap-1 " to={"/"}>
    <img className=" w-[25px] h-[25px] object-cover" src="https://i.ibb.co.com/hMFYz7M/home.png" alt="" />
    <span className="text-secondary text-[10px] "> Home </span>
  </Link>
  <Link className=" flex items-center justify-center flex-col gap-1 " to={"/"}>
    <img className=" w-[30px] h-[30px] object-cover" src="https://i.ibb.co.com/vj0xkCR/task-2.png" alt="" />
    <span className="text-secondary text-[10px] "> Task </span>
  </Link>
  <Link className=" flex items-center justify-center  " to={"/membershipPlan"}>
    <img className=" absolute -top-[18px] w-[65px] h-[65px] object-cover" src="https://i.ibb.co.com/Q9B0n8M/vip.png" alt="" />
  </Link>
  <Link className=" flex items-center justify-center flex-col gap-1 " to={"/"}>
    <img className=" w-[30px] h-[30px] object-cover" src="https://i.ibb.co.com/jrzKQy5/contact.png" alt="" />
    <span className="text-secondary text-[10px] "> Contact </span>
  </Link>
  <Link className=" flex items-center justify-center flex-col gap-1 " to={"/login"}>
    <img className=" w-[30px] h-[30px] object-cover" src="https://i.ibb.co.com/Mf0jFV9/login.png" alt="" />
    <span className="text-secondary text-[10px] "> Login </span>
  </Link>
</footer> */}
<Footer/>
    </div>
  )
}

export default MembershipPlan