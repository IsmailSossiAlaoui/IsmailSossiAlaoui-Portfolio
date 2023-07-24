import React from 'react'
import { CircularText } from './icons'
import Link from 'next/link'


const HireMe = () => {
  return (
    <div className='fixed  xs:hidden left-4 bottom-4   sm:bottom-0  flex items-center justify-center overflow-hidden '>
        <div className='w-48 lg:w-30   h-auto flex items-center justify-center relative'>
            <CircularText className={"fill-dark animate-spin-slow dark:fill-light sm:w-15"}/>

        <Link href="mailto:sossiismail@gmail.com" target="_blank" className="absolute w-20 h-20  bg-dark rounded-full text-light border-dashed border-white dark:border-dark border flex justify-center items-center hover:bg-light dark:hover:text-light dark:hover:border-light dark:hover:bg-dark hover:text-dark hover:border-dark ease-out dark:bg-light dark:text-dark  text-center font-bold ">Hire Me</Link>

        </div>
    </div>
  )
}

export default HireMe