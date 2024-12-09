import React from "react";
 import { CiSearch } from "react-icons/ci";
 import { PiShoppingCartThin } from "react-icons/pi";
 import { FaRegUserCircle } from "react-icons/fa";
import Image from 'next/image';
 const Navbar = () => {
   return (
     <header className='w-[1440px] h-[132px] bg-[#FFFFFF] '>
      <div className='flex items-center justify-between '>
     <CiSearch  className='w-[16px] h-[16px] top-[26px] left-[28px] ml-4 mt-4'/>
     
     <PiShoppingCartThin  className='w-[14.51px] h-[14px] top-[1px] text-[#2A254B] flex ml-[93%] mt-4' />
     
     <FaRegUserCircle  className='top-[1px] left-[1px] w-[10px] text-[#2A254B] flex gap-0 mr-4 mt-4'/>

     {/* Divider */}
     <hr className=' w-[1386px] absolute top-[70px] left-[28px] border-[1px] p-[1px] rotate-0 align-middle bg-black bg-opacity-10 flex gap-0 '/>
      
      {/* Main Link */}
      <ul className='w-[675px] h-[22px] absolute top-[90px] left-[382px] gap-11 flex text-[#726E8D] 
      sm:disabled:'>
        <li>Plant pots</li>
        <li>Ceramics</li>
        <li>Tables</li>
        <li>Chairs</li>
        <li>Crockery</li>
        <li>Tableware</li>
        <li>Cutlery</li>
        </ul>
        <p className='w-[65px] h-[30px] absolute top-5 left-[687px] font-semibold text-[24px] leading-[29.52px]  text-[#22202E] flex'>Avion</p>
        <hr className='w-full'/>
     </div>
     </header>
   )
  }
export default Navbar;
