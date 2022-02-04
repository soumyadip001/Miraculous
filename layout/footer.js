import React from 'react'
import Button from '../components/forms/Button';
import TextInput from '../components/forms/TextInput';
import GridViewHeader from '../components/sections/GridViewHeader';

const contactArr = []

export default function footer() {
  return (
    <footer className='w-full flex flex-col justify-center items-center mt-8 mb-8 px-20 text-white'>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/logo.png" alt="Miraculous Logo" />
      </a>
      <p className='display-2'>The Miraculous</p>
      <div className='w-full flex gap-8 items-start mt-16'>
        <div className='flex flex-col items-start justify-center basis-1/4'>
          <GridViewHeader showViewMore={false}>Miraculous Music Station</GridViewHeader>
          <p className='display-para'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
          </p>
        </div>
        <div className='flex flex-col items-start justify-center basis-1/4'>
          <GridViewHeader showViewMore={false}>Download Our App</GridViewHeader>
          <p className='display-para'>Go Mobile with our app. Listen to your favourite songs at just one click. Download Now !</p>
          <img src='/images/google_play.jpg' alt='Google Play' className='mt-4 cursor-pointer' />
          <img src='/images/app_store.jpg' alt='App Store' className='mt-4 cursor-pointer' />
          <img src='/images/windows.jpg' alt='Windows Store' className='mt-4 cursor-pointer' />
        </div>
        <div className='flex flex-col items-start justify-center'>
          <GridViewHeader showViewMore={false}>Subscribe</GridViewHeader>
          <p className='display-para'>Subscribe to our newsletter and get latest updates and offers.</p>
          <TextInput placeholder='Enter Your Name' />
          <TextInput placeholder='Enter Your Email' />
          <div className='mt-4 w-full'>
            <Button size={'md'} nomargin>Sign me up</Button>
          </div>
        </div>
        <div className='flex flex-col items-start justify-center basis-1/4'>
          <GridViewHeader showViewMore={false}>Contact Us</GridViewHeader>
          <div className='flex justify-start items-center display-para w-full gap-2 mb-4'>
            <div className='flex justify-center items-center basis-1/6 bg-light p-3 border-radius-sm'>
              <i className='material-icons'>call</i>
            </div>
            <div className='flex flex-col justify-center items-start'>
              <p>Call Us :</p>
              <p>(+1) 202-555-0176, (+1) 2025-5501</p>
            </div>
          </div>
          <div className='flex justify-start items-center display-para w-full gap-2 mb-4'>
            <div className='flex justify-center items-center basis-1/6 bg-light p-3 border-radius-sm'>
              <i className='material-icons'>email</i>
            </div>
            <div className='flex flex-col justify-center items-start'>
              <p>Email Us :</p>
              <p>dummy@mail.com</p>
            </div>
          </div>
          <div className='flex justify-start items-center display-para w-full gap-2 mb-4'>
            <div className='flex justify-center items-center basis-1/6 bg-light p-3 border-radius-sm'>
              <i className='material-icons'>location_on</i>
            </div>
            <div className='flex flex-col justify-center items-start'>
              <p>Walk In :</p>
              <p>598 Old House Drive, London</p>
            </div>
          </div>
          <div className='flex w-full gap-4'>
            <p>Follow Us:</p>
            <i className='material-icons'>filter</i>
            <i className='material-icons'>filter_1</i>
            <i className='material-icons'>filter_2</i>
            <i className='material-icons'>filter_3</i>
          </div>
        </div>
      </div>
      <p className='display-para mt-16'>
        Copyright © 2022 <span className='text-accent'>The Miraculous Music Template</span>. All Rights Reserved.
      </p>
    </footer>
  )
}
