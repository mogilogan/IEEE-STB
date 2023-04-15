import React from "react";
import wie25 from '../assests/wie/wie25.webp';
import wie3 from '../assests/wie/wie3.jpg';
import { wiegrad } from "../../data";

const Wie = () =>{

    const {list } = wiegrad;
    return(
        <div>
            <div className="bg-[url('../public/loop6.gif')] bg-cover bg-fixed">

            <section
      className='my-[5px] py-10 '
      id="#About"

    >
      <div className='container  rounded-3xl  mx-auto bg-[#a0daf6]'>
           
      <h1 className="text-3xl pl-4 font-bold text-teal-800  py-4">IEEE Women in Engineering</h1>
        <div className='    min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:  xl:gap-x-[60px] xl:pb-0    '>
           
        <div className='flex-1' data-aos='zoom-in-left'>
            {/* <img className="border-white" src={home1} alt='' /> */}
            <img className="mx-auto py-11" src={wie25} />
            <img  src={wie3} />
          </div>
          <div className='flex-1 '>
            <p
              className=' pt-6 text-justify text-lg md:px-12 text-black  mx-auto'
            >
IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering. The mission of IEEE WIE is to facilitate the recruitment and retention of women in technical disciplines globally. IEEE WIE envisions a vibrant community of IEEE women and men collectively using their diverse talents to innovate for the benefit of humanity. Membership is free to Life Members, Student and Graduate Student Members. 
            </p>
            <p
              className='md:px-12 text-justify text-lg pt-4 text-black mx-auto'
            >
WIE is available to new and existing IEEE members only. Before joining WIE, existing members must renew their IEEE Membership for the current year.
            </p>
            <p
              className='md:px-12 text-justify text-lg pt-4 text-black  mx-auto'
            >
Learn more about the WIE International Leadership Conference that provides leading-edge professional development sessions focusing on leadership, innovation, technology, and entrepreneurship that aims to inspire and advance mid-level and senior technical professionals globally.
            </p>
            <p
              className='md:px-12 text-justify text-lg pt-4 text-black  mx-auto'
            >
CIC 2023 is to be conducted in HYBRID mode (Physical and Online).
Authors of the accepted papers who are unable to attend the conference in person can present their papers online and attend an interactive virtual conference.
            </p>
            <p
              className='md:px-12 text-justify text-lg py-4 text-black  mx-auto'
              >Website&nbsp;:&nbsp;
              <a className="text-blue-900 hover:text-yellow-300" href="https://wie.ieee.org/">https://wie.ieee.org/</a>
                          </p>
          </div>
        </div> 
      </div>
    </section>



   </div>
        </div>
    )
}

export default Wie;