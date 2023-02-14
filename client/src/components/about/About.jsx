import React from 'react';

function About() {
  return (
    <section
      id='about'
      className='h-screen px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'
    >
      <article>

        <h4 className='inline-block text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-eco-green rounded-full'>
          Whats it all for?
        </h4>
        <h2 className='text-eco-green font-extrabold text-4xl py-4 md:py-4 text-center'>About Us</h2>
        <div className='bg-eco-green-pale p-4'>
            <div>
                <p><span>Welcome to myecoapp</span> where we are using 100% of profits to help the environment and the public at the same time by giving away solar panels! We have a few other projects on the go as well and we hope you browse our site a little. By looking at the site you have already made us a little bit of money we can put towards helpful causes.</p>
            </div>
        </div>
      </article>
    </section>
  );
}

export default About;
