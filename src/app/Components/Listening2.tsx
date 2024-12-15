import React from "react";
import Image from "next/image";

const Listening2 = () => {
  return(
     <main className="w-[1440px] h-[744px]">
      <div className="w-[330px] h-[45px] top-[64px] left-[80px] ml-[2.3%] mb-[2%]">
        <h2 className="font-[Clash Display] font-normal text-[32px] leading-[44.8px] text-[#2A254B]">Our popular products</h2>
      </div>
      <div className="flex justify-around ">
      <div className="top-[134px] left-[80px] gap-[24px] ">
        <Image src={"/2Product Card1.png"} alt="2Product Card1" width={630} height={462}/>
      </div>
       <div className="top-[136px] left-[1055px] gap-[24px]">
        <Image src={"/2Product Card2.png"} alt="2Product Card2" width={305} height={462}/>
       </div>
       <div className="top-[136px] left-[730px] gap-[24px]">
       <Image src={"/2Product Card3.png"} alt="2Product Card3" width={305} height={462}/>
       </div>
       </div>
       <div className="w-[170px] h-[56px] top-[640px] left-[635px] px-8 py-2 ml-[42.5%] mt-[3%] gap-[10px] bg-[#F9F9F9]">
      <button className="w-[106px] h-[24px] font-serif font-normal text-[16px] leading-[24px] text-[#2A254B]">View collection</button>
       </div>
     </main>
  );
}

export default Listening2