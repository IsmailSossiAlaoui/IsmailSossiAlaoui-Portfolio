import Layout from '@/components/Layout'
import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import pandoratax from '../../public/images/projects/pandoratax.png'
import Positivus from '../../public/images/projects/Positivus.png'
import OpenAi from '../../public/images/projects/OpenAi.png'
import amazon_clone from '../../public/images/projects/amazon_clone.png'
import Portfolio_webflow from '../../public/images/projects/Portfolio_webflow.png'
import RL_Landing_page from '../../public/images/projects/RL_Landing_Page.png'
import sossi from '../../public/images/projects/sossi.png'
import Project from '@/components/Project'
import TransitionEffect from '@/components/TransitionEffect'



const Projects = () => {
  return (
    <>
    <Head>
      <title>Ismail Portfolio | Projects Page</title>
      <meta name="Projects" content='Projects of Ismail Sossi Alaoui'/>
    </Head>
    <TransitionEffect />
    <main className='flex w-full flex-col items-center justify-center dark:text-light'></main>
    <Layout>
    <AnimatedText text="Projects" className='mb-[167px]' />
    <div className='grid w-full grid-cols-12 gap-y-[100px] md:gap-y-[100px] gap-x-10'>

    <Project title='Amazon clone' description="This is an Amazon clone ,I built this project using NextJs, NextAuth, TailwindCss, Redux toolkit for state management, and stripe to process payments"  imageSrc={amazon_clone} className={"col-span-6 xl:col-span-12 "}   linkto={`https://amazon-clone-ismail.vercel.app/`} imageH={"max-h-[390px]"}/>


    <Project title='Pandora tax' description="This is a website I developed using Webflow as a freelancer for a company called Pandora group"  imageSrc={pandoratax} className={"  col-span-6 xl:col-span-12 xl:col-start-1"}  linkto={'https://pandoratax.webflow.io/'} imageH={"max-h-[390px]"} />

   

    <Project title='SOSSI E-Commerce landing page' description="this is a landing page design for an e-commerce store specializing in selling clothes"  imageSrc={sossi} className={" col-span-6 xl:col-span-12 "} linkto={"https://www.figma.com/proto/yUXOqEbJWNHK11BRfaPkBO/Untitled?page-id=0%3A1&type=design&node-id=1-2&viewport=982%2C-1436%2C0.54&t=QmfG1paE2ykLx3cS-1&scaling=min-zoom"} imageH={"max-h-[390px]"}/>


    <Project title='Gpt3' description="This is a landing page I built using React you can view it deployed on github Pages"  imageSrc={OpenAi} className={" col-span-6 xl:col-span-12 xl:col-start-1 "}  linkto={"https://ismailsossialaoui.github.io/isaai/"}  imageH={"max-h-[390px]"}/>


    <Project title='Positivus landing page'  description="a web design for a landing page of company specializing in digital marketing"  imageSrc={Positivus} className={"col-span-6 xl:col-span-12 xl:h-auto "}  linkto={'https://www.figma.com/file/MzTo9bnyR5DyGl3zFrnXdI/Untitled?type=design&node-id=0%3A1&mode=design&t=7LGqDVnUDnhZqRVq-1'}  imageH={"max-h-[390px]"}/>


    <Project title='Portfolio Webflow  ' description="This is my old Portfolio I designed and developed on Webflow "  imageSrc={Portfolio_webflow} className={"col-span-6 xl:col-span-12 xl:col-start-1 "} linkto={"https://ismailsa.webflow.io/"} imageH={"max-h-[390px]"} />


    </div>
    </Layout>
    </>
  )
}

export default Projects