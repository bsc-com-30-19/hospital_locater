import { Link } from "react-router-dom";

const BackButton =() => {
    return(
        <Link to="/">
            <div className="rounded-2xl w-20 bg-[#9BD1E5] flex justify-center align-middle object-contain">
            <p className="py-4 ">Back</p>
            </div>
        </Link>
    )
}

export default BackButton;