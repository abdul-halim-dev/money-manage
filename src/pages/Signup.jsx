 

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import { FaSackDollar } from 'react-icons/fa6';
 

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 

  const validate = (field, value) => {
    let error = '';

    if (field === 'username' && (!value || value.length < 3)) {
      error = ' ব্যবহারকারীর নাম কমপক্ষে 3 অক্ষরের হতে হবে';
    }
    if (
      field === 'password' &&
      (!value ||
        !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(value))
    ) {
      error =
'পাসওয়ার্ডে কমপক্ষে একটি বড় হাতের অক্ষর, কমপক্ষে একটি ছোট হাতের অক্ষর, কমপক্ষে একটি সংখ্যা এবং অন্তত একটি বিশেষ অক্ষর থাকতে হবে'
    }
    if (field === 'phone' && (!value || !/^\d{11}$/.test(value))) {
      error = 'ফোন নম্বরটি অবশ্যই 11 সংখ্যার হতে হবে';
    }
  
    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
    return error === '';
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.keys(formData).every((field) => validate(field, formData[field]));
    if (isValid) {
      navigate('/success', { state: { formData } });
    }
  };

  return (
    <div className="w-full min-h-[70vh] sm:hidden bg-[#ebebeb] px-6 py-5 flex items-center justify-center">
     
     <div className="bg-white  w-full flex items-center justify-center flex-col gap-3 p-4  rounded-md shadow-md relative ">

      <form className="w-full flex items-start justify-center flex-col gap-8 pt-[80px]" onSubmit={handleSubmit}>
         {[
         
          { name: 'username', label:<FaUser/> ,placeholder: 'ব্যবহারকারীর নাম'},
          { name: 'phone', label: <BsFillTelephoneOutboundFill/> , placeholder: 'ফোন নম্বর ' },

        ].map(({ name, label, type = 'text', placeholder }) => (
          <div key={name} className=" relative  w-[100%] flex items-center justify-center border-2 boder-[#f0f0f0] gap-3 rounded-xl ">


            <label className=" text-xl text-black   w-[12%] h-[42px] flex items-center justify-center" htmlFor={name}>
              {label}
            </label>
            <input
            
               type={type}
              name={name}
              id={name}
              value={formData[name]}
              onChange={handleChange}
              onBlur={handleBlur}
              onInput={(e) => {
                if (name === 'phone' || name === 'aadhar') {
                  e.target.value = e.target.value.replace(/\D/g, '');
                }
              }}
              placeholder={placeholder}
              className={` rounded-tr-xl rounded-br-xl pl-3 border-l-2 boder-[#f0f0f0] text-black  w-[88%] h-[42px] text-xl outline-none focus:border-2 focus:border-[#ff0084]  ${
                errors[name] ? 'border-red-500' : ''
              }`}
 
            />
            
            <div className='w-full absolute top-[100%] left-0'>
            {errors[name] && <p className="text-red-500 text-xs italic">{errors[name]}</p>}

            </div>
          </div>

        ))}
    
        <div className=" relative w-[100%] flex items-center justify-center border-2 boder-[#f0f0f0] gap-3 rounded-xl ">
          <label className=" text-xl text-black   w-[12%] h-[42px] flex items-center justify-center" htmlFor="password">
          <FaLock/>
          </label>
          
            <input
              type={passwordShown ? 'text' : 'password'}
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='পাসওয়ার্ড'
              className={`rounded-tr-xl rounded-br-xl pl-3 border-l-2 boder-[#f0f0f0]  w-[88%] h-[42px] text-xl outline-none focus:border-2 focus:border-[#ff0084] ${
                errors.password ? 'border-red-500' : ''
              }`}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 top-0 px-3 py-2 text-slate-700"
              onClick={togglePasswordVisibility}
            >
              {passwordShown ? <FaEye/> : <FaEyeSlash/>}
            </button>
 
          <div className='absolute top-[100%] left-0'>
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
          </div>
        </div>
        
        <div className="flex items-center justify-between w-full mt-6 ">
          <button
            type="submit"
            disabled={Object.keys(errors).some((key) => errors[key])}
             className=" w-full bg-[#ff0084] border-0  text-lg font-semibold py-2 rounded-lg text-white focus:outline-none focus:shadow-outline disabled:opacity-50"
          >
            Sign Up
          </button>
        </div>

        <div className='flex items-center justify-center w-full '>
       <Link to={'/login'} className="text-lg text-[#9a9a9a] cursor-pointer   "> Not Register Yet?</Link>
      </div>
      </form>
      <div className=" absolute bg-[#fefefc] -top-[50px]  w-[105px] h-[105px] ring-4 ring-[#94c5a5] rounded-full flex items-center justify-center flex-col  ">
 
  <span className="text-3xl text-[#ff0084] "> <FaSackDollar/> </span>
  <span className="uppercase text-sm font-semibold">Earn Shop</span>
  </div>

    </div>
    </div>
  );
};

export default Signup;
