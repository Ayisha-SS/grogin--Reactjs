
import React from 'react';
import Link from 'next/link';
import { MdPhoneInTalk } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function FooterMiddle() {
    return (
        <div className='py-10 flex flex-wrap space-y-2 justify-between border-b border-b-gray-400'>
            <div className='space-y-4'>
                <h4 className='font-bold'>Do You Need Help ?</h4>
                <p className='text-xm text-gray-600'>Autoseligen syr. Nek diarask fröbomba. Nör <br /> antipol kynoda nynat. Pressa fåmoska.</p>
                <div className='flex items-center space-x-4'>
                    <MdPhoneInTalk className='text-3xl' />
                    <div>
                        <p className='text-xs text-gray-700'>Monday-Friday: 08am-9pm</p>
                        <a href='tel:0800300353' className='font-bold'>0 800 300-353</a>
                    </div>
                </div>
                <div className='flex items-center space-x-4'>
                    <CiMail className='text-3xl' />
                    <div>
                        <p className='text-xs text-gray-700'>Need help with your order?</p>
                        <h4 className='font-bold'>info@example.com</h4>
                    </div>
                </div>
            </div>
            <div className='space-y-4'>
                <h4 className='font-bold'>Make Money with Us</h4>
                <ul className='text-xs text-gray-600 space-y-2'>
                    <li><a href="#">Sell on Grodin</a></li>
                    <li><a href="#">Sell Your Services on Grogin</a></li>
                    <li><a href="#">Sell on Grogin Business</a></li>
                    <li><a href="#">Sell Your Apps on Grogin</a></li>
                    <li><a href="#">Become an Affliate</a></li>
                    <li><a href="#">Advertise Your Products</a></li>
                    <li><a href="#">Self-Publish with Us</a></li>
                    <li><a href="#">Become an Blowwe Vendor</a></li>
                </ul>
            </div>
            <div className='space-y-4'>
                <h4 className='font-bold space-y-2'>Let Us Help You</h4>
                <ul className='text-xs text-gray-600 space-y-2'>
                    <li><a href="#">Accessibility Statement</a></li>
                    <li><a href="#">Your Orders</a></li>
                    <li><a href="#">Returns & Replacements</a></li>
                    <li><a href="#">Shipping Rates & Policies</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Cookie Settings</a></li>
                    <li><a href="#">Help Center</a></li>
                </ul>
            </div>
            <div className='space-y-4'>
                <h4 className='font-bold space-y-2'>Get to Know Us</h4>
                <ul className='text-xs text-gray-600 space-y-2'>
                    <li><a href="#">Careers for Grodin</a></li>
                    <li><a href="#">About Grogin</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Grogin Devices</a></li>
                    <li><a href="#">Customer reviews</a></li>
                    <li><a href="#">Social Responsibility</a></li>
                    <li><a href="#">Store Locations</a></li>
                </ul>
            </div>
            <div className='space-y-4'>
                <h4 className='font-bold space-y-2'>Download our app</h4>
                <div className='flex'>
                    <Link href='https://play.google.com/' legacyBehavior><a><img src={'/images/Google Play.png'} alt="Google Play" /></a></Link>
                    <small className='ml-2 text-gray-600'>Download App Get <br /> - 10% Discount</small>
                </div>
                <div className='flex'>
                    <Link href='https://www.apple.com/in/app-store/' legacyBehavior><a><img src={'/images/Apple Store.png'} alt="Apple Store" /></a></Link>
                    <small className='ml-2 text-gray-600'>Download App Get <br /> - 20% Discount</small>
                </div>
                <div className='space-y-2'>
                    <h6 className='text-xm text-gray-600'>Follow us on social media:</h6>
                    <div className='flex justify-between items-center space-x-3'>
                        <div className='bg-white rounded-md p-2 flex text-xl  text-[#267ff3]'>
                            <Link href='https://www.facebook.com/' legacyBehavior><a><FaFacebookF /></a></Link>
                        </div>
                        <div className='bg-white rounded-md p-2 flex text-xl  text-[#1da1f2]'>
                            <Link href='https://twitter.com/' legacyBehavior><a><FaTwitter /></a></Link>
                        </div>
                        <div className='bg-white rounded-md p-2 flex text-xl text-[#fe8080]'>
                            <Link href='https://www.instagram.com/' legacyBehavior><a><FaInstagram /></a></Link>
                        </div>
                        <div className='bg-white rounded-md p-2 flex text-xl  text-[#0077b5]'>
                            <Link href='https://in.linkedin.com/' legacyBehavior><a><FaLinkedin /></a></Link>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}
