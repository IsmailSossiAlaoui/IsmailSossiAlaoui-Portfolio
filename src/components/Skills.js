import React from 'react'
import { motion, spring } from 'framer-motion'

const Skill =({ name, x , y}) =>{
  return(
  <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:dark:text-light'
  whileHover={{scale:1.05}}
  initial ={{x:0 ,y :0}}
  whileInView={{x:x, y:y,  transition : {type:'spring' ,duration:2} }}

  viewport={{once:true}}
  
  >
{name}  </motion.div>)
}

const Skills = () => {
  return (
    <>
    <h2 className='text-center text-8xl font-bold w-full mt-64 dark:text-light  lg:mt-28'>Skills</h2>
    <div className='w-full h-screen  relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh]  sm:h-[60vh] xs:h-[50vh]
     lg:bg-circularLightlg lg:dark:bg-circularDarkLg
     md:bg-circularLightMd md:dark:bg-circularDarkMd
     sm:bg-circularLightSm sm:dark:bg-circularDarkSm '> 
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark cursor-pointer lg:p-6 md:p-4 xs:p-2 '
        whileHover={{scale:1.05}}>
Web 
        </motion.div>
        <Skill name="css" x='30vw' y="-10vw" />
        <Skill name="HTML" x='0vw' y="-12vw" />
        <Skill name="Photoshop" x='25vw' y="5vw" />
        <Skill name="ReactJs" x='0vw' y="12vw" />
        <Skill name="NextJs" x='-25vw' y="20vw" />
        <Skill name="Webflow" x='-25vw' y="5vw" />
        <Skill name="Wordpress" x='-25vw' y="-20vw" />
        <Skill name="TailwindCss" x='25vw' y="-20vw" />
        <Skill name="Bootstrap" x='25vw' y="20vw" />
        <Skill name="Ux/Ui design" x='-30vw' y="-10vw" />
        <Skill name="Figma" x='0vw' y="-20vw" />
        <Skill name="S.E.O" x='0vw' y="20vw" />

        </div>
    </>


  )
}

export default Skills