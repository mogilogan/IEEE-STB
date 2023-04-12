import React from "react";
import mogi from '../Components/assests/mem/mogi.JPG'
import { motion } from 'framer-motion';

import { ContentAnimation, FadeAnimation, CardHomeAnimation } from './Loadingpage/Animations';



const Gallery = () =>{
    return(
        <div>


<motion.div {...ContentAnimation} className="relative  flex mx-auto   order-1 w-1/3">
          <motion.div {...CardHomeAnimation} animate={{ rotate: -12 }} className="card-home absolute bg-gray-900" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: -3 }} className="card-home absolute bg-gray-500" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: 2 }} className="card-home relative bg-gray-700">
            <motion.div {...FadeAnimation} className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
              <img src={mogi} priority layout="intrinsic" width={700} height={700} alt="Muhamad Rijal" className="relative" />
            </motion.div>
          </motion.div>
        </motion.div>
        
<motion.div {...ContentAnimation} className="relative  flex mx-auto order-1 w-1/3">
          <motion.div {...CardHomeAnimation} animate={{ rotate: -12 }} className="card-home absolute bg-gray-900" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: -3 }} className="card-home absolute bg-gray-500" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: 2 }} className="card-home relative bg-gray-700">
            <motion.div {...FadeAnimation} className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
              <img src={mogi} priority layout="intrinsic" width={700} height={700} alt="Muhamad Rijal" className="relative" />
            </motion.div>
          </motion.div>
        </motion.div>
       
<motion.div {...ContentAnimation} className="relative  flex mx-auto  order-1 w-1/3">
          <motion.div {...CardHomeAnimation} animate={{ rotate: -12 }} className="card-home absolute bg-gray-900" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: -3 }} className="card-home absolute bg-gray-500" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: 2 }} className="card-home relative bg-gray-700">
            <motion.div {...FadeAnimation} className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
              <img src={mogi} priority layout="intrinsic" width={700} height={700} alt="Muhamad Rijal" className="relative" />
            </motion.div>
          </motion.div>
        </motion.div>
        </div>
        
    )
}

export default Gallery;