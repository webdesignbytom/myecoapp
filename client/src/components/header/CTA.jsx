import React from 'react'

function CTA() {
  return (
    <div className='grid grid-flow-col between'>
      <button className='bg-eco-green border-2 rounded px-4 py-2 text-white hover:text-eco-green hover:bg-white hover:border-eco-green'>See More</button>
      <button className='border-2 rounded'>Projects</button>
      <button className='border-2 rounded'>Goals</button>
    </div>
  )
}

export default CTA