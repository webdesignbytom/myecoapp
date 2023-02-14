import React from 'react';

function CTA() {
  return (
    <div className='grid grid-flow-col space-x-0 w-full gap-4'>
      <button className='bg-eco-green border-2 rounded-md px-4 py-2 text-white hover:text-eco-green-dark hover:bg-white hover:border-eco-green'>
        See More
      </button>
      <button className='border-2 rounded-md text-eco-green-dark border-eco-green hover:bg-eco-green px-4 py-2 hover:text-white hover:border-eco-green-dark'>
        Projects
      </button>
      <button className='border-2 rounded-md text-eco-green-dark border-eco-green hover:bg-eco-green px-4 py-2 hover:text-white hover:border-eco-green-dark'>
        Goals
      </button>
    </div>
  );
}

export default CTA;
