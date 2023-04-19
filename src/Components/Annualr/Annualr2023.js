import React from "react";
import ReactLoading from 'react-loading';
// import annualr2023 from '../assests/annualr/annualr2023.pdf';

const Annualr2023 = () =>{
    return(
        <div>
          <div className="bg-[url('https://static.igem.org/mediawiki/2021/7/79/T--UPF_Barcelona--omegaA_anim.PNG')] bg-cover bg-fixed">
           
           <section
      className='my-[5px] '
      id="#About"

    >
      <div className='container py-8 mx-auto min-h-[600px]'>
        <div className='  rounded-xl    pb-12 flex flex-col    '>
          <div className='flex-1 rounded-tr-xl rounded-tl-xl  '>
            <h2 className='h2 mb-10 px-4 pb-4 pt-2 font font-black text-blue-800 te text-xl xt-md' >
            Annual Report 2023
            </h2>
            <div className="mx-auto">
          <svg className="decoration-red-700 mx-auto" xmlns="http://www.w3.org/2000/svg" width="90" height="100" fill="currentColor"  viewBox="0 0 16 16"> <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" fill="red"></path> <path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" fill="red"></path> </svg>
      
       
        {/* <p className="text-center"><a href={annualr2023} download="annual-report-2021.pdf" >Download</a></p> */}
        </div>
            </div>

            {/* <iframe height={600} width={600} className="mx-auto py-11" src={annualr2023}></iframe> */}

          
            <div className='container py-8 mx-auto min-h-[600px]'>

<h2 className='text-center pt-[100px] font font-black text-yellow-600  text-xl xt-md' >
Will be Updated Soon!
</h2>
<ReactLoading className="mx-auto pt-6" type={"spinningBubbles"} color="#5BB9FF" height={'20%'} width={'20%'} />



</div>


          
        </div>
      </div>
    </section>
    </div>
        </div>
    )
}

export default Annualr2023;