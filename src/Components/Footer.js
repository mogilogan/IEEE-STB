import React from "react";
import ButtonMaitto from './ButtonMaitto'
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import { useSearchParams } from "react-router-dom";



const Footer =()=>{

  const [searchParams, setSearchParams] = useSearchParams();
return(

    <div>
        
        <section className="relative w-full h-[30vh]  overflow-hidden">
  <div class="absolute b-0 l-0 w-full h-[100px] bg-[url('../public/wave.png')] bg-[length:1000px_100px] air1"></div>
  <div class="absolute b-0 l-0 w-full h-[100px] bg-[url('../public/wave.png')] bg-[length:1000px_100px]   air2"></div>
  <div class="absolute b-0 l-0 w-full h-[100px] bg-[url('../public/wave.png')] bg-[length:1000px_100px] air3 "></div>
  <div class="absolute b-0 l-0 w-full h-[100px] bg-[url('../public/wave.png')] bg-[length:1000px_100px]  air4"></div>
</section>

<footer className=" bg-[#91cee4] py-4">
      <div className="flex justify-center">
        <a href="#" className="text-gray-700 hover:text-red-500 mx-4">
        <ButtonMaitto mailto="ieee@ptuniv.edu.in"></ButtonMaitto>
        </a>
        <a href="https://www.youtube.com/@PTU_IEEE_SB" className="text-gray-700 hover:text-red-700 mx-4">
          <FaYoutube size={40} />
        </a>
        <a href="https://www.instagram.com/ptu_ieee_sb/" className="text-gray-700 hover:text-red-400 mx-4">
          <FaInstagram size={40} />
        </a>
      </div>
    </footer>


 
  <div
    class="bg-[#4596b4] p-4 text-center text-neutral-900  ">
    © 2023 Copyright:
    <a
      class="text-neutral-800 "
      
      > PTU IEEE SB</a
    >
    <span className="text-[20px] text-blue-200"><br/>{searchParams.get('type')}</span>
  </div>

    </div>
)
}

export default Footer;