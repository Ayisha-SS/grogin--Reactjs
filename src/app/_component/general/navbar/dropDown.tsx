// components/NavbarBottom.js
"use client"
import React, { useState } from 'react';
import Link from 'next/link';

function NavbarBottom() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };   
    const closeMenu = () => {
        setIsOpen(false);
    };

    const [selectedMenu, setSelectedMenu] = useState(null);
    const handleMenuClick = (menuName) => {
        setSelectedMenu(menuName);
        setIsOpen(false);
    }

    return (
        <div className='border-2 border-b-gray-400'>
            <div className="wrapper flex justify-between py-3 whitespace-nowrap">
                <div className='hidden sm:block'>              
                    <div className='flex space-x-6 font-medium cursor-pointer'>
                        <Link href='/' legacyBehavior>
                            <a onClick={() => handleMenuClick('Home')} className={`menu-item ${selectedMenu === 'Home' ? 'text-[#634c9f]' : 'text-black'} `}>
                                Home
                            </a>
                        </Link>
                        <Link href='/shop' legacyBehavior>
                            <a onClick={() => handleMenuClick('Shop')} className={selectedMenu === 'Shop' ? 'text-[#634c9f]' : 'text-black'}>
                                Shop
                            </a>
                        </Link>
                        <Link href='/fruits-vegetables' legacyBehavior>
                            <a onClick={() => handleMenuClick('Fruits & Vegetables')} className={selectedMenu === 'Fruits & Vegetables' ? 'text-[#634c9f]' : 'text-black'}>
                                Fruits & Vegetables
                            </a>
                        </Link>
                        <Link href='/beverages' legacyBehavior>
                            <a onClick={() => handleMenuClick('Beverages')} className={selectedMenu === 'Beverages' ? 'text-[#634c9f]' : 'text-black'}>
                                Beverages
                            </a>
                        </Link>
                        <Link href='/blog' legacyBehavior>
                            <a onClick={() => handleMenuClick('Blog')} className={selectedMenu === 'Blog' ? 'text-[#634c9f]' : 'text-black'}>
                                Blog
                            </a>
                        </Link>
                        <Link href='/contact' legacyBehavior>
                            <a onClick={() => handleMenuClick('Contact')} className={selectedMenu === 'Contact' ? 'text-[#634c9f]' : 'text-black'}>
                                Contact
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <div className='flex space-x-4 font-bold'>
                        <h4>Trending Products</h4>
                        <div className='flex'>
                            <h4 className='text-red-600 mr-2'>Almost Finished</h4>
                            <button type="button" className="text-white bg-gradient-to-r from-red-800 via-red-400 to-orange-400 rounded-lg text-xs text-center py-1 px-2">Sale</button>
                        </div>
                    </div>
                </div>
                <div className='sm:hidden'>
                    <button onClick={toggleMenu} className='text-xl'>
                        &#9776;
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className='md:hidden fixed top-50% left-0 w-screen h-screen bg-white z-50'>
                    <div className='wrapper flex flex-col space-y-2 font-bold my-4'>
                        <button onClick={closeMenu} className="absolute top-0 right-0 m-4 text-xl">&#x2716;</button>
                        <Link href='/' legacyBehavior>
                            <a onClick={() => handleMenuClick('Home')}>Home</a>
                        </Link>
                        <Link href='/shop' legacyBehavior>
                            <a onClick={() => handleMenuClick('Shop')}>Shop</a>
                        </Link>
                        <Link href='/fruits-vegetables' legacyBehavior>
                            <a onClick={() => handleMenuClick('Fruits & Vegetables')}>Fruits & Vegetables</a>
                        </Link>
                        <Link href='/beverages' legacyBehavior>
                            <a onClick={() => handleMenuClick('Beverages')}>Beverages</a>
                        </Link>
                        <Link href='/blog' legacyBehavior>
                            <a onClick={() => handleMenuClick('Blog')}>Blog</a>
                        </Link>
                        <Link href='/contact' legacyBehavior>
                            <a onClick={() => handleMenuClick('Contact')}>Contact</a>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavbarBottom;
