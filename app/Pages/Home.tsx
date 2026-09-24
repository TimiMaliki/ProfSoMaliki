import StraightLines from "../component/StraightLines";
import Awards from "../HomeSections/Awards";
import CertificateCarousel from "../HomeSections/Certifications";
import SpeakingEvents from "../HomeSections/Event";
import GoogleScholar from "../HomeSections/GoogleScholar";
import SelectedWorks from "../HomeSections/LearnedSociety";



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
            <SpeakingEvents/>
        </div>
    )
}

export default Home