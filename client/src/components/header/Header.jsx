import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className='h-screen bg-eco-green-pale px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14'>
        <div className='flex flex-col items-center justify-between w-full my-10 lg:flex-row'>
          <div className='mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 lg:pl-5'>
            <div className='max-w-xl mb-6'>
              <div>
                <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-eco-green rounded-full'>
                  Brand new web project
                </p>
              </div>
              <h2 className='font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6'>
                Everything you {' '}
                <br className='hidden md:block' />
                can imagine{' '}
                <span className='inline-block text-deep-purple-accent-400'>
                  is real
                </span>
              </h2>
              <p className='text-gray-700 text-base md:text-lg'>
                Help the environment from anywhere for free! At home or at any event. Use our apps to earn while you relax. We have done what we can to provide entertainment for you. Check it out below.
              </p>
            </div>
            <div className='flex items-center space-x-3'>
              <Link
                href='/'
                className='w-32 transition duration-300 hover:shadow-lg'
              >
                <img
                  src='https://kitwind.io/assets/kometa/app-store.png'
                  className='object-cover object-top w-full h-auto mx-auto'
                  alt=''
                />
              </Link>
              <Link
                href='/'
                className='w-32 transition duration-300 hover:shadow-lg'
              >
                <img
                  src='https://kitwind.io/assets/kometa/google-play.png'
                  className='object-cover object-top w-full h-auto mx-auto'
                  alt=''
                />
              </Link>
            </div>
          </div>
          {/* Phones */}
          <div className='flex h-full items-center justify-center lg:w-1/2'>
            <div className='w-2/5'>
              <img
                className='object-cover'
                src='https://kitwind.io/assets/kometa/one-girl-phone.png'
                alt=''
              />
            </div>
            <div className='w-5/12 -ml-16 lg:-ml-32'>
              <img
                className='object-cover'
                src='https://kitwind.io/assets/kometa/two-girls-phone.png'
                alt=''
              />
            </div>
          </div>
        </div>
        <Link
          to='/'
          aria-label='Scroll down'
          className='flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='currentColor'
          >
            <path d='M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z' />
          </svg>
        </Link>
      </div>
    </>
  );
}

export default Header;
