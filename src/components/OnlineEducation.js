import React from 'react'
import { motion , useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'


const Details =({type,institute,time}) =>{
  const ref =useRef(null)
  return (<li ref={ref} className='my-16 first: mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between dark:text-light md:w-[80%]'>
 
  <LiIcon reference={ref}/>
  <motion.div initial={{y:50}}
  whileInView={{y:0}}
  transition={{duration:0.5, type:"spring"}}>
    
    <h3 className=' font-bold text-2xl sm:text-xl xs:text-lg'>{type}&nbsp;<span className='text-primary dark:text-primaryDark'>- {institute}</span>.</h3>
    <span className=' font-medium text-dark/75 dark:text-light xs:text-sm '>{time}</span>
   </motion.div>
  </li>  
)
}

const Education = () => {
  const ref = useRef(null)
  const {scrollYProgress} =useScroll (
    {
      target:ref,
      offset:["start end", "center start"]
    }
  )
  return (
    <div className='my-64 dark:text-light'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Online Education</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:-[90%] md:w-full'>
<motion.div 
style={{scaleY:scrollYProgress}}
className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
        <ul className='w-full flex flex-col items-start justify-between  ml-4 xs:ml-2'>

        <Details
type = "Front-End Engineering certification" institute="Codecademy" time="Juin 2023"
        />
         <Details
type = "Javascript Algorithms and Data Structures" institute="freeCodeCamp" time="Feb 2023"
        />
        <Details
type = "Responsive Web Design" institute="freeCodeCamp" time="August 2022"
        />
        <Details
type = "SEO" institute="Hubspot Academy" time="August 2022"
        />

        <Details
type = "Fundamentals of Digital Marketing" institute="Google's Digital garage" time="August 2020"
        />
     
        
       
        </ul>
 </div>
    </div>

    
  )
}

export default Education