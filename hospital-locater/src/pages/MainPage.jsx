import Logo from "../components/Logo";
import Description from "../components/Description";

const MainPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="p-8 md:p-16">
                <Logo />
                <Description />
            </div>
        </div>
    );
}

export default MainPage;