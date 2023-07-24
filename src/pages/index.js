import React from 'react'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import twosides from "../../public/images/profile/twosides.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'


 


export default function Home() {

  return (
    <>
    <Head>
      <title>
       Ismail's Portfolio
      </title>
      <meta name="description" content="Generated by createNextApp"/>
    </Head>
    <TransitionEffect />
    <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
    <Layout className='pt-0 md:pt-16 sm:pt-8'>
      <div className='flex items-center justify-between w-full lg:flex-col'>
        <div className='w-[40%] lg:w-[60%]' >
          <Image src={twosides} priority sizes='(max-width:768px) 100vw,
  (max-width:1200px) 70vw,
  70vw
  ' alt ="two sides of the brain"></Image>
        </div>
        <div className='w-1/2 flex flex-col items-start self-center gap-10 lg:w-full'>
          <AnimatedText text="Upgrade Your digital Presence With Beautiful Design And code" className='!text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
          <p className="text-xl my-4 font-medium lg:text-center" >
          As a skilled ux/ui designer, front-end developer and markter, I am dedicated to turning ideas into innovative effective web applications. 
          Explore my latest projects, showcasing my expertise in React.js, ux/ui design, and web development.
          </p>
          <div className='flex items-center self-start mt-2 lg:self-center'> 
        <Link href={"/public/Ismail_Sossi_Alaoui_cv.pdf"} target='_blank' className="dark:hover:bg-dark dark:hover:text-light dark:hover:border-light dark:bg-light dark:text-dark flex items-center border-dark border transition-all ease-in-out border-solid boder-2 bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-transparent hover:border-dark whitespace-nowrap" download={true}>My resumé<LinkArrow className="w-6 ml-1 " /></Link>
        <Link href={"mailto:sossiismail@gmail.com"} target='_blank' className='dark:text-light dark:border-light dark:hover:bg-light dark:hover:text-dark dark:hover:border-dark text-dark transition-all ease-in-out  rounded-lg font-semibold hover:bg-dark hover:text-light border-2 border-dark p-2.5 px-6 ml-3 '>Contact</Link>
        </div>
      </div>
      </div>
    </Layout>
    <HireMe />
    <div>

    </div>
    </main>
    </>
  )
}