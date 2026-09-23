import React from 'react'
import Image from "next/image";
import TwoStraightLines from "../component/TwoStraightLines";
import Cert from "../images/certificate.jpg"
import ProfPic from "../images/dadspicOne.jpg"

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
                    <Image src={ProfPic} width={500} alt="Professor Picture" className="object-cover w-225 rounded" />
                </div>
            </div>

        </section>
    )
}

export default GoogleScholar