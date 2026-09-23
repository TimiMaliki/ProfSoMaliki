import React from 'react'

type Props = {}

function TwoStraightLines({ }: Props) {
  return (
    <div className='py-10 md:py-14 flex  items-center justify-center gap-10 p-2 md:p-10 overflow-x-hidden'>
      <div className="long-line w-600 md:w-500 border  border-black/50"></div>
      <div className="long-line w-200 border border-black/50"></div>
    </div>
  )
}

export default TwoStraightLines