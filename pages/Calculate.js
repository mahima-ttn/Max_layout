import React from 'react'
import axios from 'axios'
import {BsShieldCheck} from 'react-icons/bs'
import Link from 'next/link'
import KnowMore from '../images/Icon - Know more.png'
import Image from 'next/image'

const Calculate = ({tests}) => {
  
  const frstcmp = tests.data
  frstcmp.slice(1).map((comp) =>console.log("map",comp.attributes.product[0].title))
  console.log("test component" ,frstcmp)

  return (
    <div className="bg-gray-100 flex flex-row items-center justify-between">
      <div className="flex flex-row ">
      Calcualte Term Plan

      <div className="flex items-center justify-center flex-col bg-white w-48 shadow-lg rounded-lg m-3">
                <div className="flex items-center justify-center w-16 h-6 bg-[#bbf7d0]"><BsShieldCheck  className="bg-[#bbf7d0] pr-1 text-lg"/>Free </div>
                 <span className="text-left font-medium w-22 h-10 m-3">
                   {frstcmp[0].attributes.product[0].title}
                 </span>
                 <p className="text-left w-22 h-18 m-3 ">
                 {frstcmp[0].attributes.product[0].desc}
                 </p>
                 <Link href='/' passHref><button className=" h-10 mb-4 flex items-center justify-between text-blue-500">
                   <Image src={KnowMore} alt="know more"/>
                   <span className="ml-1">Know More</span>
                </button></Link>
               </div> 
                  
                 {
                   frstcmp.slice(1).map((comp) =>(
                     <div key={comp.id}>
                      {/* <h1>{comp.attributes.product[0].title}</h1>  */}
                       <div className="flex items-center justify-center flex-col bg-white w-48 shadow-lg rounded-lg m-3">
               <span className="text-left font-medium w-22 h-12 m-3">
               {comp.attributes.product[0].title}
                 </span>
               <p className="text-left w-22 h-24 m-3 ">
               {comp.attributes.product[0].desc}
                 </p>
               <Link href='/' passHref><button className="h-12 flex items-center justify-between text-blue-500">
                  <Image src={KnowMore} alt='know more'/>
                  <span className="ml-1">Know More</span>
                  </button></Link>
                </div>
                       </div>
                   ))
                 }            
               </div>
    </div>
  )
}

export default Calculate

export async function getStaticProps(){
  const testsRes = await axios.get("http://localhost:1337/api/tests?populate=*");

  return {
    props: {
      tests: testsRes.data,
    },
  };
}

// {
//   prDetails.map((pr)=>(
//       <div key={pr.id}>
//           <div className="relative">
//               <div className="w-[152px] h-[202px] bg-white rounded-lg mb-6 p-4 shadow-[ 0_6px_12px_#171A210F]">
//                   <span className="h-[66px] w-full text-[#171A21] text-base">{pr.attributes.policyproduct[0].policyTitle}</span>
//                   <p className="text-[#8690A3] h-[90px] w-full text-[13px] py-2">{pr.at