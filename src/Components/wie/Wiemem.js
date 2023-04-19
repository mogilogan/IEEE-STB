import React from "react";
import peek from '../assests/wie/peek.png';

import { Wiemembers,Wiepromembers } from "../../memdata";

const Wiemem = ()=>{

    const {list6} = Wiemembers;
    const {list8}=Wiepromembers
    return(
        <div>
            <div className="bg-[url('../public/loop6.gif')] bg-cover bg-fixed">
            <p className="text-2xl font-bold text-center py-12">WIE MEMBERS</p>
            <img className="mx-auto" src={peek}/>


            <p data-aos='fade-left' data-aos-delay='200' className="py-2 text-3xl text-center font-semibold text-red-700">Professional Member</p>
            <p data-aos='fade-left' data-aos-delay='200' className="py-2 text-2xl text-center font-semibold text-red-900">WIE Chairperson</p>


            <div data-aos='fade-down' data-aos-delay='300' className="pb-11 pt-2 container mx-auto">
        <table class="w-full  mx-auto border-collapse rounded-2xl  bg-gradient-to-br  from-blue-900 via-slate-600 to-blue-500 ">

<thead className="text-center rounded-2xl bg-blue-900">
<tr >
<td class="border  py-2 px-2 text-sm    text-gray-100">Name</td>
<td class="border   md:pl-10 py-2 px-2 text-sm   text-gray-100">Department</td>
<td class="border  py-2 px-2 text-sm    text-gray-100">Membership ID</td>
</tr>
</thead>
<tbody className="text-center">

{list8.map((feature ,index) => {
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

<p data-aos='fade-left' data-aos-delay='200' className="py-2 text-3xl text-center font-semibold text-red-700">Graduate and Student Members</p>

            <div data-aos='fade-down' data-aos-delay='300' className="pb-11 pt-2 container mx-auto">
        <table class="w-full  mx-auto border-collapse rounded-2xl  bg-gradient-to-br  from-blue-900 via-slate-600 to-blue-500 ">

<thead className="text-center rounded-2xl bg-blue-900">
<tr >
<td class="border  py-2 px-2 text-sm    text-gray-100">Name</td>
<td class="border   md:pl-10 py-2 px-2 text-sm   text-gray-100">Department</td>
<td class="border  py-2 px-2 text-sm    text-gray-100">Membership ID</td>
</tr>
</thead>
<tbody className="text-center">

{list6.map((feature ,index) => {
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
        </div>
    )
}

export default Wiemem;