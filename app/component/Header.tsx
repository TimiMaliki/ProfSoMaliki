import React from 'react'

type Props = {
    title: string
}

function Headers({title}: Props) {
  return (
    <div className=''>
        {title}
    </div>
  )
}

export default  Headers 