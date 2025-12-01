import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const InteractiveCard3D = ({ isVisible }) => {
    const [cardTransform, setCardTransform] = useState({ rotateX: 0, rotateY: 0 });
    const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 15;
        const rotateX = ((centerY - y) / centerY) * 15;

        setCardTransform({ rotateX, rotateY });
        setGlowPosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
    };

    const handleMouseLeave = () => {
        setCardTransform({ rotateX: 0, rotateY: 0 });
        setGlowPosition({ x: 50, y: 50 });
    };

    return (
        <div
            className={`relative mb-16 perspective-1000 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            {/* Animated gradient background blur */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20 animate-pulse"></div>

            {/* 3D Card Container */}
            <div
                className="relative preserve-3d transition-all duration-300 ease-out"
                style={{
                    transform: `perspective(1000px) rotateX(${cardTransform.rotateX}deg) rotateY(${cardTransform.rotateY}deg)`,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* Animated Background Layer 1 - Moving Gradient */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute -inset-full animate-spin-slow bg-gradient-conic from-blue-500 via-purple-500 to-pink-500"></div>
                    </div>
                </div>

                {/* Animated Background Layer 2 - Floating Shapes */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    {/* Floating medical icons/shapes */}
                    <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-float blur-xl"></div>
                    <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-float-delayed blur-xl"></div>
                    <div className="absolute bottom-20 left-32 w-24 h-24 bg-pink-400/20 rounded-full animate-float-slow blur-xl"></div>
                    <div className="absolute bottom-32 right-10 w-12 h-12 bg-blue-300/20 rounded-full animate-float blur-xl"></div>
                </div>

                {/* Mouse-tracking glow effect */}
                <div
                    className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(147, 51, 234, 0.3), transparent 50%)`,
                    }}
                ></div>

                {/* Main Card Content */}
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 overflow-hidden">
                    {/* Gradient overlay animation */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-shimmer"></div>

                    {/* Content */}
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
                            <span className="text-4xl animate-pulse">💡</span>
                            What We Offer
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Hospital Locater is a powerful web application designed to help you quickly and easily
                            find the nearest hospitals, clinics, and health facilities in your area. Whether you're
                            facing a medical emergency or simply need to find a healthcare provider, our app provides
                            you with accurate, up-to-date information at your fingertips.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            With an intuitive interface and advanced location services, we make healthcare access
                            simple and stress-free. Our mission is to ensure that quality medical care is never more
                            than a few clicks away.
                        </p>
                    </div>

                    {/* Decorative corner elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-tr-full"></div>
                </div>
            </div>
        </div>
    );
};

const Description = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleNavigateToHospitals = () => {
        navigate('/hospitallist');
    };

    const features = [
        {
            icon: '📍',
            title: 'Easy Location',
            description: 'Instantly find the nearest hospitals and health facilities based on your current location.',
        },
        {
            icon: '⚡',
            title: 'Fast & Reliable',
            description: 'Get real-time information about nearby health facilities with just a click.',
        },
        {
            icon: '🏥',
            title: 'Comprehensive Data',
            description: 'Access detailed information about hospitals, clinics, and emergency centers.',
        },
        {
            icon: '🔒',
            title: 'Secure & Private',
            description: 'Your location data is handled with the utmost security and privacy.',
        },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
            {/* Header Section */}
            <div
                className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                    Hospital Locater
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Your trusted companion for finding quality healthcare when you need it most.
                    Locate the nearest health facilities with ease and confidence.
                </p>
            </div>

            {/* 3D Interactive Main Description Card */}
            <InteractiveCard3D isVisible={isVisible} />

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`group relative transition-all duration-1000 transform ${isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'
                            }`}
                        style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* How It Works Section */}
            <div
                className={`transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    How It Works
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            step: '01',
                            title: 'Allow Location',
                            description: 'Grant permission for the app to access your current location.',
                        },
                        {
                            step: '02',
                            title: 'Search Nearby',
                            description: 'Our system instantly searches for health facilities near you.',
                        },
                        {
                            step: '03',
                            title: 'Get Directions',
                            description: 'View detailed information and get directions to your chosen facility.',
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="relative group"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                                <div className="text-6xl font-bold text-transparent bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div
                className={`mt-16 text-center transition-all duration-1000 delay-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-50"></div>
                    <div
                        onClick={handleNavigateToHospitals}
                        className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                        Start Finding Healthcare Now
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;
