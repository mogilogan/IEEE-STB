import React from "react";

import main2 from './assests/sb/main2.jpg';

import { Facmemcse,Stumemece,Facmemece,Gradmemece,Facmemeee,Facmemit } from "../memdata";




const Ptustb = () =>{
  const {list1}=Facmemece;
  const {list2}=Facmemeee;
  const {list3}=Facmemit;
  const {list4}=Gradmemece;
  const {list5}=Stumemece;
  const {list7}=Facmemcse;

    return(
        <div>

<div className="bg-[url('https://static.igem.org/mediawiki/2021/7/79/T--UPF_Barcelona--omegaA_anim.PNG')] bg-cover bg-fixed">


         
          <section
      className='my-[5px] '
      id="#About"
    
    >



      <div className='container  py-8 mx-auto'>

      <table class="w-full  mx-auto border-collapse rounded-2xl bg-gradient-to-br from-teal-800 to-teal-700   ">

<thead className="text-center rounded-2xl bg-teal-900">
<tr className=" py-2  text-sm text-center  text-gray-100" >
<th className="py-2 text-lg sm:text-2xl" colSpan={3}>PTU IEEE STUDENT BRANCH DETAILS<br/><span className="sm:text-xl">IEEE Student Branch code: 28271</span></th>
</tr>
</thead>
<tbody>

  <tr>
  <td class="border  py-2 px-2 text-md  text-center  text-gray-100">Details</td>
<td class="border   md:pl-10 py-2 px-2 text-md text-center  text-gray-100">Name</td>
<td class="border  py-2 px-2 text-md text-center   text-gray-100">Membership Number</td>
  </tr>
  <tr>
  <td class="border  py-2 px-2 text-sm    text-gray-100">University Coordinator & Branch Counselor</td>
<td class="border   md:pl-10 py-2 px-2 text-sm   text-gray-100">Dr.R.Gunasundari<br/>
Professor, ECE
</td>
<td class="border  py-2 px-2 text-sm    text-gray-100">98322632</td>
  </tr>
  <tr>
  <td class="border  py-2 px-2 text-sm   text-gray-100" colSpan={3}>Contact: ieee@ptuniv.edu.in</td>
  </tr>
</tbody>
</table> 

        
      <img className="mx-auto" width={400}  src={main2}/>


        



        <div data-aos='fade-right' data-aos-delay='100' className=' bg-gradient-to-br   from-blue-800 to-blue-400   py-8 rounded-xl flex flex-col    '>
          <div className='flex-1  text-gray-100 '>
            <h2 className='h2 mb-10 px-4 pt-2 text-yellow-500 font font-black text-xl' >
            PTU IEEE Student Branch 
                        </h2>
            <p
              className='px-12  text-left mx-auto'
            >
The Student Branch of IEEE was started in Puducherry Technological University (PTU) (erstwhile Pondicherry Engineering College) in 1995. Since then, it has developed into a multifaceted student club on campus, organizing a wide variety of technical events for the benefit of students.
</p>
            <p
              className='px-12 pt-4 text-left mx-auto'
            >
The Student Branch attempts to provide a platform for students from different branches and years to connect with each other and IEEE members from other colleges.
</p>       

<p className='px-12 pt-4 text-left mx-auto'>
Student members have the choice to get involved in technical projects, presentations, website building and maintenance and non-technical aspects such as marketing, volunteering for IEEE events and networking with other student branches. Other IEEE student branch activities are to facilitate PTU students to participate in national and international conferences, workshops, project/design competitions, industrial visits and access to IEEE online resources.
</p>      
          </div>
     
        </div>


{/* Faculty Members ECE */}
<div className="pt-8 pb-2"><p data-aos='fade-left' data-aos-delay='200' className="pb-2 text-3xl text-center max-w-[60%] mx-auto bg-yellow-500 rounded-2xl font-semibold text-red-700">PROFESSIONAL MEMBERS</p></div>
<p data-aos='fade-right' data-aos-delay='200' className="py-2 text-3xl text-center font-semibold text-red-700">Department of ECE</p>

<div data-aos='fade-down' data-aos-delay='300' className="py-11">
        <table class="w-full  mx-auto border-collapse rounded-2xl  bg-gradient-to-br  from-blue-900 via-slate-600 to-blue-500 ">

<thead className="text-center rounded-2xl bg-blue-900">
<tr >
<td class="border  py-2 px-2 text-sm    text-gray-100">Name</td>
<td class="border   md:pl-10 py-2 px-2 text-sm   text-gray-100">Designation</td>
<td class="border  py-2 px-2 text-sm    text-gray-100">Membership ID</td>
</tr>
</thead>
<tbody className="text-center">

{list1.map((feature ,index) => {
      // destructure feature
      const { name,department,mid } =
        feature;

        return(
      
          <tr className="border hover:bg-slate-900 border-red-900">
<td class="border py-2 px-2 text-sm    text-gray-100">{name}</td>
<td class="border  md:pl-10 py-2 px-2 text-sm   text-gray-100">{department}</td>
<td class="border py-2 px-2 text-sm    text-gray-100">{mid}</td>
</tr>
              );
})}



</tbody>
</table>
</div>


{/* Faculty Members CSE */}
<p data-aos='fade-left' data-aos-delay='200' className="py-2 text-3xl text-center font-semibold text-red-700">Department of CSE</p>

<div data-aos='fade-down' data-aos-delay='300' className="py-11">
        <table class="w-full  mx-auto border-collapse rounded-2xl  bg-gradient-to-br  from-blue-900 via-slate-600 to-blue-500 ">

<thead className="text-center rounded-2xl bg-blue-900">
<tr >
<td class="border  py-2 px-2 text-sm    text-gray-100">Name</td>

<td class="border  py-2 px-2 text-sm    text-gray-100">Membership ID</td>
</tr>
</thead>
<tbody className="text-center">

{list7.map((feature ,index) => {
      // destructure feature
      const { name,mid } =
        feature;

        return(
      
          <tr className="border hover:bg-slate-900 border-red-900">
<td class="border py-2 px-2 text-sm    text-gray-100">{name}</td>
{/* <td class="border  md:pl-10 py-2 px-2 text-sm   text-gray-100">{department}</td> */}
<td class="border py-2 px-2 text-sm    text-gray-100">{mid}</td>
</tr>
              );
})}
</tbody>
</table>
</div>



{/* Faculty Members EEE */}

<p data-aos='fade-left' data-aos-delay='200' className="py-2 text-3xl text-center font-semibold text-red-700">Department of EEE</p>

<div data-aos='fade-down' data-aos-delay='300' className="py-11">
        <table class="w-full  mx-auto border-collapse rounded-2xl  bg-gradient-to-br  from-blue-900 via-slate-600 to-blue-500 ">

<thead className="text-center rounded-2xl bg-blue-900">
<tr >
<td class="border  py-2 px-2 text-sm    text-gray-100">Name</td>

<td class="border  py-2 px-2 text-sm    text-gray-100">Membership ID</td>
</tr>
</thead>
<tbody className="text-center">

{list2.map((feature ,index) => {
      // destructure feature
      const { name,department,mid } =
        feature;

        return(
      
          <tr className="border hover:bg-slate-900 border-red-900">
<td class="border py-2 px-2 text-sm    text-gray-100">{name}</td>
{/* <td class="border  md:pl-10 py-2 px-2 text-sm   text-gray-100">{department}</td> */}
<td class="border py-2 px-2 text-sm    text-gray-100">{mid}</td>
</tr>
              );
})}



</tbody>
</table>
</div>



{/* Faculty Members IT */}

<p data-aos='fade-left' data-aos-delay='200' className="py-2 text-3xl text-center font-semibold text-red-700">Department of IT</p>

<div data-aos='fade-down' data-aos-delay='300' className="py-11">
        <table class="w-full  mx-auto border-collapse rounded-2xl  bg-gradient-to-br  from-blue-900 via-slate-600 to-blue-500 ">

<thead className="text-center rounded-2xl bg-blue-900">
<tr >
<td class="border  py-2 px-2 text-sm    text-gray-100">Name</td>

<td class="border  py-2 px-2 text-sm    text-gray-100">Membership ID</td>
</tr>
</thead>
<tbody className="text-center">

{list3.map((feature ,index) => {
      // destructure feature
      const { name,department,mid } =
        feature;

        return(
      
          <tr className="border hover:bg-slate-900 border-red-900">
<td class="border py-2 px-2 text-sm    text-gray-100">{name}</td>
{/* <td class="border  md:pl-10 py-2 px-2 text-sm   text-gray-100">{department}</td> */}
<td class="border py-2 px-2 text-sm    text-gray-100">{mid}</td>
</tr>
              );
})}
</tbody>
</table>
</div>


<div className="pt-8 pb-2"><p data-aos='fade-left' data-aos-delay='200' className="pb-2 text-3xl text-center max-w-[60%] mx-auto bg-yellow-500 rounded-2xl font-semibold text-red-700">STUDENT MEMBERS</p></div>

{/* Graduate Members ECE */}

<p data-aos='fade-left' data-aos-delay='200' className="py-2 text-3xl text-center font-semibold text-red-700">Graduate Members - ECE</p>

<div data-aos='fade-down' data-aos-delay='300' className="py-11">
        <table class="w-full  mx-auto border-collapse rounded-2xl  bg-gradient-to-br  from-blue-900 via-slate-600 to-blue-500 ">

<thead className="text-center rounded-2xl bg-blue-900">
<tr >
<td class="border  py-2 px-2 text-sm    text-gray-100">Name</td>
<td class="border  py-2 px-2 text-sm    text-gray-100">Membership ID</td>
</tr>
</thead>
<tbody className="text-center">

{list4.map((feature ,index) => {
      // destructure feature
      const { name,department,mid } =
        feature;

        return(
      
          <tr className="border hover:bg-slate-900 border-red-900">
<td class="border py-2 px-2 text-sm    text-gray-100">{name}</td>
{/* <td class="border  md:pl-10 py-2 px-2 text-sm   text-gray-100">{department}</td> */}
<td class="border py-2 px-2 text-sm    text-gray-100">{mid}</td>
</tr>
              );
})}
</tbody>
</table>
</div>


{/* Student Members ECE */}

<p data-aos='fade-left' data-aos-delay='200' className="py-2 text-3xl text-center font-semibold text-red-700">Department of ECE</p>

<div data-aos='fade-down' data-aos-delay='300' className="py-11">
        <table class="w-full  mx-auto border-collapse rounded-2xl  bg-gradient-to-br  from-blue-900 via-slate-600 to-blue-500 ">

<thead className="text-center rounded-2xl bg-blue-900">
<tr >
<td class="border  py-2 px-2 text-sm    text-gray-100">Name</td>
{/* <td class="border   md:pl-10 py-2 px-2 text-sm   text-gray-100">Designation</td> */}
<td class="border  py-2 px-2 text-sm    text-gray-100">Membership ID</td>
</tr>
</thead>
<tbody className="text-center">

{list5.map((feature ,index) => {
      // destructure feature
      const { name,mid } =
        feature;

        return(
      
          <tr className="border hover:bg-slate-900 border-red-900">
<td class="border py-2 px-2 text-sm    text-gray-100">{name}</td>
{/* <td class="border  md:pl-10 py-2 px-2 text-sm   text-gray-100">{department}</td> */}
<td class="border py-2 px-2 text-sm    text-gray-100">{mid}</td>
</tr>
              );
})}



</tbody>
</table>
</div>












      </div>
    </section>
    </div>
    </div>
    )
}

export default Ptustb;