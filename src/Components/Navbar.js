import React,{useState} from "react";

import {useNavigate } from 'react-router-dom'


const Navbar = () =>{

    const [showSidebar, setShowSidebar] = useState(false);
    const navigate = useNavigate();
    return(
        
<>

<div className="hidden  md:block">
            <div class="flex justify-center rounded-lg text-lg" role="group">
            <button onClick={()=>{navigate('/about',{replace:true})}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-r-0 border-blue-500 rounded-l-lg px-4 py-2 mx-0 outline-none focus:shadow-outline">About IEEE</button>
    <button onClick={()=>{navigate('/ptu-ieee-stb',{replace:true})}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline">PTU IEEE STB</button>
    <button onClick={()=>{navigate('/off-members',{replace:true})}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline">Office Bearers & Members</button>
    <button onClick={()=>{navigate('/wie',{replace:true})}}class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline">WIE</button>

    <button class="bg-white group text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline">
    
        
          <span class="mr-1">Annual Report
         
          </span>
       
        <ul class="absolute  hidden text-gray-700 pt-4 group-hover:block">
          <li class="">
            <a
              class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              
              >AR 2021</a
            >
          </li>
          <li class="">
            <a
              class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              
              >AR 2022</a
            >
          </li>
          <li class="">
            <a
              class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
             
              >AR 2023</a
            >
          </li>
        </ul>
      </button>
    <button onClick={()=>{navigate('/upcoming-events',{replace:true})}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline">Upcoming Events</button>
    <button onClick={()=>{navigate('/gallery',{replace:true})}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline">Gallery</button>
    <button onClick={()=>{navigate('/contact-us',{replace:true})}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-l-0 border-blue-500 rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline">Contact Us</button>
  </div>
        </div>
        <div className="block md:hidden pt-10">
{showSidebar ? (
 <div className="bg-slate-900">  <button
    className="flex  text-4xl text-white  items-center cursor-pointer fixed top-10 mx-auto right-[106px] sm:right-40 z-50"
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
  className={`top-0 right-0 w-[50vw] bg-blue-400  p-10 pl-15 text-white fixed h-full z-40  ease-in-out duration-300 ${
    showSidebar ? "translate-x-0 " : "translate-x-full"
  }`}
>
<div className="pt-20"> 
    <button onClick={()=>{navigate('/about',{replace:true})}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-r-0 border-blue-500  px-2 min-w-[160px] max-w-[1200px] py-2 mx-0 outline-none focus:shadow-outline">About IEEE</button>
    <button onClick={()=>{navigate('/ptu-ieee-stb',{replace:true})}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 min-w-[160px] max-w-[1200px] outline-none focus:shadow-outline">PTU IEEE STB</button>
    <button onClick={()=>{navigate('/Off-members',{replace:true})}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 min-w-[160px] max-w-[160px] outline-none focus:shadow-outline">Office Bearers & Members</button>
    <button onClick={()=>{navigate('/wie',{replace:true})}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 min-w-[160px] max-w-[1200px] outline-none focus:shadow-outline">WIE</button>
    <button class="bg-white group text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 min-w-[160px] max-w-[1200px] outline-none focus:shadow-outline"> <button
          
          >
            <span class="mr-1">Annual Report
           
            </span>
          </button>
          <ul class="absolute  hidden text-gray-700 pl-36 group-hover:block">
            <li class="">
              <a
                class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                
                >AR 2021</a
              >
            </li>
            <li class="">
              <a
                class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                
                >AR 2022</a
              >
            </li>
            <li class="">
              <a
                class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                
                >AR 2023</a
              >
            </li>
          </ul></button>
    <button onClick={()=>{navigate('/upcoming-events',{replace:true})}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 min-w-[160px] max-w-[1200px] outline-none focus:shadow-outline">Upcoming Events</button>
    <button onClick={()=>{navigate('/gallery',{replace:true})}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 min-w-[160px] max-w-[1200px] outline-none focus:shadow-outline">Gallery</button>
    <button onClick={()=>{navigate('/contact-us',{replace:true})}} class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-l-0 border-blue-500 min-w-[160px] max-w-[1200px]  px-4 py-2 mx-0 outline-none focus:shadow-outline">Contact Us</button>
    </div>
</div>
</div>
</>
    )
}

export default Navbar;