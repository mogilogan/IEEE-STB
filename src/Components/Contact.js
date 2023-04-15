import React,{useState,useRef} from "react";
import emailjs, { init } from "@emailjs/browser";

import { FaInstagram,FaYoutube } from "react-icons/fa";
import ButtonMaitto from "./ButtonMaitto";

const Contact = () =>{
  const form = useRef();
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wyq86yc",
        "template_hmnhqax",
        form.current,
        "aHSJgTjvnKxjZfH1L"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  


    return(
        <div>
          <div className="bg-[url('https://static.igem.org/mediawiki/2021/7/79/T--UPF_Barcelona--omegaA_anim.PNG')] bg-cover bg-fixed">
 
            <section
      className='my-[5px] '
      id="#About"

    >
      <div className='container py-8 mx-auto'>
        <div className='  rounded-xl    pb-12 flex flex-col    '>  
        <div className="py-4">
            <p
              className='px-12 font-bold text-xl py-2 w-[300px] text-center rounded-3xl bg-yellow-400   mx-auto'
            >
               PTU IEEE STB 
            </p>    </div>  

     <div className="container rounded-2xl bg-slate-900 w-[90%] mx-auto">
      <p className="text-3xl pt-4 text-white text-center">CONTACT US:</p>
      <form ref={form} onSubmit={sendEmail} class="w-full mx-auto py-10 max-w-sm">
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Full Name
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="user_name"/>
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Gmail ID
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="email" name="user_mail"/>
    </div>
  </div>


  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Whatsapp Number
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="tel" name="phone_num"/>
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Message
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="message"/>
    </div>
  </div>

  <div class="md:flex  md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3 ">
      <input class="shadow   bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" value="Send Message!" />
    </div>
  </div>
</form>
          </div>
        </div>
      </div>
    </section>




    <section
      className='my-[5px] py-10 '
      id="#About"
      

    >


      <div className='sm:max-w-[600px] rounded-3xl  mx-auto bg-blue-200'>
        
           
      <h1 className="text-3xl pl-4 font-bold text-teal-700   py-4">Follow Us</h1>



      <div className="items-center  justify-center">
        <a href="#" className="text-gray-700 flex py-4 justify-center hover:text-red-500 mx-4">
        <ButtonMaitto mailto="ieee@ptuniv.edu.in"></ButtonMaitto><span className="text-xl pt-1 pl-2">Mail Us!</span> 
        </a>
        <a href="https://www.youtube.com/@PTU_IEEE_SB" className="text-gray-700 flex  py-4  justify-center hover:text-red-700 mx-4">
          <FaYoutube size={40} /><span className="text-xl pt-1 pl-2">Watch Us!</span> 
        </a>
        <a href="https://www.instagram.com/ptu_ieee_sb/" className="text-gray-700 py-4  flex justify-center hover:text-red-400 mx-4">
          <FaInstagram size={40} /><span className="text-xl pt-1 pl-2">Follow Us!</span> 
        </a>
      </div>
       
      </div>
    </section>
    </div>
        </div>
    )
}

export default Contact