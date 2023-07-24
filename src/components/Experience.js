import React from 'react'
import { motion , useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'


const Details =({position,company,time,adress,work}) =>{
  const ref =useRef(null)
  return (<li ref={ref} className='my-8 first: mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between dark:text-light md:w-[80%]'>
 
  <LiIcon reference={ref}/>
  <motion.div initial={{y:50}}
  whileInView={{y:0}}
  transition={{duration:0.5, type:"spring"}}>
    
    <h3 className=' font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<span className='text-primary dark:text-primaryDark'>- {company}</span>.</h3>
    <span className=' font-medium text-dark/75 xs:text-sm dark:text-light/75'>{time} | {adress}</span>
   <span className='font-medium w-full md:text-sm'>{work}</span> 
   </motion.div>
  </li>  
)
}

const Experience = () => {
  const ref = useRef(null)
  const {scrollYProgress} =useScroll (
    {
      target:ref,
      offset:["start end", "center start"]
    }
  )
  return (
    <div className='my-64 dark:text-light'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 '>Experience</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:-[90%] md:w-full '>
<motion.div 
style={{scaleY:scrollYProgress}}
className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light 
md:w-[2px] md:left-[30px] xs:left-[20px]'/>
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
        <Details
position = "PFE in Web Design" company="AFD.TECH Part of Accenture" time="15-03-2023 / 15-07-2023" adress="Rabat-Morocco" work= {<ul> 
  <li>Redesigned the company's Website in Figma.</li>
  <li>Developped a theme for the website on wordpress. </li>
  <li>Managed the company's website.</li>
</ul>}
        />
        <Details
position = "Intern as a Webflow Developper" company="Ubinair" time="15-07-2022 / 11-09-2022" adress="Rabat-Morocco" work= {<ul> 
  <li>Redesigned the company's Website in Figma.</li>
  <li>Developped the company's website on webflow. </li>
  <li>Managed Search Engine Optimazation.</li>
  <li>Designed and Developped a landing page for a client on webflow and created its content.</li>
</ul>}
        />
        <Details
position = "internship of refinement: digital marketing ." company="Acting Institute" time="10-06-2022 / 14-07-2022" adress="Casablanca-Morocco" work= {<ul> 
  <li>Managed search engine optimization.</li>
  <li>Created content for social Media.</li>
  <li>Improved the company's website on wordpress.</li>
</ul>}
        />
               <Details
position = "internship of initiation: Digital marketing." company="Alyn Media" time="01-07-2021 / 01-09-2021" adress="Kénitra-Morocco" work= {<ul> 
  <li>Created an editorial calendar.</li>
  <li>Created content for social media.</li>
  <li>Managed E-mail marketing using hubspot.</li>
</ul>}
        />
        </ul>
 </div>
    </div>
  )
}

export default Experience