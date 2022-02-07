import React from 'react'
import NewsLetter from '../components/forms/NewsLetter';
import GridViewHeader from '../components/sections/GridViewHeader';
import DownloadApp from '../components/forms/DownloadApp'
import CopyRight from '../components/sections/CopyRight';

const contactArr = [
  {
    icon: 'call',
    title: 'Call Us',
    desc: '(+1) 202-555-0176, (+1) 2025-5501'
  },
  {
    icon: 'email',
    title: 'Email Us',
    desc: 'dummy@mail.com'
  },
  {
    icon: 'location_on',
    title: 'Walk In',
    desc: '598 Old House Drive, London'
  }
]

export default function footer() {
  return (
    <footer className='w-full flex flex-col justify-center items-center mt-8 mb-24 px-20 text-white'>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/logo.png" alt="Miraculous Logo" />
      </a>
      <p className='display-2'>The Miraculous</p>
      <div className='w-full flex lg:gap-8 md:gap-4 sm:gap-0 items-start lg:mt-16 md:mt-12 sm:flex-col lg:flex-row'>
        <div className='flex flex-col items-start justify-center lg:basis-1/4 md:basis-1/2 sm:mt-12'>
          <GridViewHeader showViewMore={false}>Miraculous Music Station</GridViewHeader>
          <p className='display-para'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
          </p>
        </div>
        <DownloadApp />
        <NewsLetter />
        <div className='flex flex-col items-start justify-center lg:basis-1/4 md:basis-1/2 sm:flex-col sm:mt-12'>
          <GridViewHeader showViewMore={false}>Contact Us</GridViewHeader>
          {
            contactArr.map(item => (
              <div className='flex justify-start items-center display-para w-full gap-2 mb-4' key={item.title}>
                <div className='flex justify-center items-center basis-1/6 bg-light p-3 border-radius-sm'>
                  <i className='material-icons'>{item.icon}</i>
                </div>
                <div className='flex flex-col justify-center items-start'>
                  <p>{item.title} :</p>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))
          }
          <div className='flex w-full gap-4'>
            <p>Follow Us:</p>
            <i className='material-icons'>filter</i>
            <i className='material-icons'>filter_1</i>
            <i className='material-icons'>filter_2</i>
            <i className='material-icons'>filter_3</i>
          </div>
        </div>
      </div>
      <CopyRight />
    </footer>
  )
}
