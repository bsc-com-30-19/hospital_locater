import { Link } from "react-router-dom";

const BackButton =() => {
    return(
        <Link to="/">
            <div className="rounded-[5px] p-[0.5rem] w-[10rem] bg-[#9BD1E5] mx-auto flex justify-center align-middle object-contain">
            <p className="py-4 ">Go Back To The Main Page</p>
            </div>
        </Link>
    )
}

export default BackButton;