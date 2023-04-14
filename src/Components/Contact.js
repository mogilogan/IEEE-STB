import React,{useState,useRef} from "react";
import emailjs, { init } from "@emailjs/browser";

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
 
            <section
      className='my-[5px] '
      id="#About"

    >
      <div className='container py-8 mx-auto'>
        <div className=' bg-white rounded-xl    pb-12 flex flex-col    '>  
            <p
              className='px-12 font-bold text-xl pb-6  text-left mx-auto'
            >
               PTU IEEE STB 
            </p>      

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


      <div className='container  rounded-3xl  mx-auto bg-blue-200'>
        
           
      <h1 className="text-3xl pl-4 font-bold text-teal-700  text-center py-4">Follow Us</h1>



          <div className='flex-1 '>
           
            <p data-aos='fade-left' data-aos-delay='200'
              className=' pt-4 italic	pb-10 text-justify text-lg md:px-12 text-black  mx-auto'
            >

            </p>   
          </div>
       
      </div>
    </section>
        </div>
    )
}

export default Contact