"use client"
import React, { useState, useEffect} from 'react';
import { FaUser, FaRegHeart } from "react-icons/fa";
import { CiSearch } from 'react-icons/ci';
import { IoLocationOutline } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useFilter } from '../../../../../context/page';
import LoginPrompt from '../../../(auth)/login/LoginPrompt';

const NavBar:React.FC = () => {

    const {searchTerm, setSearchTerm, wishlist} = useFilter();
    const [showPrompt, setShowPrompt] = useState(false);
    const [username, setUsername] = useState<string | null>(null);

    const toggleLoginPrompt = () => setShowPrompt(!showPrompt);
    
    useEffect(() => {
        const storedUser = Cookies.get('user');
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setUsername(userData.username);
        }
    }, []);

    return (
        <div className='border border-b-gray-400 sticky top-0 z-10 bg-white flex justify-center items-center '>
            <div className='wrapper py-4 flex justify-between space-x-6 wrapper'>
                <div className='flex space-x-6'>
                    <h1>
                        <Link href='/' legacyBehavior>
                            <a>
                                <img src={'/images/Logo.png'} alt="Logo" />
                            </a>
                        </Link>
                    </h1>
                    <div className='hidden md:block'>
                        <div className='flex justify-between text-center pt-1'>
                            <IoLocationOutline className=' p-1 text-3xl rounded-xl mr-1' />
                            <span className='flex flex-col text-left ml-3'>Deliver to <strong>all</strong></span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-grow items-center bg-gray-200 rounded-md py-1 px-4 max-[540px]:hidden'>
                    <input 
                        type="text" 
                        placeholder="Search for products, categories or brands..." 
                        className='w-full bg-transparent outline-none border-none  placeholder:text-sm text-black' 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <CiSearch className='text-black text-2xl' />
                </div>
                <div className='flex items-center whitespace-nowrap cursor-pointer space-x-6'>
                    <div className="flex flex-col items-center" onClick={toggleLoginPrompt}>
                        <FaUser  className="text-lg md:text-xl" />
                        <h4 className='text-sm'>{username ? username : 'Sign In'}</h4>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaRegHeart className="text-lg md:text-xl" />
                        <h4 className="text-sm">Wishlist</h4>
                        <span className="text-sm absolute top-2 ml-6 bg-red-700 text-white px-1 rounded-lg text-center">{wishlist.length}</span>                        
                    </div>
                    <div className='hidden md:block'>
                        <div className="flex flex-col items-center">
                            <MdShoppingCart className="text-2xl" />
                            <h4 className="text-sm">Your Cart</h4>
                            <span className="text-sm absolute top-2 ml-5 bg-red-700 text-white px-1 rounded-lg text-center">0</span>
                        </div>
                    </div>
                </div>
            </div>
            {showPrompt && <LoginPrompt closeLoginPrompt={toggleLoginPrompt} />}
        </div>
    );
}

export default NavBar;
