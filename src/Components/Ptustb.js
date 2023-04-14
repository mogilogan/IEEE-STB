import React from "react";

import main from './assests/sb/main.webp';
import main2 from './assests/sb/main2.jpg';

import { Stumemece,Facmemece,Gradmemece,Facmemeee,Facmemit } from "../memdata";




const Ptustb = () =>{
  const {list1}=Facmemece;
  const {list2}=Facmemeee;
  const {list3}=Facmemit;
  const {list4}=Gradmemece;
  const {list5}=Stumemece;

    return(
        <div>


         
          <section
      className='my-[5px] '
      id="#About"
    
    >



      <div className='container  py-8 mx-auto'>

        
        <div className="grid grid-cols-3">
        <img width={200} src={main}/>
        <div data-aos='fade-right' data-aos-delay='100' className=' bg-gradient-to-br  from-blue-800 to-blue-400   py-8 rounded-xl flex flex-col    '>
          <div className='flex-1 text-gray-100 '>
            <h2 className='h2 mb-10 px-4 pt-2 text-yellow-500 font font-black text-xl' >
            IEEE PTU Student Branch 
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
        <img  src={main}/>
        </div>


{/* Faculty Members ECE */}
<p data-aos='fade-left' data-aos-delay='200' className="py-2 text-3xl text-center font-semibold text-red-700">FACULTY MEMBERS ECE</p>

<div data-aos='fade-down' data-aos-delay='300' className="py-11">
        <table class="w-full  mx-auto border-collapse rounded-2xl  bg-gradient-to-br  from-blue-900 via-slate-600 to-blue-500 ">

<thead className="text-center rounded-2xl bg-blue-900">
<tr >
<td class="border  py-2 px-2 text-sm    text-gray-100">Name</td>
<td class="border   md:pl-10 py-2 px-2 text-sm   text-gray-100">Department</td>
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



{/* Faculty Members EEE */}

<p data-aos='fade-left' data-aos-delay='200' className="py-2 text-3xl text-center font-semibold text-red-700">FACULTY MEMBERS EEE</p>

<div data-aos='fade-down' data-aos-delay='300' className="py-11">
        <table class="w-full  mx-auto border-collapse rounded-2xl  bg-gradient-to-br  from-blue-900 via-slate-600 to-blue-500 ">

<thead className="text-center rounded-2xl bg-blue-900">
<tr >
<td class="border  py-2 px-2 text-sm    text-gray-100">Name</td>
<td class="border   md:pl-10 py-2 px-2 text-sm   text-gray-100">Department</td>
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
<td class="border  md:pl-10 py-2 px-2 text-sm   text-gray-100">{department}</td>
<td class="border py-2 px-2 text-sm    text-gray-100">{mid}</td>
</tr>
              );
})}



</tbody>
</table>
</div>



{/* Faculty Members IT */}

<p data-aos='fade-left' data-aos-delay='200' className="py-2 text-3xl text-center font-semibold text-red-700">FACULTY MEMBERS IT</p>

<div data-aos='fade-down' data-aos-delay='300' className="py-11">
        <table class="w-full  mx-auto border-collapse rounded-2xl  bg-gradient-to-br  from-blue-900 via-slate-600 to-blue-500 ">

<thead className="text-center rounded-2xl bg-blue-900">
<tr >
<td class="border  py-2 px-2 text-sm    text-gray-100">Name</td>
<td class="border   md:pl-10 py-2 px-2 text-sm   text-gray-100">Department</td>
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
<td class="border  md:pl-10 py-2 px-2 text-sm   text-gray-100">{department}</td>
<td class="border py-2 px-2 text-sm    text-gray-100">{mid}</td>
</tr>
              );
})}



</tbody>
</table>
</div>


{/* Graduate Members ECE */}

<p data-aos='fade-left' data-aos-delay='200' className="py-2 text-3xl text-center font-semibold text-red-700">GRADUATE MEMBERS ECE</p>

<div data-aos='fade-down' data-aos-delay='300' className="py-11">
        <table class="w-full  mx-auto border-collapse rounded-2xl  bg-gradient-to-br  from-blue-900 via-slate-600 to-blue-500 ">

<thead className="text-center rounded-2xl bg-blue-900">
<tr >
<td class="border  py-2 px-2 text-sm    text-gray-100">Name</td>
<td class="border   md:pl-10 py-2 px-2 text-sm   text-gray-100">Department</td>
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
<td class="border  md:pl-10 py-2 px-2 text-sm   text-gray-100">{department}</td>
<td class="border py-2 px-2 text-sm    text-gray-100">{mid}</td>
</tr>
              );
})}
</tbody>
</table>
</div>


{/* Student Members ECE */}

<p data-aos='fade-left' data-aos-delay='200' className="py-2 text-3xl text-center font-semibold text-red-700">STUDENTS MEMBERS ECE</p>

<div data-aos='fade-down' data-aos-delay='300' className="py-11">
        <table class="w-full  mx-auto border-collapse rounded-2xl  bg-gradient-to-br  from-blue-900 via-slate-600 to-blue-500 ">

<thead className="text-center rounded-2xl bg-blue-900">
<tr >
<td class="border  py-2 px-2 text-sm    text-gray-100">Name</td>
<td class="border   md:pl-10 py-2 px-2 text-sm   text-gray-100">Department</td>
<td class="border  py-2 px-2 text-sm    text-gray-100">Membership ID</td>
</tr>
</thead>
<tbody className="text-center">

{list5.map((feature ,index) => {
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



      </div>
    </section>
    </div>
    )
}

export default Ptustb;