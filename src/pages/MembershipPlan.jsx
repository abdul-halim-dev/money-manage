import React from 'react'
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

import Footer from '../component/Footer';
import Header from '../component/Header';

const MembershipPlan = () => {
  return (

    <div className=' w-full    bg-primary '>

      <Header />


      <div className='w-full pb-[80px]  flex items-center justify-center flex-col gap-4 '>

        <div className='w-full bg-secondary flex items-center justify-between px-6 py-2'>
          <h3 className='text-2xl font-bold text-black'>প্যাকেজ </h3>
        </div>

        <div className='w-[96%] sm:w-[90%] flex items-center justify-center gap-4 flex-wrap py-4 '>

          <div className=' w-full sm:w-[31%] flex items-center justify-between px-2 py-3  bg-yellow-500 rounded-lg '>
            <div className=' w-[45px] sm:w-[60px] h-[45px] sm:h-[60px] shadow-md rounded-full '>
              <img className='w-full h-full rounded-full ' src="https://i.ibb.co.com/NZ1ksMv/stari.png" alt="" />
            </div>
            <div className='flex items-start justify-center flex-col gap-1 '>
              <h4 className=' text-white text-xl font-bold '>  গোল্ড </h4>
              <span className='text-white text-[12px] sm:text-sm font-semibold'> একবারে  $0.05 টাকা  </span>
              <span className='text-white text-[12px] sm:text-sm font-semibold'> প্রতিদিন ১০ বার ধরুন </span>
              <span className='text-white text-[12px] sm:text-sm font-semibold'> প্রতিদিন $0.50 আয় করুন</span>
            </div>
            <div className=' bg-white/50  px-2 rounded-full shadow-md'>
              <h4 className='text-yellow-600 text-xl font-semibold'> $50.00</h4>
            </div>
          </div>

          <div className=' w-full sm:w-[31%] flex items-center justify-between px-2 py-3  bg-indigo-500 rounded-lg '>
            <div className=' w-[45px] sm:w-[60px] h-[45px] sm:h-[60px] shadow-md rounded-full '>
              <img className='w-full h-full rounded-full ' src="https://i.ibb.co.com/NZ1ksMv/stari.png" alt="" />
            </div>
            <div className='flex items-start justify-center flex-col gap-1 '>
              <h4 className=' text-white text-xl font-bold '>  প্লাটিনাম  </h4>
              <span className='text-white text-[12px] sm:text-sm font-semibold'> একবারে $0.10 টাকা  </span>
              <span className='text-white text-[12px] sm:text-sm font-semibold'> প্রতিদিন ১০ বার ধরুন </span>
              <span className='text-white text-[12px] sm:text-sm font-semibold'> প্রতিদিন $1.00 আয় করুন</span>
            </div>
            <div className=' bg-white/50  px-2 rounded-full shadow-md'>
              <h4 className='text-yellow-600 text-xl font-semibold'> $100.00</h4>
            </div>
          </div>

          <div className=' w-full sm:w-[31%] flex items-center justify-between px-2 py-3  bg-orange-500 rounded-lg '>
            <div className=' w-[45px] sm:w-[60px] h-[45px] sm:h-[60px] shadow-md rounded-full '>
              <img className='w-full h-full rounded-full ' src="https://i.ibb.co.com/NZ1ksMv/stari.png" alt="" />
            </div>
            <div className='flex items-start justify-center flex-col gap-1 '>
              <h4 className=' text-white text-xl font-bold '>  ডায়মন্ড   </h4>
              <span className='text-white text-[12px] sm:text-sm font-semibold'> একবারে $0.20 টাকা  </span>
              <span className='text-white text-[12px] sm:text-sm font-semibold'> প্রতিদিন ১০ বার ধরুন </span>
              <span className='text-white text-[12px] sm:text-sm font-semibold'> প্রতিদিন $2.00 আয় করুন</span>
            </div>
            <div className=' bg-white/50  px-2 rounded-full shadow-md'>
              <h4 className='text-yellow-600 text-xl font-semibold'> $200.00</h4>
            </div>
          </div>

          <div className=' w-full sm:w-[31%] flex items-center justify-between px-2 py-3  bg-blue-500 rounded-lg '>
            <div className=' w-[45px] sm:w-[60px] h-[45px] sm:h-[60px] shadow-md rounded-full '>
              <img className='w-full h-full rounded-full ' src="https://i.ibb.co.com/NZ1ksMv/stari.png" alt="" />
            </div>
            <div className='flex items-start justify-center flex-col gap-1 '>
              <h4 className=' text-white text-xl font-bold '>  ক্যারস্টাল    </h4>
              <span className='text-white text-[12px] sm:text-sm font-semibold'> একবারে $0.50 টাকা  </span>
              <span className='text-white text-[12px] sm:text-sm font-semibold'> প্রতিদিন ১5 বার ধরুন </span>
              <span className='text-white text-[12px] sm:text-sm font-semibold'> প্রতিদিন $7.50 আয় করুন</span>
            </div>
            <div className=' bg-white/50  px-2 rounded-full shadow-md'>
              <h4 className='text-yellow-600 text-xl font-semibold'> $500.00</h4>
            </div>
          </div>

          <div className=' w-full sm:w-[31%] flex items-center justify-between px-2 py-3  bg-cyan-500 rounded-lg '>
            <div className=' w-[45px] sm:w-[60px] h-[45px] sm:h-[60px] shadow-md rounded-full '>
              <img className='w-full h-full rounded-full ' src="https://i.ibb.co.com/NZ1ksMv/stari.png" alt="" />
            </div>
            <div className='flex items-start justify-center flex-col gap-1 '>
              <h4 className=' text-white text-xl font-bold '>  ক্যারস্টাল    </h4>
              <span className='text-white text-[12px] sm:text-sm font-semibold'> একবারে $0.50 টাকা  </span>
              <span className='text-white text-[12px] sm:text-sm font-semibold'> প্রতিদিন ১5 বার ধরুন </span>
              <span className='text-white text-[12px] sm:text-sm font-semibold'> প্রতিদিন $7.50 আয় করুন</span>
            </div>
            <div className=' bg-white/50  px-2 rounded-full shadow-md'>
              <h4 className='text-yellow-600 text-xl font-semibold'> $500.00</h4>
            </div>
          </div>

          <div className=' w-full sm:w-[31%] flex items-center justify-between px-2 py-3  bg-fuchsia-500 rounded-lg '>
            <div className=' w-[45px] sm:w-[60px] h-[45px] sm:h-[60px] shadow-md rounded-full '>
              <img className='w-full h-full rounded-full ' src="https://i.ibb.co.com/NZ1ksMv/stari.png" alt="" />
            </div>
            <div className='flex items-start justify-center flex-col gap-1 '>
              <h4 className=' text-white text-xl font-bold '>  ক্যারস্টাল    </h4>
              <span className='text-white text-[12px] sm:text-sm font-semibold'> একবারে $0.50 টাকা  </span>
              <span className='text-white text-[12px] sm:text-sm font-semibold'> প্রতিদিন ১5 বার ধরুন </span>
              <span className='text-white text-[12px] sm:text-sm font-semibold'> প্রতিদিন $7.50 আয় করুন</span>
            </div>
            <div className=' bg-white/50  px-2 rounded-full shadow-md'>
              <h4 className='text-yellow-600 text-xl font-semibold'> $500.00</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MembershipPlan