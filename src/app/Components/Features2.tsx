// import React from "react";
// import Image from "next/image";

// const Features2 = () => {
//   return(
//         <main className="w-[1440px] h-[603px] flex justify-around ">
//          <div className="w-[720px] h-[603px] bg-[#FFFFFF]">
//          <div className="left-[720px]">
//          <Image src={"/Feature2.jpeg"} alt="Feature2" width={720} height={603}/>
//          </div>
//           <div className="w-[536px] h-[225px] top-[72px] left-[84px] gap-[25px]">
//            <h2 className="w-[514px] h-[68px] font-[Clash Display] font-normal text-[24px] leading-[33.6px text-[#2A254B]">From a studio in London to a global brand with
//            over 400 outlets</h2>
//            <p className="w-[536px] h-[132px] font-[Satoshi] font-normal text-[16px] leading-[21.6px] text-[#505977]">When we started Avion, the idea was simple. Make high quality furniture <br/>affordable and available for the mass market. <br/>
//            <br/>Handmade, and lovingly crafted furniture and homeware is what we live,<br/> breathe and design so our Chelsea boutique become the hotbed for the<br/> London interior design community.</p>
//           </div>
//           <button className="w-[150px] h-[56px] top-[493px] left-[84px] py-4 px-5 gap-[10px] bg-[#F9F9F9]">
//             <p className="w-[86px] h-[24px] font-[Satoshi] font-normal text-[16px] leading-[24px] text-[#2A254B]">Get in touch
//               </p>
//           </button>
//          </div>
//         </main>
//   )
// }

// export default Features2


import React from "react";
import Image from "next/image";

const Features2 = () => {
  return (
    <main className="w-full max-w-[1440px] max-h-[603px] flex justify-center items-center mx-auto">
      <div className="flex flex-col md:flex-row bg-white">
        <div className="w-full md:w-[720px] p-6 md:p-8">
          <h2 className="text-[24px] leading-[1.4] font-normal text-[#2A254B] font-clash">
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <p className="mt-6 text-[16px] leading-[1.5] text-[#505977] font-satoshi">
            When we started Avion, the idea was simple: Make high-quality
            furniture affordable and available for the mass market.
            <br />
            <br />
            Handmade, lovingly crafted furniture and homeware are what we live
            for, breathe, and design. Our Chelsea boutique became a hotbed for
            the London interior design community.
          </p>
          <button className="mt-[701.99px] px-6 py-3 bg-[#F9F9F9] text-[#2A254B] text-[16px] font-satoshi border border-gray-300 rounded hover:bg-gray-100">
            Get in touch
          </button>
        </div>
          {/* Image Section */}
          <div className="w-full md:w-[720px]">
          <Image
            src="/Feature2.jpeg"
            alt="Feature2"
            width={720}
            height={603}
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default Features2;
