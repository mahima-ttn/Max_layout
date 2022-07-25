// import styles from '../styles/TermPlans.module.css'
import Rectangle from '../images/Rectangle.png'
import Image from 'next/image'
import {BsShieldCheck} from 'react-icons/bs'
import Peacemind from '../images/peacemind.png'
import FamilyProtection from '../images/familyprotection.png'
import KnowMore from '../images/Icon - Know more.png'
import Link from 'next/link'

const TermPlans = ({products}) => {
  // console.log("keybenefits",products)
  const ProductDetails= products.data

  ProductDetails.slice(1).map((prod) =>console.log("map",prod.attributes.title))

  return (
    <div className="bg-gray-100 mt-10 flex flex-col  items-center justify-center">
      <div className="flex flex-col mt-3">
        <div className="flex items-center justify-center font-bold flex-col">
        Key benefits of Max Life’s Term Insurance Plan
         <div  className="w-20 h-5 rounded-2 "><Image src={Rectangle} alt='foot rect'/></div>
        </div>
        <div className="flex flex-row flex-wrap justify-center p-5">
            <div className="flex items-center justify-center flex-col bg-white w-48 shadow-lg rounded-lg m-3">
                <div className="flex items-center justify-center w-16 h-6 bg-[#bbf7d0]"><BsShieldCheck  className="bg-[#bbf7d0] pr-1 text-lg"/>Free </div>
                 <span className="text-left font-medium w-22 h-10 m-3">
                   {ProductDetails[0].attributes.title}
                 </span>
                 <p className="text-left w-22 h-18 m-3 ">
                 {ProductDetails[0].attributes.description}
                 </p>
                 <Link href='/' passHref><button className=" h-10 mb-4 flex items-center justify-between text-blue-500">
                   <Image src={KnowMore} alt="know more"/>
                   <span className="ml-1">Know More</span>
                </button></Link>
               </div> 
               <div>                 
               </div>

               {ProductDetails.slice(1).map((prod)=>(
                 <div key={prod.id}>
               <div className="flex items-center justify-center flex-col bg-white w-48 shadow-lg rounded-lg m-3">
               <span className="text-left font-medium w-22 h-12 m-3">
               {prod.attributes.title}
                 </span>
               <p className="text-left w-22 h-24 m-3 ">
               {prod.attributes.description}
                 </p>
               <Link href='/' passHref><button className="h-12 flex items-center justify-between text-blue-500">
                  <Image src={KnowMore} alt='know more'/>
                  <span className="ml-1">Know More</span>
                  </button></Link>
                </div>
                </div>
                ))}       
                         
              </div>
            
      </div>
      <div className=" flex flex-col flex-wrap items-center justify-center mt-5 bg-white">
              <div className="flex flex-wrap flex-row ">
                  <div className="flex flex-col items-center w-100" ><Image src={FamilyProtection} alt='familyprotection'/>
                  <p className="text-left text-lg font-bold">Protected Family</p>
                  <div  className="w-20 h-4 mb-4"><Image src={Rectangle} alt='footrect'/></div>
                  <p className="text-center text-md ml-30">The concept of insurance is based on community, and thus the term insurance plans too. Term insurance plans benefit not just the buyer and the families but the society at large.</p>
                  </div>
                </div>
                <div>
                <div className="flex flex-col items-center w-100"><Image src={Peacemind} alt='peacemind'/>
                < p className="text-left text-lg font-bold">Peace of Mind</p>
                <div  className="w-20 h-4 mb-4"><Image src={Rectangle} alt='footrect'/></div>
                <p className="text-center text-md ml-30 mb-5">Future is unpredictable and term insurance protects your family from unforeseen risks like death, disability and disease. Knowing your family will be secure in your absence, helps in reducing fear and stress of unpredictability.</p>
                </div>
                </div>
        </div>
    </div>
  )
}

export default TermPlans

