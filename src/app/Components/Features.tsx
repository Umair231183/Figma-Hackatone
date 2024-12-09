import React from "react";
import Image from "next/image";

const Features = () => {
  return(
       <main className="w-[1440px] h-[355px] text-white">
        <h3 className="font-sans font-normal text-[24px] leading-[33.6px] text-[#2A254B] flex justify-center items-center">
          <Image src={"/What makes our brand different.png"} alt="brand" width={366} height={34}/>
        </h3>
        <div className="w-[1440px] h-[355px] text-white flex justify-between items-center" >
        <div className="w-[270px] h-[124px] top-[145px] lefy-[86px]  flex  justify-between gap-[16px]" >
          <Image src={"/Feature block1.png"} alt="Features block1" width={270} height={124}/>

      <div className="w-[266px] h-[124px] top-[145px] left-[415px]  gap-[16px]">
        <Image src={"/Feature block.png"} alt="Features block" width={266} height={124}/>
        
        <div className='w-[235px] h-[124px] top-[145px] left-[739px]  gap-[16px]'>
          <Image src={"/Feature block2.png"} alt="Features block2" width={265} height={124}/>
         </div>
        </div>
      </div>
      </div>
      </main>
  );
}

export default Features

  