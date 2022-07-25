import React from 'react'
// import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import maxLogo from '../images/MaxLogo.png'
import Hamburger from '../images/Icon - Hamburger.png'

const NavBar = () => {
  return (
    <div className="box-border h-50 w-auto p-1 shadow-lg box-decoration-none flex items-center bg-white z-10 justify-between sticky top-0" >
        <div >
            <Link href='/Home' passHref>
                <Image src={maxLogo} alt='Logo'
                width='58px'
                height='36px'/>
            </Link>
        </div>
        <div className="flex items-center flex-row">
        <div className="flex items-center">
            <div className="flex items-center pr-25">
                 Existing Customer ? 
                 <span className="text-blue-600">
                    <Link href='/Login' passHref><a> Login</a></Link>
                </span>
            </div>
        </div>
        <div className="flex items-center justify-center mr-2 ml-2">
            <span className="font-base h-6 w-8"><Image src={Hamburger} alt="nav collapse"/></span>
        </div>
        </div>
    </div>
  )
}

export default NavBar
