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
      <div className="long-line  w-full  border  border-black/50"></div>
      <div className="header mt-2 text-4xl md:text-6xl font-bold">
        <Header title={header} />
      </div>
      <div className='text-2xl font-light'>
        <StraightLineAndText title={title} />
      </div>
    </div>
  )
}

export default StraightLines