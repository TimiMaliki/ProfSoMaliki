import React from 'react'

type Props = {
    title: string
}

function StraightLineAndText({title}: Props) {
  return (
    <div className='md:p-2'>
         {/* <div className="long-line w-full md:w-449 border bg-black"></div> */}
        {title}
        </div>
  )
}

export default StraightLineAndText