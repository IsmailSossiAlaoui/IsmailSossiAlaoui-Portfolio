import Link from 'next/link'
import React, { useState } from 'react'
import { Logo } from './Logo'
import { useRouter } from 'next/router'
import  {TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon } from './icons'
import {motion} from "framer-motion"
import useThemeSwitcher from "../components/hooks/useThemeSwitcher.JS"


const CustomLink = ({href,title,className=""}) => {
  const router = useRouter();
  
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className= {`h-[2px] inline-block bg-primary  dark:bg-light  absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full':'w-0'}`}>&nbsp;</span>
    </Link>
  )
  };
  const CustomMobileLink = ({href,title,className="",toggle}) => {
    const router = useRouter();
    const handleClick = () => {
      toggle();
      router.push(href);
    }
    
    return (
      <button href={href} className={`${className} relative group text-light dark:text-dark`} onClick={handleClick} >
        {title}
  
        <span className= {`h-[2px] inline-block bg-light  dark:bg-dark  absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full':'w-0'}`}>&nbsp;</span>
      </button>
    )
    };
const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();
  const[isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen(!isOpen);
  }
  return (

    <header className='w-full px-32 sm:px-10 py-8 font-medium  flex items-center justify-between text-xl relative dark:text-light '
    >

      <button className=' flex-col justify-between items-center p-3 hidden lg:flex ' onClick={handleClick}>
      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen? 'rotate-45 translate-y-0.5' :'-translate-y-1'} `}></span>
      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-0.5 ' : 'translate-y-1'} `}></span>

      </button>

      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav className='flex  justify-between gap-8 flex-wrap '>
            <CustomLink href= "/" title="Home" />
            <CustomLink href="/about" title="About" />
            <CustomLink href="/projects" title="Projects" />
        </nav>
       
        <nav className='flex items-center justify-center flex-wrap gap-8'>
            <motion.a href="https://twitter.com/BLUESEKAI273658" target = {"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-6 '
            >
              <TwitterIcon />
            </motion.a>
            <motion.a href="https://github.com/IsmailSossiAlaoui" target = {"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className='w-6 '
              >
              <GithubIcon />
            </motion.a>
            <motion.a href="https://www.pinterest.com/ismailsossialaoui/" target = {"_blank"}
              whileHover={{y:-2}}
              className='w-6 '
              whileTap={{scale:0.9}}>
              <PinterestIcon />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/ismail-sossi-alaoui/" target = {"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className='w-6 '>
              <LinkedInIcon />
            </motion.a>
         
        </nav></div>

      { isOpen ?
            <motion.div
             initial={{scale:0, opacity:0, x: "-50%", y:"-50%"}}
             animate={{scale:1, opacity:1}}

            className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-30  bg-dark/75 dark:bg-light/75 dark:text-dark rounded-lg backdrop-blur-md p-20 gap-6'>
            <nav className='flex  flex-col justify-between gap-8 flex-wrap items-center '>
                <CustomMobileLink href= "/" title="Home" toggle={handleClick} />
                <CustomMobileLink href="/about" title="About" toggle={handleClick} />
                <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} />
            </nav>
           
            <nav className='flex items-center justify-center flex-wrap gap-8'>
                <motion.a href="https://twitter.com" target = {"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 '
                >
                  <TwitterIcon />
                </motion.a>
                <motion.a href="https://github.com" target = {"_blank"}
                  whileHover={{y:-2}}
                  whileTap={{scale:0.9}}
                  className='w-6 '
                  >
                  <GithubIcon />
                </motion.a>
                <motion.a href="https://Pinterest.com" target = {"_blank"}
                  whileHover={{y:-2}}
                  className='w-6 '
                  whileTap={{scale:0.9}}>
                  <PinterestIcon />
                </motion.a>
                <motion.a href="https://LinkedIn.com" target = {"_blank"}
                  whileHover={{y:-2}}
                  whileTap={{scale:0.9}}
                  className='w-6 '>
                  <LinkedInIcon />
                </motion.a>
              
            </nav></motion.div>
            :
            null
      }
       <button 
          onClick={() => setMode(mode ==="light" ? "dark" : "light") }
          className={`ml-10 l-3 flex justify-center items-center rounded-full p-1 ${mode ==="light" ? "bg-dark text-light" : " bg-light text-dark"}`}
          >
            {
              mode === "dark"?
              <SunIcon className={"fill-dark"} />
              : <MoonIcon className={"fill-dark"} />
            }

          </button>



        
        

        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo/>
        </div>

        </header>
  )
}

export default NavBar