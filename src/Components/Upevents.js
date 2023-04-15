import React from "react";
import ReactLoading from 'react-loading';




const Upevents = () =>{
    return(
        <div>
            <div className="bg-[url('https://static.igem.org/mediawiki/2021/7/79/T--UPF_Barcelona--omegaA_anim.PNG')] bg-cover bg-fixed">
            <h1 className="text-center font-bold text-3xl pt-[30px]">Upcoming Events</h1>
            <section
      className='my-[5px] '
      id="#About"

    >
      <div className='container py-8 mx-auto min-h-[600px]'>

            <h2 className='text-center pt-[100px] font font-black text-yellow-600  text-xl xt-md' >
            Will be Updated Soon!
            </h2>
            <ReactLoading className="mx-auto pt-6" type={"spinningBubbles"} color="#5BB9FF" height={'20%'} width={'20%'} />


            
            </div>

          
        
    </section>
    </div>
        </div>
    )
}


export default Upevents;