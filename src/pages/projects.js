import Layout from '@/components/Layout'
import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import AFD from '../../public/images/projects/AFD.png'
import Positivus from '../../public/images/projects/Positivus.png'
import OpenAi from '../../public/images/projects/OpenAi.png'
import amazon_clone from '../../public/images/projects/amazon_clone.png'
import Portfolio_webflow from '../../public/images/projects/Portfolio_webflow.png'
import RL_Landing_page from '../../public/images/projects/RL_Landing_Page.png'
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
    <div className='grid w-full grid-cols-12 gap-y-[171px] md:gap-y-[100px]'>
    <Project title='Positivus Landing Page' description="a web design for a landing page of company specializing in digital marketing"  imageSrc={Positivus} className={"col-span-6 md:col-span-12 "} imageH={"h-[425px] xl:h-[300px] lg:h-[250px] md:h-auto"} linkto={'https://www.figma.com/file/MzTo9bnyR5DyGl3zFrnXdI/Untitled?type=design&node-id=0%3A1&mode=design&t=7LGqDVnUDnhZqRVq-1'} />
    <Project title='Amazon clone' description="This is an Amazon clone ,I built this project using NextJs, NextAuth, TailwindCss, and NextAuth "  imageSrc={amazon_clone} className={"col-start-9 col-span-4 md:col-span-12 md:col-start-1 "} imageH={'h-[300px] xl:h-[220px] lg:h-[190px] md:h-auto'} linkto={`https://amazon-clone-ismail.vercel.app/`}/>
    <Project title='RL Landing Page' description="A web design for a landing page for a Real estate agency"  imageSrc={RL_Landing_page} className={" col-span-4 md:col-span-12 "} imageH={'h-[300px] xl:h-[220px] lg:h-[190px] md:h-auto'} linkto={"https://www.figma.com/file/LTJE8Ja5216nQu64HwOGf3/Real-Estate-Landing-Page?type=design&node-id=1%3A22&mode=design&t=UPvcqnjyacrzQymJ-1"}/>
    <Project title='Gpt3' description="This is a landing page I built using React you can view it deployed on github Pages"  imageSrc={OpenAi} className={"col-start-7 col-span-6 md:col-span-12 md:col-start-1 "} imageH={"h-[425px] xl:h-[300px] lg:h-[250px] md:h-auto"} linkto={"https://ismailsossialaoui.github.io/isaai/"} />
    <Project title='AFD website'  description="A Web design for AFD tech a company specializing in the tech and telecom industry that include an interactive map for the different locations of the company's agencies, this was part of my PFE internship"  imageSrc={AFD} className={"col-span-6 md:col-span-12 md:h-auto "} imageH={"h-[425px] xl:h-[300px] lg:h-[250px] md:h-auto"} linkto={'https://www.figma.com/file/SMiN8DhEA5xGqoLsf7rU6G/AFD?type=design&node-id=0%3A1&mode=design&t=ovwwA3tt3HhXSpJm-1'} />
    <Project title='Portfolio Webflow  ' description="This is my old Portfolio I designed and developed on Webflow "  imageSrc={Portfolio_webflow} className={"col-start-9 col-span-4 md:col-span-12 md:col-start-1 "} linkto={"https://ismailsa.webflow.io/"} imageH={'h-[300px] xl:h-[220px] lg:h-[190px] md:h-auto'} />
    </div>
    </Layout>
    </>
  )
}

export default Projects