import StraightLines from "../component/StraightLines";
import Awards from "./Awards";
import CertificateCarousel from "./Certifications";
import GoogleScholar from "./GoogleScholar";
import SelectedWorks from "./LearnedSociety";



type Props = {}

function Home({ }: Props) {
    return (
        <div className="w-full overflow-hidden">
            <StraightLines header={"Professor of Applied Mathematics"}
                title={"Professor of Applied Mathematics at Michael Okpara Federal University of Agriculture, Umudike (MOUAU), Nigeria."} />
            <GoogleScholar />
            <Awards/>
            <CertificateCarousel/>
            <SelectedWorks/>
        </div>
    )
}

export default Home