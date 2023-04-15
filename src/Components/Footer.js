import React from "react";
import { FaYoutube, FaMailchimp, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';



const Footer =()=>{
return(

    <div>
        
        <section className="relative w-full h-[30vh] bg-[#3586ff] overflow-hidden">
  <div class="absolute b-0 l-0 w-full h-[100px] bg-[url('https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png')] bg-[length:1000px_100px] air1"></div>
  <div class="absolute b-0 l-0 w-full h-[100px] bg-[url('https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png')] bg-[length:1000px_100px]   air2"></div>
  <div class="absolute b-0 l-0 w-full h-[100px] bg-[url('https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png')] bg-[length:1000px_100px] air3 "></div>
  <div class="absolute b-0 l-0 w-full h-[100px] bg-[url('https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png')] bg-[length:1000px_100px]  air4"></div>
</section>

<footer className=" py-4">
      <div className="flex justify-center">
        <a href="#" className="text-gray-700 hover:text-red-600 mx-4">
          <SiGmail size={24} />
        </a>
        <a href="#" className="text-gray-700 hover:text-red-800 mx-4">
          <FaYoutube size={24} />
        </a>
        <a href="#" className="text-gray-700 hover:text-red-400 mx-4">
          <FaInstagram size={24} />
        </a>
      </div>
    </footer>


 
  <div
    class="bg-neutral-300 p-4 text-center text-neutral-900  ">
    © 2023 Copyright:
    <a
      class="text-neutral-800 "
      href="https://tailwind-elements.com/"
      > PTU IEEE SB</a
    >
  </div>

    </div>
)
}

export default Footer;