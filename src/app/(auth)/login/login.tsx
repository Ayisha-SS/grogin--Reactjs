
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import Button from '@/app/_component/general/button';
import { useRouter } from 'next/navigation';
import NavbarTop from '@/app/_component/general/navbar/topBar';

const LoginFunction: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const router = useRouter();
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const storedUser = Cookies.get('user');
      if (!storedUser) {
        setMessage('No user found. Please sign up first.');
        return;
      }
  
      const userData = JSON.parse(storedUser);
      if (email === userData.email && password === userData.password) {
        const token = 'access_token_' + Math.random().toString(36).substr(2);
        Cookies.set('token', token);
        alert('Login Successful!');
        router.push('/');
      } else {
        setMessage('Incorrect email or password.');
      }
    };
  

    return (
        <div>
           <NavbarTop/>
           
            <div className='wrapper flex justify-between gap-20'>
                <div className='text-white w-[40%] '>
                    <div className=' py-20  rounded-md  '>
                        <h2 className='font-medium text-[50px] text-[#181818] text-center'>Welcome back</h2>
                        <h3 className='text-xl text-[#030303] font-normal text-center'>Welcome back! Please enter your details.</h3>
                        <form onSubmit={handleSubmit}>
                            <div className='mt-[50px]'>
                                <p className='ml-1 text-[#181818] font-medium'>Email</p>
                                <input
                                    type='email' 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter your Email ' 
                                    className='border border-[#C4C4C4] pl-4 py-3 rounded-lg  w-full text-[#636364] text-base font-light'
                                />
                            </div>
                            <div className='mt-[30px]'>
                                <p className='ml-1 text-[#181818] font-medium'>Password</p>
                                <input
                                    type='password' 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder=' password' 
                                    className='border border-[#C4C4C4] pl-4 py-3 rounded-lg  w-full text-[#636364] text-base font-light'
                                />
                                <div className='flex justify-end mt-5 mr-2 text-[#181818]'><small>Forgot Password</small></div>
                            </div>
                            <div className='flex justify-center items-center mt-5'>
                                <Button label='Login' className='bg-[#634C9F] rounded-xl w-full py-3 text-[20px]'/>
                            </div>
                            <div className='flex justify-center items-center mt-5'>
                                <p className='text-[#636364]'>Don't have an account?<Link href='/signup' className='text-[#181818] '>SignUp for free!</Link></p>
                            </div>
                            {message && <div className='text-red-500 text-center text-sm'>{message}</div>}
                        </form>
                    </div>
                </div>
                <div className='w-[50%] '>
                    <img src="\images\Right Side.png" alt="Image" />
                </div>
            </div>
        </div>
    )
}

export default LoginFunction;

