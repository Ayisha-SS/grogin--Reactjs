

// 'use client'
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Button from '@/app/_component/general/button';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// function SignUpFunction() {
//     // const tokenkey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXIiOiJtb3JfMjMxNCIsImlhdCI6MTcxNzk2MTE0OH0.ZKDtcuIGENHfup7dlQILk5vCzjUA8XYndBUkqOyvYkA`
//     const [email,setEmail] = useState('');
//     const [password, setpassword] = useState('');
//     const [userName, setUserName] = useState('');
//     const [message, setMessage] = useState('');

//     const router = useRouter();

// //     const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
// //         e.preventDefault();

// //         if (!email || !password || !userName) {
// //             setMessage('All fields are required.');
// //             return;
// //         }

// //         try{
// //             // const response = await axios.post('https://fakestoreapi.com/auth/login/',{email,password,name});
// //             const response = await axios.post('https://traveller.talrop.works/api/v1/auth/register/',{email,password,name});
// //             console.log('Response:',response);


// //             const {token} = response.data;
// //             if(!token){
// //                 throw new Error('Token is undefined');
// //             }
// //             Cookies.set('token',token);
// //             alert("SignUp Successfully");
// //             router.push('/');
// //         // } catch(error) {
// //         //     console.error('SignUp failed:',error)
// //         // }
// //     // } catch (error: any) {
// //     //     console.error('SignUp failed:', error);
// //     //     if (axios.isAxiosError(error)) {
// //     //         setMessage(error.response?.data?.detail || 'SignUp failed. Please check your credentials.');
// //     //     } else {
// //     //         setMessage('An error occurred. Please try again later.');
// //     //     }
// //     // }

// // } catch (error: any) {
// //     console.error('SignUp failed:', error);
// //     if (axios.isAxiosError(error)) {
// //         if (error.response?.data?.detail) {
// //             setMessage(error.response.data.detail);
// //         } else if (error.response?.data?.message) {
// //             setMessage(error.response.data.message);
// //         } else {
// //             setMessage('SignUp failed. Please check your credentials.');
// //         }
// //     } else {
// //         setMessage('An error occurred. Please try again later.');
// //     }
// // }
// //     };

// const handleSubmit = (e:any) => {
//     e.preventDefault();

//     if (!email || !password || !userName) {
//       setMessage('All fields are required.');
//       return;
//     }

//     const userData = {
//       email,
//       password,
//       userName, // Assuming these are the properties needed for login
//     };

//     // Validate email format (optional but recommended)
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setMessage('Please enter a valid email address.');
//       return;
//     }

//     // Hash password (highly recommended for real-world scenarios)
//     // Consider using a secure library like bcrypt.js or argon2 on the server-side
//     // This is a simplified in-browser hashing example (not for production)
//     const hashedPassword = btoa(password); // Replace with secure hashing

//     userData.password = hashedPassword;

//     try {
//       Cookies.set('userData', JSON.stringify(userData));
//       alert('Signup Successful!');
//       router.push('/login'); // Redirect to login page
//     } catch (error) {
//       console.error('Signup failed:', error);
//       setMessage('An error occurred. Please try again later.');
//     }
//   };
    
//     return (
//         <div>
//             {/* <Helmet>
//                 <title>Signup | Grogin</title>
//             </Helmet> */}
//             {/* <PromptBar /> */}
//             <div className='border-b-2 border-b-yellow-600'>
//                 <div className='wrapper items-center flex flex-col justify-center space-x-1'>
//                     <div className='pt-5 '>
//                         <h1><img src='/images/Logo.png' alt="Logo" /></h1>
//                     </div>
//                     <div>
//                         <h2 className='text-black font-bold'>Where People Shops Groceires</h2>
//                     </div>
//                 </div>
//             </div>
//             <div className='py-20 wrapper'>
//                 <div className='flex justify-center items-center text-white'>
//                     <div className='bg-black p-6 rounded-md space-y-4 w-full md:w-5/12'>
//                         <h2 className='font-bold text-2xl flex justify-center items-center'>Signup</h2>
//                         <form onSubmit={handleSubmit}>
//                         {/* <form > */}
//                             <div>
//                                 <p className='ml-1'>Username</p>
//                                 <input
//                                     type='text'
//                                     value={userName}
//                                     onChange={(e) => setUserName(e.target.value)}
//                                     placeholder='Enter your Username'
//                                     className='border border-gray-600 pl-4 py-1 rounded-lg text-black w-full'
//                                 />
//                             </div>
//                             <div>
//                                 <p className='ml-1'>Email</p>
//                                 <input
//                                     type='email'
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     placeholder='Enter your Email Id'
//                                     className='border border-gray-600 pl-4 py-1 rounded-lg text-black w-full'
//                                 />
//                             </div>
//                             <div>
//                                 <p className='ml-1'>Password</p>
//                                 <input
//                                     type='password'
//                                     value={password}
//                                     onChange={(e) => setpassword(e.target.value)}
//                                     placeholder='Enter your password'
//                                     className='border border-gray-600 pl-4 py-1 rounded-lg text-black w-full'
//                                 />
//                                 <div className='flex justify-end text-gray-300 mr-2'><small>Forgot Password</small></div>
//                             </div>
//                             <div className='flex justify-center items-center'>
//                                 <Button label='Sign Up'/>
//                             </div>
//                             <div className='flex justify-center items-center'>
//                                 <p>Already a Member <Link href='/login' className='text-green-500 underline'>SignIn</Link></p>
//                             </div>
//                             {message && <div className='text-red-500 mt-3 text-center text-sm'>{message}</div>}
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SignUpFunction;


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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username || !email || !password) {
            setMessage('All fields are required.');
            return;
        }

        try {
            const response = await axios.post('https://traveller.talrop.works/api/v1/auth/register/', { username, email, password });
            const userData = { username, email, password };
            Cookies.set('user', JSON.stringify(userData));
            alert('Signup Successful!');
            router.push('/login');
        } catch (error) {
            setMessage('Signup failed. Please try again.');
        }
    };

    return (
        <div>
           
            <div className='wrapper flex justify-between gap-20'>
                <div className='text-white w-[40%] '>
                    <div className=' py-20  rounded-md  '>
                    <h2 className='font-medium text-[50px] text-[#181818] text-center'>Welcome back</h2>
                    <h3 className='text-xl text-[#030303] font-normal text-center'>Welcome back! Please enter your details.</h3>
                        <form onSubmit={handleSubmit}>
                        {/* <form > */}
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

