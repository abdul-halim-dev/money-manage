
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { FaAngleLeft,FaLock, FaSackDollar, FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const Signup = () => {




  return (
    <div className=' relative w-full   bg-primary flex items-center justify-center flex-col gap-3 py-[90px] p-4' >
      <div className=' absolute top-0  w-full flex items-center justify-between p-3'>
        <Link className='text-active text-lg ' to={"/login"}> <FaAngleLeft /> </Link>
        <Link className='text-active text-[16px] ' to={"/login"}>
          Login
        </Link>
      </div>


      <div className=' w-full sm:w-[50%] shadow-md flex relative items-center justify-center gap-3 p-4 rounded-lg flex-col bg-secondary '>
        <form className=' pt-[70px] w-full flex items-start justify-center flex-col gap-1 '>

          <div className='w-full flex items-center justify-center flex-col gap-6'>

            <div className=' w-full flex items-center justify-center gap-0' >
              <span className=' w-[13%] sm:w-[8%] bg-secondary h-[40px] rounded-tl-lg rounded-bl-lg border-2 flex items-center justify-center text-xl border-[#bbbbbb] '>  <FaUser /> </span>
              <input className=' w-[87%]  sm:w-[92%] outline-none h-[40px] pl-3 rounded-tr-lg rounded-br-lg border-b-2 border-r-2 border-t-2 border-[#bbbbbb] '
                type="text"
                name="username"
                id='username'
                placeholder='User Name'
                required
              />
            </div>
          
            <div className=' w-full flex items-center justify-center gap-0' >
              <span className=' w-[13%] sm:w-[8%] bg-secondary h-[40px] rounded-tl-lg rounded-bl-lg border-2 flex items-center justify-center text-xl border-[#bbbbbb] '>  <BsFillTelephoneOutboundFill /> </span>
              <input className=' w-[87%]  sm:w-[92%] outline-none h-[40px] pl-3 rounded-tr-lg rounded-br-lg border-b-2 border-r-2 border-t-2 border-[#bbbbbb] ' type="tel" name="number"
                id='number'
                placeholder='Enter Number'
                required
              />
            </div>
            <div className=' w-full flex items-center justify-center gap-0' >
              <span className='  w-[13%] sm:w-[8%] bg-secondary h-[40px] rounded-tl-lg rounded-bl-lg border-2 flex items-center justify-center text-xl border-[#bbbbbb] '>  <FaLock /> </span>
              <input className='  w-[87%]  sm:w-[92%] outline-none h-[40px] pl-3 rounded-tr-lg rounded-br-lg border-b-2 border-r-2 border-t-2 border-[#bbbbbb] ' type="password" name="password"
                id='password'
                placeholder='Enter Password'
                required
              />
            </div>
          </div>
          <div class="flex items-center py-4">
            <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 bg-active rounded-full " />
            <label for="link-checkbox" class="ms-2 text-sm  ">I agree with </label>
          </div>
          <button className=' mt-5 w-full bg-active py-2 text-[16px] rounded-lg text-secondary font-semibold ' type="submit"> Register Now </button>
        </form>
        <div className='w-full flex items-center justify-center flex-col gap-1'>
          <Link className=' text-[#2d8734] text-lg font-semibold ' to={"/login"}>  Already Have Account? </Link>
        </div>

        <div className=' w-[90px] h-[90px] absolute -top-[40px] bg-secondary ring-[#2d8734] flex items-center justify-center flex-col rounded-full ring-4 '>
          <span className='text-active text-2xl'>  <FaSackDollar />  </span>
          <p className='text-[12px] font-semibold uppercase '> Earn Shop </p>
        </div>

      </div>
    </div>
  );
}

export default Signup;
