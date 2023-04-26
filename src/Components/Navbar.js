import React,{useState} from "react";

import {Link} from 'react-router-dom'


const Navbar = () =>{

    const [showSidebar, setShowSidebar] = useState(false);
   
    return(
        
<>

<div className="hidden py-10 md:block">
            <div class="flex justify-center rounded-lg text-lg" role="group">

           <Link to="/"><button  class="bg-white md:py-[1.37rem] text-blue-500 hover:bg-blue-500 hover:text-white border border-r-0 border-blue-500 rounded-l-lg px-4 lg:py-2 mx-0 outline-none focus:shadow-outline">HOME</button></Link>
            <Link to="/ptu-ieee-stb"><button class="bg-white  text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline">PTU IEEE SB & Members</button></Link>
            <Link to="off-members"><button  class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline">Office Bearers</button></Link>

    <button class="bg-white group text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline">
    
        
          <span class="mr-1">WIE
         
          </span>
       
        <ul  class="absolute z-[9000] hidden text-gray-700 pt-4 group-hover:block">
          <Link to="aboutwie"><li  class="">
            <p
              class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              
              >About WIE</p
            >
          </li></Link>
          <Link to="vision"><li class="">
            <p
              class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              
              >Vision & Mission</p
            >
          </li></Link>
          <Link to="/wiemem"> <li class="">
            <p
              class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
             
              >Members</p
            >
          </li></Link>
        </ul>
      </button>

    <Link><button class="bg-white group text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline">
    
        
          <span class="mr-1">Annual Report
         
          </span>
       
        <ul class="absolute z-[9000] hidden text-gray-700 pt-4 group-hover:block">
        <Link to="annual-r-2021"><li class="">
            <p
              class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              
              >AR 2021</p
            >
          </li></Link>
          <Link to="annual-r-2022"><li class="">
            <p
              class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              
              >AR 2022</p
            >
          </li></Link>
          <Link to="annual-r-2023"> <li class="">
            <p
              class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
             
              >AR 2023</p
            >
          </li></Link>
        </ul>
      </button></Link>
      <Link to="/upcoming-events"><button  class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline">Upcoming Events</button></Link>
    <Link to="/gallery"><button  class="bg-white md:py-[1.37rem] text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 lg:py-2 mx-0 outline-none focus:shadow-outline">Gallery</button></Link>
    <Link to="/contact-us?type=Website%20designed%20by%20MOGINDER.E,%20ECE%20-%203rd%20Year"><button  class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-l-0 border-blue-500 rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline">Contact Us</button></Link>
  </div>
        </div>
        <div className="block md:hidden pt-10">
{showSidebar ? (
 <div className="bg-slate-900">  <button
    className="flex  text-4xl text-white  items-center cursor-pointer fixed top-10 mx-auto right-[106px] sm:right-40 z-[2003]"
    onClick={() => setShowSidebar(!showSidebar)}
  >
    x
  </button></div>
) : (
  <svg
    onClick={() => setShowSidebar(!showSidebar)}
    className="   flex items-center cursor-pointer text-center mx-auto"
    fill="#2563EB"
    viewBox="0 0 100 80"
    width="40"
    height="40"
  >
    <rect width="100" height="10"></rect>
    <rect y="30" width="100" height="10"></rect>
    <rect y="60" width="100" height="10"></rect>
  </svg>
)}

<div
  className={`top-0 right-0 w-[50vw] bg-blue-400  p-10 pl-15 text-white fixed h-full z-[2002]  ease-in-out duration-300 ${
    showSidebar ? "translate-x-0 " : "translate-x-full"
  }`}
>
<div className="pt-[170px]  mx-auto"> 
   <Link to="/"> <button onClick={()=>{setShowSidebar(!showSidebar);}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-r-0 border-blue-500  px-2 min-w-[160px] max-w-[1200px] py-2 mx-0 outline-none focus:shadow-outline">HOME</button></Link>
   <Link to="/ptu-ieee-stb"> <button onClick={()=>{setShowSidebar(!showSidebar);}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 min-w-[160px] max-w-[160px] outline-none focus:shadow-outline">PTU IEEE SB & Members</button></Link>
   <Link to="/Off-members"><button onClick={()=>{setShowSidebar(!showSidebar);}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 min-w-[160px] max-w-[160px] outline-none focus:shadow-outline">Office Bearers </button></Link>

    <button class="bg-white group text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 min-w-[160px] max-w-[1200px] outline-none focus:shadow-outline"> <button
          
          >
            <span class="mr-1">WIE
           
            </span>
          </button>
          <ul class="absolute   hidden text-gray-700 pr-[80px] group-hover:block">
          <Link onClick={()=>{setShowSidebar(!showSidebar);}} to="/aboutwie"><li class="">
              <p
                class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                
                >About WIE</p
              >
            </li></Link>
            <Link onClick={()=>{setShowSidebar(!showSidebar);}} to="/vision"><li class="">
              <p
                class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                
                >VISION & MISSION</p
              >
            </li></Link>
            <Link onClick={()=>{setShowSidebar(!showSidebar);}} to="/wiemem"><li class="">
              <p
                class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                
                >Members</p
              >
            </li></Link>
          </ul></button>
    
    <button class="bg-white group text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 min-w-[160px] max-w-[1200px] outline-none focus:shadow-outline"> <button
          
          >
            <span class="mr-1">Annual Report
           
            </span>
          </button>
          <ul class="absolute   hidden text-gray-700 pr-[80px] group-hover:block">
          <Link onClick={()=>{setShowSidebar(!showSidebar);}} to="/annual-r-2021"> <li class="">
              <p
                class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                
                >AR 2021</p
              >
            </li></Link>
            <Link onClick={()=>{setShowSidebar(!showSidebar);}} to="/annual-r-2022"><li class="">
              <p
                class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                
                >AR 2022</p
              >
            </li></Link>
            <Link onClick={()=>{setShowSidebar(!showSidebar);}} to="/annual-r-2023"><li class="">
              <p
                class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                
                >AR 2023</p
              >
            </li></Link>
          </ul></button>
   <Link to='/upcoming-events'> <button onClick={()=>{setShowSidebar(!showSidebar)}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 min-w-[160px] max-w-[1200px] outline-none focus:shadow-outline">Upcoming Events</button></Link>
   <Link to="/gallery"><button onClick={()=>{setShowSidebar(!showSidebar)}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 min-w-[160px] max-w-[1200px] outline-none focus:shadow-outline">Gallery</button></Link>
   <Link to="/contact-us?type=Website%20designed%20by%20MOGINDER.E,%20ECE%20-%203rd%20Year">  <button onClick={()=>{setShowSidebar(!showSidebar)}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-l-0 border-blue-500 min-w-[160px] max-w-[1200px]  px-4 py-2 mx-0 outline-none focus:shadow-outline">Contact Us</button></Link>
    </div>
</div>
</div>
</>
    )
}

export default Navbar;