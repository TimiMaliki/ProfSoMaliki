import StraightLines from "../component/StraightLines";
import Awards from "./Awards";
import CertificateCarousel from "./Certifications";
import GoogleScholar from "./GoogleScholar";



type Props = {}

function Home({ }: Props) {
    return (
        <div className="w-full overflow-hidden">
            <StraightLines header={"Professor of Applied Mathematics"}
                title={"Professor of Applied Mathematics at Michael Okpara Federal University of Agriculture, Umudike (MOUAU), Nigeria."} />
            <GoogleScholar />
            <Awards/>
            <CertificateCarousel/>
        </div>
    )
}

export default Home