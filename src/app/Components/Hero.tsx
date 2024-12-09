import React from 'react'
import Image from 'next/image';
const Hero = () => {
  return (
       <main className='w-[1440px] h-[704px] bg-white text-[#FFFFFF] flex items-center justify-center'>  
          <div className='w-[1280px] h-[584px] top-[60px] left-[80px] bg-[#2A254B] flex justify-between'> 
            <div className='w-[513px] h-[187px] top-[60px] left-[60px] gap-[41px] flex justify-center items-center '>
              <div className='w-[513px] h-[90px] ml-20'>
              <h2 className=' font-serif font-normal text-[32px] leading-[44.8px]'>The furniture brand for the future, with timeless designs</h2>
              <button className='w-[170px] h-[60px] px-8 py-4  gap-[10px] bg-[#F9F9F926] flex justify-center items-center mt-10'>
                <span className='w-[106px] h-[24px] font-sans font-normal mb-4 text-[16px]  leading-[24px]'>View collection</span>
              </button>

              <div className='w-[602px] h-[81px] top-[443px] left-[60px] mt-[40%]'>
               <h2 className='font-sans font-normal text-[18px] leading-[27px] text-[#FFFFFF]'>A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.</h2> 
            </div>
              </div>
            </div>
            <Image 
            src={"/Right Image.png"} 
            alt='Right Image' 
            width={520} 
            height={584} 
            className='left-[760px]'/>

          </div>
       </main>
  );
}

export default Hero