import React from 'react'
import { Link } from 'react-router-dom';

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

        <div className='w-[95%] sm:w-[90%] flex items-center justify-center gap-2 flex-wrap py-4 '>

          <div className=' w-full sm:w-[48%] md:w-[31%] flex items-center justify-between p-4  bg-yellow-500 rounded-lg '>
            <div className='  w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] shadow-md rounded-full '>
              <img className=' w-full h-full object-cover rounded-full ' src="./src/assets/allimage/star1.png" alt="" />
            </div>

            <div className='flex items-start justify-center flex-col  '>
              <h4 className=' text-white text-xl font-bold '>Gold</h4>
              <span className='text-white text-sm font-semibold'> 1 Grabing 0.05 usd </span>
              <span className='text-white text-sm font-semibold'> Daily Grab 10 times </span>
              <span className='text-white text-sm font-semibold'> Daily Earning 0.50 usd</span>
            </div>
            <div className=' bg-white/50  px-2 rounded-full shadow-md'>
              <h4 className='text-yellow-600 text-xl font-semibold'> $50.00</h4>
            </div>
          </div>

          <div className='w-full sm:w-[48%] md:w-[31%] flex items-center justify-between p-4  bg-[#01bada] rounded-lg '>
            <div className=' w-[60px] sm:w-[80px] h-[60px] sm:h-[80px]  shadow-md rounded-full '>
              <img className=' w-full h-full object-cover rounded-full ' src="https://i.ibb.co.com/P9ycKL2/star1.png" alt="" />
            </div>

            <div className='flex items-start justify-center flex-col  '>
              <h4 className=' text-white text-xl font-bold '>Platinum </h4>
              <span className='text-white text-sm font-semibold'> 1 Grabing 0.05 usd </span>
              <span className='text-white text-sm font-semibold'> Daily Grab 10 times </span>
              <span className='text-white text-sm font-semibold'> Daily Earning 0.50 usd</span>
            </div>
            <div className=' bg-white/50  px-2 rounded-full shadow-md'>
              <h4 className='text-yellow-600 text-xl font-semibold'> $100.00</h4>
            </div>
          </div>

          <div className=' w-full sm:w-[48%] md:w-[31%] flex items-center justify-between p-4  bg-[#fb8511] rounded-lg '>
            <div className='w-[60px] sm:w-[80px] h-[60px] sm:h-[80px]  shadow-md rounded-full '>
              <img className=' w-full h-full object-cover rounded-full ' src="https://i.ibb.co.com/P9ycKL2/star1.png" alt="" />
            </div>

            <div className='flex items-start justify-center flex-col  '>
              <h4 className=' text-white text-xl font-bold '>Diamond</h4>
              <span className='text-white text-sm font-semibold'> 1 Grabing 0.05 usd </span>
              <span className='text-white text-sm font-semibold'> Daily Grab 10 times </span>
              <span className='text-white text-sm font-semibold'> Daily Earning 0.50 usd</span>
            </div>
            <div className=' bg-white/50  px-2 rounded-full shadow-md'>
              <h4 className='text-yellow-600 text-xl font-semibold'> $200.00</h4>
            </div>
          </div>

          <div className=' w-full sm:w-[48%] md:w-[31%] flex items-center justify-between p-4  bg-[#6d73fb] rounded-lg '>
            <div className='w-[60px] sm:w-[80px] h-[60px] sm:h-[80px]  shadow-md rounded-full '>
              <img className=' w-full h-full object-cover rounded-full ' src="https://i.ibb.co.com/P9ycKL2/star1.png" alt="" />
            </div>

            <div className='flex items-start justify-center flex-col  '>
              <h4 className=' text-white text-xl font-bold '>Crystal</h4>
              <span className='text-white text-sm font-semibold'> 1 Grabing 0.05 usd </span>
              <span className='text-white text-sm font-semibold'> Daily Grab 10 times </span>
              <span className='text-white text-sm font-semibold'> Daily Earning 0.50 usd</span>
            </div>
            <div className=' bg-white/50  px-2 rounded-full shadow-md'>
              <h4 className='text-yellow-600 text-xl font-semibold'> $500.00</h4>
            </div>
          </div>

          <div className=' w-full sm:w-[48%] md:w-[31%] flex items-center justify-between p-4  bg-yellow-500 rounded-lg '>
            <div className=' w-[60px] sm:w-[80px] h-[60px] sm:h-[80px]  shadow-md rounded-full '>
              <img className=' w-full h-full object-cover rounded-full ' src="https://i.ibb.co.com/P9ycKL2/star1.png" alt="" />
            </div>

            <div className='flex items-start justify-center flex-col  '>
              <h4 className=' text-white text-xl font-bold '>Gold</h4>
              <span className='text-white text-sm font-semibold'> 1 Grabing 0.05 usd </span>
              <span className='text-white text-sm font-semibold'> Daily Grab 10 times </span>
              <span className='text-white text-sm font-semibold'> Daily Earning 0.50 usd</span>
            </div>
            <div className=' bg-white/50  px-2 rounded-full shadow-md'>
              <h4 className='text-yellow-600 text-xl font-semibold'> $50.00</h4>
            </div>
          </div>

          <div className=' w-full sm:w-[48%] md:w-[31%] flex items-center justify-between p-4  bg-[#6d73fb] rounded-lg '>
            <div className=' w-[60px] sm:w-[80px] h-[60px] sm:h-[80px]  shadow-md rounded-full '>
              <img className=' w-full h-full object-cover rounded-full ' src="https://i.ibb.co.com/P9ycKL2/star1.png" alt="" />
            </div>

            <div className='flex items-start justify-center flex-col  '>
              <h4 className=' text-white text-xl font-bold '>Gold</h4>
              <span className='text-white text-sm font-semibold'> 1 Grabing 0.05 usd </span>
              <span className='text-white text-sm font-semibold'> Daily Grab 10 times </span>
              <span className='text-white text-sm font-semibold'> Daily Earning 0.50 usd</span>
            </div>
            <div className=' bg-white/50  px-2 rounded-full shadow-md'>
              <h4 className='text-yellow-600 text-xl font-semibold'> $50.00</h4>
            </div>
          </div>


        
        </div>


      </div>

      <footer className=" bg-[#989494] fixed bottom-0 w-full h-[65px] py-2 px-6 sm:px-14 flex items-center justify-between   ">
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
</footer>
    </div>
  )
}

export default MembershipPlan