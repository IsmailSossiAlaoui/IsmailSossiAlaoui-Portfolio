import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
   <footer className='dark:text-light'>
    <Layout className='w-full dark:border-light border-t-2 border-dark border-solid flex justify-between align-center font-medium text-lg sm:text-sm xs:text-xs'>
    <span>{new Date().getFullYear()} &copy; All rights reserved</span>
    <div>
     Built by <a href="https://www.linkedin.com/in/ismail-sossi-alaoui/" target='_blank' className='underline text-primary dark:text-primaryDark hover:text-green-600 ease-in underline-offset-2'>Ismail Sossi Alaoui</a>
    </div>
    <Link href="/">sayhello</Link>
    </Layout>
   </footer>
  )
}

export default Footer