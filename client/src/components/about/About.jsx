import React from 'react';
import Design from '../../assets/img/design.jpg'
import Banner from '../../assets/img/myea-banner.png'

function About() {
  return (
    <section
      id='about'
      className='h-screen px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'
    >
      {/* Main container */}
      <article className='lg:mb-0 lg:pr-5 lg:pl-5'>
        {/* Component Titles */}
        <div>
          <h4 className='inline-block font-semibold tracking-wider uppercase bg-teal-accent-400 text-eco-green rounded-full'>
            Whats it all for?
          </h4>
          <h2 className='text-eco-green font-extrabold text-4xl py-4 md:py-4 text-center'>
            About Us
          </h2>
        </div>
        {/* Top row component */}
        <section className='md:flex flex-row'>
          {/* Text Component */}
          <div className='bg-eco-green-pale p-4'>
            <article>
              <p className='leading-tight md:leading-snug'>
                <span>Welcome to myecoapp</span> where we are using 100% of
                profits to help the environment and the public at the same time
                by giving away solar panels! We have a few other projects on the
                go as well and we hope you browse our site a little. By looking
                at the site you have already made us a little bit of money we
                can put towards helpful causes.
              </p>
              <p className='hidden md:block'>There are so many ways to make money these days outside of asking for donations. And alot of charities seem to be spending fortunes on advertising campaigns and management. So we seem to see money wasted or having little effect. We hope to change that. Our community has clearly defined goals! New ways to earn that money by taking advantage of the value of online traffic and advert space. Using the supporters world wide we will keep yo updated on all our progress and we disclose where every penny is spent. Currenly all our staff are volunteers so we waste nothing. </p>
            </article>
          </div>
          {/* Image component */}
          <section className='grid relative items-center py-2'>
            <img className='rounded-md' src={Design} alt="design" />
            <img className='absolute w-eighty' src={Banner} alt="Banner" />
          </section>
          <article className='md:hidden'>
          <p >There are so many ways to make money these days outside of asking for donations. And alot of charities seem to be spending fortunes on advertising campaigns and management. So we seem to see money wasted or having little effect. We hope to change that. Our community has clearly defined goals! New ways to earn that money by taking advantage of the value of online traffic and advert space. Using the supporters world wide we will keep yo updated on all our progress and we disclose where every penny is spent. Currenly all our staff are volunteers so we waste nothing. </p>
          </article>
        </section>
      </article>
    </section>
  );
}

export default About;
