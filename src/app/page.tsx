// import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Listening from "./Components/Listening";
import Listening2 from "./Components/Listening2";
import Email from "./Components/Email-sign-up";
import Features2 from "./Components/Features2";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <div>
   <Navbar/>
   <Hero/>
   <Features/>
   <Listening/>
   <Listening2/>
   <Email/>
   <Features2/>
   <Footer/>
   </div>
  );
}
