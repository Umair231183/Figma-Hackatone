import React from "react";

const Email = () => {
  return(
     <main className="w-[1440px] h-[481px] bg-[#F9F9F9]">
       <div className="flex flex-col items-center justify-center">
        <div className="w-[571px] h-[114px] top-68px left-351px gap-16px">
         <p className="w-[571px] h-[50px] font-[Clash Display] font-normal text-[36px] leading-[50.4px] text-[#2A254B]">Join the club and get the benefits</p>
         <h5 className="font-[Satoshi] font-normal text-[16px] leading-[24px] px-16 text-[#2A254B]">Sign up for our newsletter and receive exclusive offers on new   ranges, sales, pop up stores and more</h5>
        </div>
        <div className="w-[1273px] h-[364px] top-[52px] left-[93px] bg-[#FFFFFF] ml-[48%]">
          <input type="text" placeholder="your@email.com" className="w-[470px] h-[56px] top-[254px] left-[400px]"/>
          <button className="w-[118px] h-[56px] py-4 px-8 gap-[10px] bg-[#2A254B]">
            <span className="w-[54px] h-[24px] font-[Satoshi] font-normal text-[16px] leading-[24px]  text-[#FFFFFF]">Sign up</span>
          </button>
        </div>
        </div>
     </main>
  );
}

export default Email
