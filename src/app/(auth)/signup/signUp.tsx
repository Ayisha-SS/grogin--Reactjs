

'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Button from '@/app/_component/general/button';
import axios from 'axios';
import Cookies from 'js-cookie';

function SignUpFunction() {
    // const tokenkey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXIiOiJtb3JfMjMxNCIsImlhdCI6MTcxNzk2MTE0OH0.ZKDtcuIGENHfup7dlQILk5vCzjUA8XYndBUkqOyvYkA`
    const [email,setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const router = useRouter();

    const handleSubmit = async(e:React.FormEvent) => {
        e.preventDefault();

        if (!email || !password || !name) {
            setMessage('All fields are required.');
            return;
        }

        try{
            const response = await axios.post('https://fakestoreapi.com/auth/login/',{email,password,name});
            console.log('Response:',response);
            const {token} = response.data;
            if(!token){
                throw new Error('Token is undefined');
            }
            Cookies.set('token',token);
            alert("SignUp Successfully");
            router.push('/');
        // } catch(error) {
        //     console.error('SignUp failed:',error)
        // }
    // } catch (error: any) {
    //     console.error('SignUp failed:', error);
    //     if (axios.isAxiosError(error)) {
    //         setMessage(error.response?.data?.detail || 'SignUp failed. Please check your credentials.');
    //     } else {
    //         setMessage('An error occurred. Please try again later.');
    //     }
    // }

} catch (error: any) {
    console.error('SignUp failed:', error);
    if (axios.isAxiosError(error)) {
        if (error.response?.data?.detail) {
            setMessage(error.response.data.detail);
        } else if (error.response?.data?.message) {
            setMessage(error.response.data.message);
        } else {
            setMessage('SignUp failed. Please check your credentials.');
        }
    } else {
        setMessage('An error occurred. Please try again later.');
    }
}
    };
    
    return (
        <div>
            {/* <Helmet>
                <title>Signup | Grogin</title>
            </Helmet> */}
            {/* <PromptBar /> */}
            <div className='border-b-2 border-b-yellow-600'>
                <div className='wrapper items-center flex flex-col justify-center space-x-1'>
                    <div className='pt-5 '>
                        <h1><img src='/images/Logo.png' alt="Logo" /></h1>
                    </div>
                    <div>
                        <h2 className='text-black font-bold'>Where People Shops Groceires</h2>
                    </div>
                </div>
            </div>
            <div className='py-20 wrapper'>
                <div className='flex justify-center items-center text-white'>
                    <div className='bg-black p-6 rounded-md space-y-4 w-full md:w-5/12'>
                        <h2 className='font-bold text-2xl flex justify-center items-center'>Signup</h2>
                        <form onSubmit={handleSubmit}>
                        {/* <form > */}
                            <div>
                                <p className='ml-1'>Username</p>
                                <input
                                    type='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='Enter your Username'
                                    className='border border-gray-600 pl-4 py-1 rounded-lg text-black w-full'
                                />
                            </div>
                            <div>
                                <p className='ml-1'>Email</p>
                                <input
                                    type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter your Email Id'
                                    className='border border-gray-600 pl-4 py-1 rounded-lg text-black w-full'
                                />
                            </div>
                            <div>
                                <p className='ml-1'>Password</p>
                                <input
                                    type='password'
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                    placeholder='Enter your password'
                                    className='border border-gray-600 pl-4 py-1 rounded-lg text-black w-full'
                                />
                                <div className='flex justify-end text-gray-300 mr-2'><small>Forgot Password</small></div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Button label='Sign Up'/>
                            </div>
                            <div className='flex justify-center items-center'>
                                <p>Already a Member <Link href='/login' className='text-green-500 underline'>SignIn</Link></p>
                            </div>
                            {message && <div className='text-red-500 mt-3 text-center text-sm'>{message}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpFunction;

