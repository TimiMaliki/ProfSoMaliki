import React from 'react'
import Header from './Header'

type Props = {}

function StraightLines({ }: Props) {
  return (
    <div className='p-3 md:p-10'>
      <div className="long-line w-full md:w-449 border bg-black"></div>
      <div className="header mt-2 text-4xl md:text-8xl font-black">
         <Header title="Prof SO MALIKI" />
      </div>
    </div>
  )
}

export default StraightLines