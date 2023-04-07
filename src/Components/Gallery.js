import React from "react";
import mogi from '../Components/assests/mem/mogi.JPG'


const Gallery = () =>{
    return(
        <div>


            <div className="py-20">
            <div  className="relative pl-20 order-2 flex w-1/2 justify-end md:order-1 md:w-1/3">
          <div  animate={{ rotate: -12 }} className="card-home absolute bg-white" />
          <div  animate={{ rotate: -3 }} className="card-home absolute bg-secondary-light" />
          <div  animate={{ rotate: 2 }} className="card-home relative bg-primary-light">
            <div  className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
              <img src={mogi} priority layout="intrinsic" width={700} height={700} alt="Muhamad Rijal" className="relative" />
            </div>
          </div>
        </div>
        </div>
        </div>
    )
}

export default Gallery;