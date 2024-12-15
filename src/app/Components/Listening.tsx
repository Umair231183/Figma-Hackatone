import React from "react";
import Image from "next/image";

const Listening = () => {
  return(
     <main className="w-[1440px] h-[761px] bg-[#FFFFFF]">
      <h2 className="w-[217px] h-[39px] top-[80px] left-[80px] font-serif font-normal text-[32px] leading-[39.36px] text-[#2A254B] ml-[2.2%] mb-[2%]">New ceramics</h2>
      <div className="flex justify-around">
      <div className="top-[152px] left-[80px] gap-[24px]">
        <Image src={"/Product Card4.png"} alt="Product Card4" width={305} height={462}/>
       </div>
       <div className="top-[152px] left-[405px] gap-[24px]">
        <Image src={"/Product Card3.png"} alt="Product Card3" width={305} height={462}/>
       </div>
       <div className="top-[152px] left-[730px] gap-[24px] ">
        <Image src={"/Product Card2.png"} alt="Product Card2" width={305} height={462}/>
       </div>
       <div className="top-[152px] left-[1055px] gap-[24px] ">
          <Image src={"/Product Card.png"} alt="Product Card1" width={305} height={462}/>
       </div>
      </div>
      <button className="w-[170px] h-[56px] top-[649px] left-[635px] px-8 py-2 gap-[10px] bg-[#F9F9F9] ml-[43.9%] mt-[8px]">
        <span className="w-[106px] h-[24px] font-sans font-normal text-[16px] leading-[24px text-[#2A254B]">View collection</span>
       </button>
     </main>

  
  );
}

export default Listening