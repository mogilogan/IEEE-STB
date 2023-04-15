import React from "react";

import one from '../assests/gallery/1.jpg';
import two from '../assests/gallery/2.jpg';
import three from '../assests/gallery/3.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css";

var Carousel = require('react-responsive-carousel').Carousel;


const Gallery2021 = () =>{
   
    return(
        <div>
          <div className="bg-[url('https://static.igem.org/mediawiki/2021/7/79/T--UPF_Barcelona--omegaA_anim.PNG')] bg-cover bg-fixed">
            gallery 2021:

            <Carousel className="pt-[30px] w-[60%] mx-auto" dynamicHeight={true} infiniteLoop>
               
            <div>
            <img src={one} height="300px" width="200px"/>
            </div>

            <div>
            <img src={two} height="300px" width="200px"/>
           
            </div>
            <div>
            <img src={three} height="300px" width="200px"/>
            </div>
        
      
            </Carousel>
            </div>
        </div>

    )
}

export default Gallery2021;