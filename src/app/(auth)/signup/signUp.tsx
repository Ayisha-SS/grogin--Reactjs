
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Button from '@/app/_component/general/button';
import axios from 'axios';
import Cookies from 'js-cookie';

function SignUpFunction() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    

     const router = useRouter();
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      if (!username || !email || !password) {
        setMessage('All fields are required.');
        return;
      }
  
      const userData = { username, email, password };
      Cookies.set('user', JSON.stringify(userData));
      alert('Signup Successful!');
      router.push('/login')
    };
    
    return (
        <div>
           
            <div className='wrapper flex justify-between gap-20'>
                <div className='text-white w-[40%] '>
                    <div className=' py-20  rounded-md  '>
                    <h2 className='font-medium text-[50px] text-[#181818] text-center'>Welcome back</h2>
                    <h3 className='text-xl text-[#030303] font-normal text-center'>Welcome back! Please enter your details.</h3>
                        <form onSubmit={handleSubmit}>
                            <div className='mt-[50px]'>
                                <p className='ml-1 text-[#181818] font-medium'>Username</p>
                                <input
                                    type='text'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder='Enter username'
                                     className='border border-[#C4C4C4] pl-4 py-3 rounded-lg  w-full text-[#636364] text-base font-light'
                                />
                            </div>
                            <div className='mt-[30px]'>
                                <p className='ml-1 text-[#181818] font-medium'>Email</p>
                                <input
                                    type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter your email'
                                     className='border border-[#C4C4C4] pl-4 py-3 rounded-lg  w-full text-[#636364] text-base font-light'
                                />
                            </div>
                            <div className='mt-[30px]'>
                                <p className='ml-1 text-[#181818] font-medium'>Password</p>
                                <input
                                    type='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Enter password'
                                     className='border border-[#C4C4C4] pl-4 py-3 rounded-lg  w-full text-[#636364] text-base font-light'
                                />
                                <div className='flex justify-end text-gray-300 mr-2'><small>Forgot Password</small></div>
                            </div>
                            <div className='flex justify-center items-center mt-5'>
                                <Button label='Signup' className='bg-[#634C9F] rounded-xl w-full py-3 text-[20px]'/>
                            </div>
                            <div className='flex justify-center items-center mt-5'>
                                <p className='text-[#636364]'>Already a member?<Link href='/signup' className='text-[#181818] '>Login</Link></p>
                            </div>
                            {message && <div className='text-red-500 mt-3 text-center text-sm'>{message}</div>}
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

export default SignUpFunction;

