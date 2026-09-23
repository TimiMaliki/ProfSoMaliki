import React from 'react'
import StraightLines from '../component/StraightLines'
import TrippleLines from '../component/TrippleLines'
import HonorsAndAwards from './AwardsCard'

type Props = {}

const Awards = (props: Props) => {
  return (
    <div className='w-full'>
     <div className="md:p-10">
        <StraightLines header="Awards" title=""/>
     </div>
     <div className="py-4 p-20">
        <TrippleLines />
     </div>
     <HonorsAndAwards />
    </div>
  )
}

export default Awards