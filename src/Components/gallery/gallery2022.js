import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Import images
import { Gallery22 } from "./data";


var Carousel = require('react-responsive-carousel').Carousel;

const Gallery2022 = () =>{

    const {gallery2} = Gallery22;
    return(
        <div>
            <div className="bg-[url('https://static.igem.org/mediawiki/2021/7/79/T--UPF_Barcelona--omegaA_anim.PNG')] bg-cover bg-fixed">
            gallery 2022:
            

            <Carousel className="pt-[30px] w-[60%] mx-auto" dynamicHeight={true} infiniteLoop>
                {gallery2.map((feature ,index) => {
      // destructure feature
      const { photo } =
        feature;

        return(
            <div>
            <img src={photo} height="300px" width="200px"/>
           
        </div>
        
              );
})}

            </Carousel>
        </div>
        </div>
    )
}

export default Gallery2022;