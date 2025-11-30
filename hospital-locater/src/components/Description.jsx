import { useState, useEffect } from 'react';

const Description = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

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
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Hospital Locater
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Your trusted companion for finding quality healthcare when you need it most.
                    Locate the nearest health facilities with ease and confidence.
                </p>
            </div>

            {/* Main Description Card */}
            <div
                className={`relative mb-16 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
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
            </div>

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
                    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                        Start Finding Healthcare Now
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;
