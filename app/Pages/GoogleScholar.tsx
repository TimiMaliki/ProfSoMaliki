import React from 'react'
import Image from "next/image";
import TwoStraightLines from "../component/TwoStraightLines";
import Cert from "../images/certificate.jpg"
import ProfPic from "../images/dadspicOne.jpg"

type Props = {}

function GoogleScholar({ }: Props) {
    return (
        <section className="mt-14">
            <div className="w-full overflow-x-hidden">
                <TwoStraightLines />
            </div>
            {/* images */}
            <div className="grid grid-cols-2 place-items-center overflow-hidden">
                {/* imageOne */}
                <div className="imgOne">
                    <Image src={ProfPic} width={500} alt="Professor Picture" className="object-cover" />
                </div>
            </div>
        </section>
    )
}

export default GoogleScholar