import React from 'react'
import { motion , useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'


const Details =({type,institute,time,place,}) =>{
  const ref =useRef(null)
  return (<li ref={ref} className='my-20 first: mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%] '>
 
  <LiIcon reference={ref}/>
  <motion.div initial={{y:50}}
  whileInView={{y:0}}
  transition={{duration:0.5, type:"spring"}}>
    
    <h3 className=' font-bold text-2xl sm:text-xl xs:text-lg'>{type}&nbsp;<span className='text-primary dark:text-primaryDark'>- {institute}</span>.</h3>
    <span className=' font-medium text-dark/75 dark:text-light xs:text-sm '>{time} | {place}</span>
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
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Formal Education</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:-[90%] md:w-full'>
<motion.div 
style={{scaleY:scrollYProgress}}
className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
        <Details
type = "Masters in Marketing and commercial action" institute="National School of Business and Management (Encg-k)" time="2018 / 2023" place="kenitra-Morocco" 
        />
     <Details
type = "Prepatory year of Higher studies in Agricalture" institute="APESA" time="2016/2017" place="Rabat-Morocco" 
        />
         <Details
type = "baccalaureate in Mathematical sciences" institute="Sijlmassa Highscool" time="2015/2016" place="Errachidia-Morocco" 
        />
        </ul>
 </div>
    </div>

    
  )
}

export default Education