import React, { useState } from 'react';
import { lock1 } from '../assets';

const Hero = () => {
  const [password, setPassword] = useState('');

  const handlePasswordSubmit = () => {
    if (password === 'DS402') {
      window.location.href =
        'https://docs.google.com/spreadsheets/d/199irX1MK7D6X8YFgorY54HDpj-Iin6xI8SBr0IAUyDM/edit?usp=sharing';
    } else if (password === '') {
      alert('Please enter a password.');
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handlePasswordSubmit();
    }
  };

  return (
    <div className='py-20 relative z-[10]'>

      <img
        className='w-[400px] h-[400px] opacity-[0.6] z-[1] animate-updown object-contain absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'
        src={lock1}
        alt=''
      />

      <div className='w-full h-full relative z-[10] flex items-center flex-col gap-14'>
        <h1 className='text-white text-3xl w-full text-center sm:text-4xl lg:text-6xl font-bold'>
          A.Sabour Engineer <br />
          Data structure project
        </h1>

        <div className='flex-1 flex flex-col gap-3 justify-center items-center '>

          <h2 className='text-white text-2xl w-full text-center sm:text-3xl lg:text-4xl'>
            Please Enter Password <br />
            To View Reservations
            {/* <span className="text-gradient bg-gradient-to-r from-gray-800 to-gray-400">Reservations</span> */}
          </h2>

          <div className='w-full flex justify-center my-3 relative z-[12]'>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyUp={handleEnterKeyPress}
              className='outline-none rounded-[25px] text-[#949494] text-[20px] w-[250px] sm:w-[400px] bg-[#2a2a33c7] px-5 py-1 h-[40px] placeholder:text-[17px]'
              placeholder='Enter Password'
              type='password'
            />
            <button
              onClick={handlePasswordSubmit}
              className='text-[#2a2a33] rounded-[25px] px-5 font-bold absolute right-0 h-[40px] flex justify-center items-center bg-white'>
              Let's Go
            </button>
          </div>

          <div className=''>
                
          </div>

        </div>

      </div>

    </div>
  );
};

export default Hero;
