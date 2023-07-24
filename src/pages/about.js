import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import React, { useEffect ,useRef } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import ismail from "../../public/images/profile/ismail.png"
import { motion,useInView,useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import OnlineEducation from '@/components/OnlineEducation'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers =({value}) =>{
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration:3000})
  const isInView = useInView(ref);

useEffect(() =>{
  if(isInView){
    motionValue.set(value);

  }

},[isInView,value,motionValue])

useEffect(() => {
  springValue.on("change", (latest)=>{
   if(ref.current && latest.toFixed(0) <= value){
    ref.current.textContent = latest.toFixed(0)
   }
  })
},[springValue,value])

  return <span ref={ref}></span>
}


const about = () => {

  return (
    <>
    <Head>
      <title>Ismail Portfolio | About Page</title>
      <meta name="About" content='About Ismail Sossi Alaoui'/>
    </Head>
    <TransitionEffect />
    <main className='flex w-full flex-col items-center justify-center dark:text-light'></main>
    <Layout className='pt-16'>
    <AnimatedText text="Passion Fuels purpose" className='mb-16 lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8' />
    <div className='grid w-full grid-cols-9 gap-16 dark:text-light sm:gap-8 xl:col-span-4 '>
      <div className='col-span-3 flex flex-col items-start justify-start md:order-2 md:col-span-9'>
      <h2 className='mb-4 text-lg  font-bold text-dark/75 uppercase dark:text-light'>Biography</h2>
      <p className='font-medium'>Hi, I'm Ismail Sossi Alaoui, a Marketer, web developer and UI/UX designer with a passion for creating beautiful, functional, 
and user-centered digital experiences. With  years of experience in the field. I am always looking for 
new and innovative ways to bring my clients' visions to life.</p>
      <p className='font-medium my-4'>I believe that design is about more than just making things look pretty – it's about solving problems, inspiring positive user behavior 
creating intuitive, enjoyable experiences for users. 
</p>
      <p className='font-medium '>Whether I'm working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
</p>

      </div>   
<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid bg-light p-8  shadow-[16px_16px_0px_0px_#1b1b1b] dark:shadow-[16px_16px_0px_0px_#f5f5f5] dark:border-dark border-dark xl:col-span-5 md:order-1 md:col-span-9'  >
  <Image src ={ismail} alt='Ismail Sossi Alaoui' className='w-full h-auto rounded-2xl' priority sizes='(max-width:768px) 100vw,
  (max-width:1200px) 50vw,
  33vw
  '/>
</div>
<div className='h-full flex flex-col justify-between items-center col-span-3 xl:col-span-9 xl:flex-row xl:items-center md:order-3'>
<div className='flex flex-col items-start justify-center xl:items-center '>
      <span className='inline-block text-7xl font-bold w-full md:text-6xl sm:text-5xl xs:text-4xl' >
        <AnimatedNumbers value={50} />+
      </span>
      <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied clients  </h2>
  </div>
  <div className='flex flex-col items-start justify-center xl:items-center '>
      <span className='inline-block text-7xl font-bold text-center md:text-6xl sm:text-5xl xs:text-4xl'>
      <AnimatedNumbers value={30} />+
      </span>
      <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
  </div>
  <div className='flex flex-col items-start justify-center xl:items-center'>
      <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
      <AnimatedNumbers value={4} />+
      </span>
      <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>Years Of Experience</h2>
  </div>

  </div> 

    </div>
    <Skills />
    <Experience />
    <Education />
    <OnlineEducation />
    </Layout>
    </>
  )
}

export default about