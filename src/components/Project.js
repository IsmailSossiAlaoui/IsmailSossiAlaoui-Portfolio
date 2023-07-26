import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowIcon } from '@/components/icons'

const Project = ({imageSrc, title , description, className,linkto,imageH}) => {
   const isMobile = window.innerWidth < 768
  return (
    
  <motion.a href= {`${linkto}`} target='_blank' whileHover={isMobile && {filter:"brightness(1)",
        scale:1.1}}   initial ={{opacity:0}} whileInView={{opacity:1}} 
        className={`brightness-75 flex flex-col gap-7 h-fit-content ${className}`}> 
          <div  className= {`overflow-hidden relative ${imageH}`}>
          <Image src={imageSrc}  alt={title} className='object-cover' priority 
   /> 
          </div>
          <div>
             <div className='flex flex-row justify-between items-center mb-4'> <h2 className='text-xl text-primary font-bold  uppercase dark:text-primaryDark'>{title}</h2> <ArrowIcon className={" text-dark dark:text-light "}/></div>
              <p className='font-medium dark:text-light'>{description}</p>
          </div>
          </motion.a>
  
    )
  }

export default Project


