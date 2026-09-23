import React from 'react'

type Props = {
    title: string
}

function StraightLineAndText({title}: Props) {
  return (
    <div className='md:'>
         <div className="long-line w-full  border bg-black"></div>
        {title}
        </div>
  )
}

export default StraightLineAndText