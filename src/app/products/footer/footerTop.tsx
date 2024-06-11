
"use client"
import React, { useState,useEffect } from 'react';
import { CiMail } from "react-icons/ci";

import { GiPartyPopper } from "react-icons/gi";


export default function FooterTop() {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [showPopUp, setShowPopup] = useState(false);
    const [subscribedEmails, setSubscribedEmails] = useState<string[]>([]);


    const handleChange = (e:any) => {
        const value = e.target.value;
        setEmail(value);
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        setIsValid(isValidEmail);
    };

    const handleSubmit = () => {
        if (!isValid) {
            alert('Please enter a valid email address');
            setEmail('');
        } else if (subscribedEmails.includes(email)) {
            alert('Email already subscribed');
            setEmail('');
        } else {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000); 
            setSubscribedEmails([...subscribedEmails, email]);
            setEmail('');
        }
    };

    useEffect( () => {
        if(showPopUp) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    })
    

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
                        type="email" 
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
            { showPopUp && (
            <div className='fixed top-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 z-50 w-full h-full '>
                <div className='bg-[#ab9bd5] text-white p-3 mt-3 text-4xl font-bold rounded-md z-50 w-[50%] h-[50%] shadow-neutral-950 flex flex-col gap-1 items-center justify-center sm:text-3xl max-[540px]:text-2xl max-[540px]:h-[40%] max-[360px]:text-xl'>
                    Newsletter added Successfully...!
                    <span className='flex gap-3'>
                        <GiPartyPopper size={50} color='black'/>
                    </span>
                </div>
            </div>
        )}
        </div>
        
    );
}

