import React from 'react'
import StraightLines from '../component/StraightLines'

type Props = {}

const Awards = (props: Props) => {
  return (
    <div className='w-full'>
     <div className="p-10">
        <StraightLines header="Awards" title="List Of Awards Given"/>
     </div>
    </div>
  )
}

export default Awards