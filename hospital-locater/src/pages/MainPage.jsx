import Logo from "../components/Logo";
import Description from "../components/Description";

/* ---------------------------------------------
   MAIN PAGE COMPONENT
---------------------------------------------- */
const MainPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] gap-4">
            <Logo />
            <Description />
        </div>
    );
};

export default MainPage;
