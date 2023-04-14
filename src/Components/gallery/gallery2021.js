import React , {useState} from "react";





import one from '../assests/gallery/1.jpg';
import two from '../assests/gallery/2.jpg';
import three from '../assests/gallery/3.jpg';


const Gallery2021 = () =>{
    let items = [
        { one },
        { two },
        { three },
        {
          url: {one},
          link: 'http://www.website.com/image4.jpg', // optional
          over: <div>Your text</div>, // optional
          width: 300, // optional
          height: 300 // optional
        }
      ]
      
    
  

    return(
        <div>
            gallery 2021:

            <div className="container mx-auto py-[20px]">
      
           
            </div>

        </div>

    )
}

export default Gallery2021;