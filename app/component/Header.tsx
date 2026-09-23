import React from 'react'

type Props = {
    title: string
}

function Header({title}: Props) {
  return (
    <div className=''>
        {title}
    </div>
  )
}

export default  Header 