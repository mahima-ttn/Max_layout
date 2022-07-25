// import styles from '../styles/Banner.module.css'
import Link from 'next/link'

const HeadBanner = () => {
  return (
    <div className="flex w-screen ">
      <div className="flex flex-col justify-center items-center w-screen ">
        <div className=" pb-10 w-screen z-10 h-[280px] lg:h-[310px] md:h-[290px] bg-[url('../images/banner.jpg')] bg-cover lg:bg-auto bg-center bg-no-repeat" >
            <div className="text-left text-blue-900 text-2xl font-bold pt-18 w-9/12 h-full lg:h-[200px] ">
            One solution to completely protect your family’s future.
            </div>
            <div className="text-left text-sm ">
            Max Life Term Insurance
            </div>
        </div>  
        <div className="flex items-center justify-center mt-5">
            <button className=" h-12 p-3 rounded-full bg-[#f97316]  ">
                <Link href='Calculate' passHref><span className="text-center text-white text-lg p-3">Calculate insurance premium</span></Link></button>
        </div> 
        </div>   
    </div>
  )
}

export default HeadBanner
