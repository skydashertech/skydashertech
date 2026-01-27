import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const ThankYou = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f8f8ff' }}>
            <div className="max-w-md w-full text-center space-y-6">
                <div className="flex justify-center">
                    <div className="rounded-full p-4" style={{ backgroundColor: 'rgba(255, 60, 26, 0.1)' }}>
                        <CheckCircle className="h-16 w-16 sm:h-20 sm:w-20" style={{ color: '#FF3C1A' }} />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Thank You!
                    </h1>
                    <p className="text-lg text-gray-600">
                        Your message has been successfully sent. We appreciate you contacting SkyDasher Tech and will get back to you shortly.
                    </p>
                </div>

                <div className="pt-4">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                        style={{ backgroundColor: '#FF3C1A' }}
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
