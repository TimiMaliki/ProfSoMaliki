import React from 'react'
import Image from "next/image";
import TwoStraightLines from "../component/TwoStraightLines";
import Cert from "../images/certificate.jpg"
import ProfPic from "../images/dadspicOne.jpg"
import Link from 'next/link';

type Props = {}

function GoogleScholar({ }: Props) {
    return (
        <section className="">
            <div className="w-full overflow-x-hidden">
                <TwoStraightLines />
            </div>

            {/* image */}
            <div className="w-full flex items-center justify-center">
                <div className="imgOne">
                    <Image src={ProfPic} alt="Professor Picture" className="object-cover w-325 rounded box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;" />
                </div>
            </div>

            {/* text */}
            <div className='mt-8'>
             <h2 className='text-3xl font-bold text-center'>
                Professor S. O. Maliki is a Google Scholar.
             </h2>
           <div className="w-full flex items-center justify-center mt-4 mb-8">
           <Link href="https://scholar.google.com/citations?user=d8rlgb8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
             <button className="button-56" role="button">Google Scholar</button>
           </Link>
           </div>
            </div>

        </section>
    )
}

export default GoogleScholar