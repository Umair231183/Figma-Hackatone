import React from "react";
import Image from "next/image";

const Footer = () => {
  return(
   <footer>
    <div className="mt-[20px] w-[1440px] h-[380px]">
    <Image 
    src="/Footer.png"
    alt="Footer"
     width={1440} 
     height={380} 
     className=""/>
     </div>
   </footer>
  )
}

export default Footer