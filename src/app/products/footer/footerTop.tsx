// components/FooterTop.js
"use client"
import React, { useState } from 'react';
import { CiMail } from "react-icons/ci";


export default function FooterTop() {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        setIsValid(isValidEmail);
    };

    const handleSubmit = () => {
        if (!isValid) {
            alert('Please enter a valid email address');
            setEmail('');
        } else {
            alert(`Email submitted: ${email}`);
            setEmail('');
        }
    };

    return (
        <div className='flex flex-wrap space-y-1 justify-between border-b border-b-gray-400 pb-10'>
            <div>
                <h4 className='font-bold text-xl'>Join our newsletter for £10 off</h4>
                <small className='text-gray-600'>
                    Register now to get latest updates on promotions & <br /> coupons. Don't worry, we do not spam!
                </small>
            </div>
            <div className='space-y-2'>
                <div className='flex relative items-center gap-2'>
                    <CiMail className='absolute left-3' size={20}/>
                    <input 
                        type="text" 
                        placeholder="Enter your email address"
                        className='py-2 px-10 pl-10 rounded-lg  border'
                        value={email}
                        onChange={handleChange}
                    />
                    <button 
                        className='absolute right-[8rem] top-0 h-full border bg-[#634C9F] text-white border-none p-2 rounded-r-lg' 
                        onClick={handleSubmit}
                    >
                        Send
                    </button>
                </div>
                <p className='text-xs text-gray-500'>
                    By subscribing you agree to our <a href='#' className='text-[#634C9F]'>Terms & Conditions and Privacy & Cookies Policy.</a>
                </p>
            </div>
        </div>
    );
}

