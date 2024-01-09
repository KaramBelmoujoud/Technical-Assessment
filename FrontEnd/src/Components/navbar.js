import React from 'react';
import logo from '../Images/karam.png';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 shadow-white shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-12 w-12" src={logo} alt="Logo" />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href='https://github.com/KaramBelmoujoud' className='font-black'>
                                Belmoujoud Karam</a>
                                <p> | </p>
                                <p>Github</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
