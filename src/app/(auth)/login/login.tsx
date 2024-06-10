

 "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Button from '@/app/_component/general/button';
// import Cookies from 'js-cookie';
// import axios, {AxiosError} from 'axios';
// import { useRouter } from 'next/navigation';

// const LoginFunction:React.FC = () => {
   
//     const [email, setEmail] = useState('');
//     const [password, setpassword] = useState('');
//     const [message, setMessage] = useState('');

//     const router = useRouter();

//     // const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
//     //     e.preventDefault();

//     //     if(!email || !password){
//     //         setMessage("Email and Password are required.");
//     //         return;
//     //     }

//     //     // try{
//     //     //     const response = await axios.post("https://traveller.talrop.works/api/v1/auth/token/",{email, password});
//     //     //     const { token } = response.data;
//     //     //     Cookies.set('token',token);
//     //     //     alert('Login Successfull!');
//     //     //     router.push('/')
//     //     // } catch(error: unknown) {
//     //     //     console.error('Login failed:',error);
//     //     //     if (axios.isAxiosError(error)){
//     //     //         setMessage(error.response?.data.details || 'Login failed.Please check your credential')
//     //     //     } else {
//     //     //         setMessage('An error occurred. Please try again later.')
//     //     //     }
//     //     // }

//     //     axios
// 	// 		.post('https://traveller.talrop.works/api/v1/auth/token/', {
// 	// 			email,
// 	// 			password
// 	// 		})
// 	// 		.then((response) => {
// 	// 			let data = response.data;
// 	// 			localStorage.setItem("user_data", JSON.stringify(data));
// 	// 			// updateUserData({ type: "LOGIN", payload: data });
// 	// 			// navigate("/");
//     //             router.push('/')
// 	// 		})
// 	// 		.catch((error) => {
// 	// 			console.error(error.response.status);
// 	// 			if (error.response.status === 401) {
// 	// 				if (error.response.data.username) {
// 	// 					setMessage ("Invalid username");
// 	// 				} else if (error.response.password) {
// 	// 					setMessage ("Invalid password");
// 	// 				} else {
// 	// 					setMessage ("Invalid username or password");
// 	// 				}
// 	// 			} else {
// 	// 				setMessage("An error occurred.Please try again later.");
// 	// 			}
// 	// 		});
//     // };

//     // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     //     e.preventDefault();
    
//     //     if (!email || !password) {
//     //       setMessage('Email and Password are required.');
//     //       return;
//     //     }
    
//     //     try {
//     //       const response = await axios.post(
//     //         'https://fakestoreapi.com/auth/login/', // Replace with your actual API endpoint
//     //         { email, password }
//     //       );
    
//     //       const { accessToken } = response.data;
    
//     //       if (!accessToken) {
//     //         throw new Error('Access token is missing in the response.');
//     //       }
    
//     //       // Check for existing login credentials in cookies (optional)
//     //       const existingAccessToken = Cookies.get('accessToken');
//     //       if (existingAccessToken) {
//     //         console.log('User already logged in with existing access token.');
//     //         router.push('/');
//     //         return;
//     //       }

    
//     //       // **Middleware check:**
//     //       const isLoggedIn = await checkLoginMiddleware(accessToken);
    
//     //       if (isLoggedIn) {
//     //         Cookies.set('accessToken', accessToken);
//     //         toast.success('Login Successful!');
//     //         router.push('/'); // Redirect to desired path after successful login
//     //       } else {
//     //         setMessage('Invalid login credentials or expired session.');
//     //       }
//     //     } catch (error: any) {
//     //       console.error('Login failed:', error);
    
//     //       if (axios.isAxiosError(error)) {
//     //         if (error.response?.status === 401) {
//     //           setMessage(
//     //             error.response?.data?.details || 'Invalid username or password.'
//     //           );
//     //         } else if (error.response?.status === 400) {
//     //           setMessage(error.response?.data?.message || 'Login failed.');
//     //         } else {
//     //           setMessage('An error occurred. Please try again later.');
//     //         }
//     //       } else {
//     //         setMessage('An error occurred. Please try again later.');
//     //       }
//     //     }
//     //   };

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
      
//         if (!email || !password) {
//           setMessage('Email and Password are required.');
//           return;
//         }
      
//         try {
//           const response = await axios.post(
//             'https://fakestoreapi.com/auth/login/', // Replace with your actual API endpoint
//             { email, password }
//           );
      
//           const { accessToken } = response.data;
      
//           if (!accessToken) {
//             throw new Error('Access token is missing in the response.');
//           }
      
//           // Send the access token to the server for session handling (if applicable)
//           const session = await fetch('https://fakestoreapi.com/auth/login/', { // Replace with your actual server-side endpoint
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ accessToken }), // Send the access token for session handling
//           }).then(response => response.json()); // Parse the JSON response
      
//           if (session.success) { // Replace "success" with the actual property indicating successful session handling
//             // Login successful!
//             Cookies.set('accessToken', accessToken, { secure: true }); // Set the access token cookie with the secure flag
//             toast.success('Login Successful!');
//             router.push('/'); // Redirect to the desired path after successful login
//           } else {
//             setMessage(session.message || 'Invalid login credentials or expired session.'); // Use the message from the response
//           }
//         } catch (error: any) {
//           console.error('Login failed:', error);
      
//           if (axios.isAxiosError(error)) {
//             if (error.response?.status === 401) {
//               setMessage(
//                 error.response?.data?.details || 'Invalid username or password.'
//               );
//             } else if (error.response?.status === 400) {
//               setMessage(error.response?.data?.message || 'Login failed.');
//             } else {
//               setMessage('An error occurred. Please try again later.');
//             }
//           } else {
//             setMessage('An error occurred. Please try again later.');
//           }
//         }
//       };

//     return (
//         <div>
           
//             <div className='border-b-2 border-b-yellow-600'>
//                 <div className='wrapper items-center flex flex-col justify-center space-x-1'>
//                     <div className='pt-5'>
//                         <h1><img src="\images\Logo.png" alt="Logo" /></h1>
//                     </div>
//                     <div>
//                         <h2 className='text-black font-bold'>Where People Shops Groceires</h2>
//                     </div>
//                 </div>
//             </div>
//             <div className='py-20 wrapper'>
//                 <div className='flex justify-center items-center  text-white'>
//                     <div className='bg-black p-6 rounded-md space-y-4 w-full md:w-5/12'>
//                         <h2 className='font-bold text-2xl flex justify-center items-center'>Login</h2>
//                         <form onSubmit={handleSubmit}>
//                         {/* <form > */}
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
//                                 <Button label='Login'/>
//                             </div>
//                             <div className='flex justify-center items-center'>
//                                 <p>Not a Member ? <Link href='/signup' className='text-green-500 underline'>SignUp</Link></p>
//                             </div>
//                             {message && <div className='text-red-500 text-center text-sm'>{message}</div>}
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LoginFunction;


"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@/app/_component/general/button';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import NavbarTop from '@/app/_component/general/navbar/topBar';

const LoginFunction: React.FC = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
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
            try {
                const response = await axios.post('https://traveller.talrop.works/api/v1/auth/token/', { username: email, password });
                const { token } = response.data;
                Cookies.set('token', token);
                alert('Login Successful!');
                router.push('/');
            } catch (error) {
                setMessage('Login failed. Please try again.');
            }
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
                        {/* <form > */}
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

