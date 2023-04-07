import React,{useState} from "react";


const Navbar = () =>{

    const [showSidebar, setShowSidebar] = useState(false);

    return(
        
<>

<div className="hidden md:block">
            <h1>Navbar</h1>
            <div class="flex justify-center rounded-lg text-lg" role="group">
            <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-r-0 border-blue-500 rounded-l-lg px-4 py-2 mx-0 outline-none focus:shadow-outline">About IEEE</button>
    <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline">PTU IEEE STB</button>
    <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline">Office Bearers</button>
    <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline">Gallery</button>
    <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline">Events</button>
    <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline">Upcoming Events</button>
    <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-l-0 border-blue-500 rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline">Contact Us</button>
  </div>
        </div>
        <div className="block md:hidden pt-10">
{showSidebar ? (
  <button
    className="flex text-4xl text-white  items-center cursor-pointer fixed right-10 z-50"
    onClick={() => setShowSidebar(!showSidebar)}
  >
    x
  </button>
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
  className={`top-0 right-0 w-[50vw] bg-blue-600  p-10 pl-15 text-white fixed h-full z-40  ease-in-out duration-300 ${
    showSidebar ? "translate-x-0 " : "translate-x-full"
  }`}
>
<div className="pt-20"> 
  <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-r-0 border-blue-500 rounded-l-lg px-2 min-w-[160px] max-w-[1200px] py-2 mx-0 outline-none focus:shadow-outline">About IEEE</button>
    <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 min-w-[160px] max-w-[1200px] outline-none focus:shadow-outline">PTU IEEE STB</button>
    <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 min-w-[160px] max-w-[1200px] outline-none focus:shadow-outline">Office Bearers</button>
    <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 min-w-[160px] max-w-[1200px] outline-none focus:shadow-outline">Gallery</button>
    <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 min-w-[160px] max-w-[1200px] outline-none focus:shadow-outline">Events</button>
    <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 min-w-[160px] max-w-[1200px] outline-none focus:shadow-outline">Upcoming Events</button>
    <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-l-0 border-blue-500 min-w-[160px] max-w-[1200px]  px-4 py-2 mx-0 outline-none focus:shadow-outline">Contact Us</button>
    </div>
</div>
</div>
</>
    )
}

export default Navbar;