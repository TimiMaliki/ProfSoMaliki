import StraightLines from "../component/StraightLines";
import GoogleScholar from "./GoogleScholar";



type Props = {}

function Home({ }: Props) {
    return (
        <div className="w-full overflow-hidden">
            <StraightLines header={"Professor S. O. Maliki"}
                title={"Decoding the Syntax of Meaning in a Digital World"} />
                <GoogleScholar/>
        </div>
    )
}

export default Home