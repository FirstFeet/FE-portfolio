import React from 'react';
import 'react-tabs/style/react-tabs.css';

import Header from '../components/Header'
import Landing from '@/components/Landing'
import DomainKnowledgeLanding from '@/components/DomainKnowledgeLanding'
import Contact from '@/components/Contact'
import RecentCases from '@/components/RecentCases'
import Footer from '@/components/Footer'
import TechSkills from '@/components/TechSkills'
import Customers from '@/components/Customers'
import Blog from '@/components/Blog'
import Team from '@/components/Team'
import ScrollToTopButton from '@/components/ScrollToTopButton'


const page = () => {
  return (
    <div className='w-full justify-center items-center'>
      <Landing/>
      <TechSkills/>
      <DomainKnowledgeLanding/>
      {/* <RecentCases/> */}
    </div>
  )
}

export default page