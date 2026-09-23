import React from 'react'

type Props = {}

function TrippleLines({}: Props) {
  return (
    <div className='flex justify-center gap-6'>
        <div className='w-1/3  border border-black/50'></div>
        <div className='w-1/3  border border-black/50'></div>
        <div className='w-1/3   border border-black/50'></div>
    </div>
  )
}

export default TrippleLines