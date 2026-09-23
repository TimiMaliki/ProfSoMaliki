import StraightLines from "../component/StraightLines";
import GoogleScholar from "./GoogleScholar";



type Props = {}

function Home({ }: Props) {
    return (
        <div className="w-full overflow-hidden">
            <StraightLines header={"Professor of Applied Mathematics"}
                title={"Professor S. O. Maliki is a Google Scholar."} />
                <GoogleScholar/>
        </div>
    )
}

export default Home