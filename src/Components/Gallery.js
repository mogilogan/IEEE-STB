import React from "react";
import one from './assests/gallery/1.jpg'
import oone from './assests/gallery/2022/oone.png';
import ooone from './assests/gallery/2023/oone.jpg';
import { motion } from 'framer-motion';

import { ContentAnimation, FadeAnimation, CardHomeAnimation } from './Loadingpage/Animations';
import { Link } from "react-router-dom";



const Gallery = () =>{
    return(
        <div>

<div className="bg-[url('https://static.igem.org/mediawiki/2021/7/79/T--UPF_Barcelona--omegaA_anim.PNG')] bg-cover bg-fixed">

<section
      className='my-[5px] py-10 '
      id="#About"

    >
      <div className='container  rounded-3xl  mx-auto bg-[#a0daf6]'>
           
      <h1 className="text-3xl pl-4 font-bold text-teal-800  text-center  py-4">ECE 2021 Gallery</h1>
        <div className='    min-h-[250px] px-12  flex flex-col text-center xl:flex-row xl:items-center xl:      '>
           
        <div className='flex-1' data-aos='zoom-in-left'>
            {/* <img className="border-white" src={home1} alt='' /> */}
            <div className="container pb-10 lg:pl-[60px] group  mx-auto"><Link to="/gallery-2021">
<motion.div {...ContentAnimation} className="relative  flex mx-auto   order-1 w-1/3">
<motion.div {...CardHomeAnimation} animate={{ rotate: -15 }} className="card-home absolute bg-gray-100 group-hover:bg-teal-200" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: -10 }} className="card-home absolute bg-gray-300 group-hover:bg-teal-300" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: -3 }} className="card-home absolute bg-gray-400 group-hover:bg-teal-500" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: 2 }} className="card-home relative bg-gray-500 group-hover:bg-teal-600">
            <motion.div {...FadeAnimation} className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
              <img src={one} priority layout="intrinsic" width={700} height={700} alt="Muhamad Rijal" className="relative h-full" />
            </motion.div>
          </motion.div>
        </motion.div></Link>
        </div>
          </div>
         
        </div> 
      </div>
    </section>


    <section
      className='my-[5px] py-10 '
      id="#About"

    >
      <div className='container  rounded-3xl  mx-auto bg-[#a0daf6]'>
           
      <h1 className="text-3xl pl-4 font-bold text-teal-800  text-center  py-4">ECE 2021 Gallery</h1>
        <div className='    min-h-[250px] px-12  flex flex-col text-center xl:flex-row xl:items-center xl:      '>
           
        <div className='flex-1' data-aos='zoom-in-left'>
            {/* <img className="border-white" src={home1} alt='' /> */}
            <div className="container pb-10 lg:pl-[60px] group  mx-auto"><Link to="/gallery-2022">
<motion.div {...ContentAnimation} className="relative  flex mx-auto   order-1 w-1/3">
<motion.div {...CardHomeAnimation} animate={{ rotate: -15 }} className="card-home absolute bg-gray-100 group-hover:bg-teal-200" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: -10 }} className="card-home absolute bg-gray-300 group-hover:bg-teal-300" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: -3 }} className="card-home absolute bg-gray-400 group-hover:bg-teal-500" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: 2 }} className="card-home relative bg-gray-500 group-hover:bg-teal-600">
            <motion.div {...FadeAnimation} className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
              <img src={oone} priority layout="intrinsic" width={700} height={700} alt="Muhamad Rijal" className="relative h-full" />
            </motion.div>
          </motion.div>
        </motion.div></Link>
        </div>
          </div>
         
        </div> 
      </div>
    </section>



    <section
      className='my-[5px] py-10 '
      id="#About"

    >
      <div className='container  rounded-3xl  mx-auto bg-[#a0daf6]'>
           
      <h1 className="text-3xl pl-4 font-bold text-teal-800  text-center  pt-4">ECE 2021 Gallery</h1>
        <div className='    min-h-[250px] px-12  flex flex-col text-center xl:flex-row xl:items-center xl:      '>
           
        <div className='flex-1' data-aos='zoom-in-left'>
            {/* <img className="border-white" src={home1} alt='' /> */}
            <div className="container pb-10 lg:pl-[60px] group  mx-auto"><Link to="/gallery-2023">
<motion.div {...ContentAnimation} className="relative  flex mx-auto   order-1 w-1/3">
<motion.div {...CardHomeAnimation} animate={{ rotate: -15 }} className="card-home absolute bg-gray-100 group-hover:bg-teal-200" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: -10 }} className="card-home absolute bg-gray-300 group-hover:bg-teal-300" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: -3 }} className="card-home absolute bg-gray-400 group-hover:bg-teal-500" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: 2 }} className="card-home relative bg-gray-500 group-hover:bg-teal-600">
            <motion.div {...FadeAnimation} className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
              <img src={ooone} priority layout="intrinsic" width={700} height={700} alt="Muhamad Rijal" className="relative h-full" />
            </motion.div>
          </motion.div>
        </motion.div></Link>
        </div>
          </div>
         
        </div> 
      </div>
    </section>


        
       



        </div>
        </div>
        
    )
}

export default Gallery;