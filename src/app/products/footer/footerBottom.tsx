
import React from 'react';
import Link from 'next/link';

export default function FooterBottom() {
    return (
        <div className='flex flex-wrap justify-between pt-10 space-y-4'>
            <div>
                <p className='text-gray-600'>Copyright 2024 © Grogin WooCommerce WordPress Theme. All right reserved. Powered by KLBTheme.</p>
                <div className='flex max-[300px]:flex-col max-[300px]:space-y-2 space-x-2 items-center mt-5'>
                    <div className='w-1/12 max-[580px]:w-2/12'><img src={'/images/Visa.png'} alt="Visa" className='w-full'/></div>
                    <div className='w-1/12 max-[580px]:w-2/12'><img src={'/images/Mastercard.png'} alt="Mastercard" className='w-full'/></div>
                    <div className='w-1/12 max-[580px]:w-2/12'><img src={'/images/Paypal.png'} alt="Paypal" className='w-full'/></div>
                    <div className='w-1/12 max-[580px]:w-2/12'><img src={'/images/Skrill.png'} alt="Skrill" className='w-full'/></div>
                    <div className='w-1/12 max-[580px]:w-2/12'><img src={'/images/Klarna.png'} alt="Klarna" className='w-full'/></div>
                </div>
            </div>
            <div className='flex max-[440px]:flex-col max-[440px]:space-x-0 max-[440px]:space-y-2 whitespace-nowrap font-semibold space-x-4 underline cursor-pointer'>
                <Link href='/terms' legacyBehavior><a><h4>Terms and Conditions</h4></a></Link>
                <Link href='/privacy' legacyBehavior><a><h4>Privacy Policy</h4></a></Link>
                <Link href='/order-tracking' legacyBehavior><a><h4>Order Tracking</h4></a></Link>
            </div>
        </div>
    )
}


