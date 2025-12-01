import Logo from "../components/Logo";
import Description from "../components/Description";
import LocaterButton from "../components/LocaterButton";

const MainPage = () => {
    
    return (
        <div className=" items-center justify-center h-[80vh] gap-4 px-[18rem]">
           <Logo />
           <Description />
           <LocaterButton />
        </div>

    );
};

export default MainPage;
