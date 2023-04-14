import React from "react";
import peek from '../assests/wie/peek.png';

import { Wiemembers } from "../../memdata";

const Wiemem = ()=>{

    const {list6} = Wiemembers;
    return(
        <div>
            <p className="text-2xl font-bold text-center py-12">WIE MEMBERS</p>
            <img className="mx-auto" src={peek}/>


            <div data-aos='fade-down' data-aos-delay='300' className="py-11 container mx-auto">
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
    )
}

export default Wiemem;