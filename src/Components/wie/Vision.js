import React from "react";

import wielogo2 from '../assests/wie/wielogo2.png';
import wie25 from '../assests/wie/wie25.webp';

const Vision = ()=>{
    return(
        <div>

<div className="bg-[url('../public/loop6.gif')] bg-cover bg-fixed">
            <section
      className='my-[5px] py-10 '
      id="#About"
      

    >


      <div className='container  rounded-3xl  mx-auto bg-pink-300'>
        <img data-aos='fade-up' data-aos-delay='100' className="text-center mx-auto pt-4" height={200} width={400} src={wielogo2}/>
           
      <h1 className="text-3xl pl-4 font-bold text-pink-600  py-4">WIE Pledge</h1>
        <div className='  px-12 flex flex-col text-center xl:flex-row xl:items-center xl:  xl:gap-x-[60px] xl:pb-0    '>
          <div className='flex-1 '>
           
            <p data-aos='fade-left' data-aos-delay='200'
              className=' pt-4 italic	pb-10 text-justify text-lg md:px-12 text-black  mx-auto'
            >
“IEEE WIE pledges to work towards gender-diversified panels at all IEEE meetings, conferences, and events, including our own.”
            </p>   
          </div>
        </div> 
      </div>
    </section>


            <section
      className='my-[5px] py-10 '
      id="#About"

    >
      <div className='container  rounded-3xl  mx-auto bg-pink-300'>
      <img data-aos='fade-up' data-aos-delay='100' className="text-center mx-auto pt-4" height={200} width={400} src={wie25}/>
  
      <h1 className="text-3xl pl-4 font-bold text-center text-pink-800  py-4">IEEE WIE</h1>
        <div className='    min-h-[560px] px-12 pb-12 flex flex-col  xl:flex-row xl:items-center xl:  xl:gap-x-[60px] xl:pb-0    '>
           
       
          <div className='flex-1 '>
          <h1 className="text-3xl  font-bold text-pink-700  py-4">SCOPE: </h1>
            <p
              className=' pt-6  text-lg md:px-12 text-black  mx-auto'
            >
<b>WIE Mission: </b>To facilitate the recruitment and retention of women in technical disciplines globally.
            </p>
            <p
              className='md:px-12  text-lg pt-4 text-black mx-auto'
            >
<b>WIE Vision: </b>A vibrant community of IEEE women and men collectively using their diverse talents to innovate for the benefit of humanity.
            </p>
            <h1 className="text-3xl font-bold text-pink-700  py-4">FUNCTIONS/OBJECTIVES: </h1>
           <ul className="list-disc pb-8 pl-8 text-justify  text-lg">
            <li>Recognize women’s outstanding achievements in IEEE Fields of Interest through IEEE Awards nominations and other national/international award nominations.</li>
            <li>Organize receptions workshops and forums at major technical conferences to enhance networking and to promote membership in WIE.</li>
            <li>Advocate women in leadership roles in IEEE governance and career advancement for women in the profession.</li>
            <li>Provide assistance with the formation of new WIE Affinity Groups and support ongoing activities.</li>
            <li>Administer the IEEE Student-Teacher and Research Engineer/Scientist (STAR) Program to mentor young women in junior high school and high school.</li>
            <li>Promote member grade advancement for women to the grades of Senior Member and Fellow.</li>
            <li>Facilitate the development of programs and activities that promote the entry into and retention of women in engineering programs.</li>
           </ul>
            
        
          </div>
        </div> 
      </div>
    </section>
    </div>
        </div>
    )
}

export default Vision;