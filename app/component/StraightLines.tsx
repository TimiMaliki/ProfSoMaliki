import React from 'react'
import Header from './Header'
import StraightLineAndText from './StraightLineAndText'

type Props = {
  header: string,
  title: string
}

function StraightLines({header,title}: Props) {
  return (
    <div className='p-3 md:p-10'>
      <div className="long-line w-full md:w-449 border bg-black"></div>
      <div className="header mt-2 text-4xl md:text-6xl font-black text-center">
        <Header title={header} />
      </div>
      <div className='text-4xl font-light text-center'>
        <StraightLineAndText title={title}  />
      </div>
    </div>
  )
}

export default StraightLines