import React from "react";
import ptulogo from './assests/ptulogo.png'

import ptustb from "./assests/ptustb.png";
// import ptustbm from "./assests/ptustbm.png";

const Header = () =>{
    return(
        <div>

        <div className="py-2 w-full bg-gradient-to-tl from-sky-400 to-indigo-700">
            <p className="text-3xl mx-auto text-center py-2 text-purple-900"><span className="block sm:hidden">PTU - IEEE SB</span><span className="hidden sm:block">PTU - IEEE STUDENT BRANCH</span></p>
        </div>

        <section class="flow-root w-full  bg-[url('../public/head.gif')] bg-fixed bg-cover bg-center">
          <div className="float-left pl-10 lg:pl-[200px]">
      <img className='max-w-lg max-h-24 md:max-h-40   ' alt='logo' src={ptulogo}/>
      </div>
        <div className=' float-right pt-3 sm:pt-0 pr-10 lg:pr-[200px]'>
        <img className='sm:max-w-lg max-w-[150px] max-h-16 sm:max-h-28 md:max-h-40    ' alt='ciclogo' src={ptustb}/>
        </div>
      
    </section >
    
      
      </div>
    )
}

export default Header;