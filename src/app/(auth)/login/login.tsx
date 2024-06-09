// "use client";
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

//     const handleSubmit = async (e:any) =>{
//         e.preventDefault();

//         if(!email || !password){
//             setMessage("Email and Password are required.");
//             return;
//         }

//         // try{
//         //     const response = await axios.post("https://traveller.talrop.works/api/v1/auth/token/",{email, password});
//         //     const { token } = response.data;
//         //     Cookies.set('token',token);
//         //     alert('Login Successfull!');
//         //     router.push('/')
//         // } catch(error: unknown) {
//         //     console.error('Login failed:',error);
//         //     if (axios.isAxiosError(error)){
//         //         setMessage(error.response?.data.details || 'Login failed.Please check your credential')
//         //     } else {
//         //         setMessage('An error occurred. Please try again later.')
//         //     }
//         // }

//         axios
// 			.post('https://traveller.talrop.works/api/v1/auth/token/', {
// 				email,
// 				password
// 			})
// 			.then((response) => {
// 				let data = response.data;
// 				localStorage.setItem("user_data", JSON.stringify(data));
// 				// updateUserData({ type: "LOGIN", payload: data });
// 				// navigate("/");
//                 router.push('/')
// 			})
// 			.catch((error) => {
// 				console.error(error.response.status);
// 				if (error.response.status === 401) {
// 					if (error.response.data.username) {
// 						setMessage ("Invalid username");
// 					} else if (error.response.password) {
// 						setMessage ("Invalid password");
// 					} else {
// 						setMessage ("Invalid username or password");
// 					}
// 				} else {
// 					setMessage("An error occurred.Please try again later.");
// 				}
// 			});
//     };
  
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
import axios, {AxiosError} from 'axios';
import { useRouter } from 'next/navigation';

const LoginFunction:React.FC = () => {
   
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [message, setMessage] = useState('');

    const router = useRouter();

    const handleSubmit = async (e:any) =>{
        e.preventDefault();

        if(!email || !password){
            setMessage("Email and Password are required.");
            return;
        }

        // try{
        //     const response = await axios.post("https://traveller.talrop.works/api/v1/auth/token/",{email, password});
        //     const { token } = response.data;
        //     Cookies.set('token',token);
        //     alert('Login Successfull!');
        //     router.push('/')
        // } catch(error: unknown) {
        //     console.error('Login failed:',error);
        //     if (axios.isAxiosError(error)){
        //         setMessage(error.response?.data.details || 'Login failed.Please check your credential')
        //     } else {
        //         setMessage('An error occurred. Please try again later.')
        //     }
        // }

        axios
			.post('https://traveller.talrop.works/api/v1/auth/token/', {
				email,
				password
			})
			.then((response) => {
				let data = response.data;
				localStorage.setItem("user_data", JSON.stringify(data));
				// updateUserData({ type: "LOGIN", payload: data });
				// navigate("/");
                router.push('/')
			})
			.catch((error) => {
				console.error(error.response.status);
				if (error.response.status === 401) {
					if (error.response.data.username) {
						setMessage ("Invalid username");
					} else if (error.response.password) {
						setMessage ("Invalid password");
					} else {
						setMessage ("Invalid username or password");
					}
				} else {
					setMessage("An error occurred.Please try again later.");
				}
			});
    };
  
    return (
        <div>
           
            <div className='border-b-2 border-b-yellow-600'>
                <div className='wrapper items-center flex flex-col justify-center space-x-1'>
                    <div className='pt-5'>
                        <h1><img src="\images\Logo.png" alt="Logo" /></h1>
                    </div>
                    <div>
                        <h2 className='text-black font-bold'>Where People Shops Groceires</h2>
                    </div>
                </div>
            </div>
            <div className='py-20 wrapper'>
                <div className='flex justify-center items-center  text-white'>
                    <div className='bg-black p-6 rounded-md space-y-4 w-full md:w-5/12'>
                        <h2 className='font-bold text-2xl flex justify-center items-center'>Login</h2>
                        {/* <form onSubmit={handleSubmit}> */}
                        <form >
                            <div>
                                <p className='ml-1'>Email</p>
                                <input
                                    type='email' 
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter your Email Id' 
                                    className='border border-gray-600 pl-4 py-1 rounded-lg text-black w-full'
                                />
                            </div>
                            <div>
                                <p className='ml-1'>Password</p>
                                <input
                                    type='password' 
                                    // value={password}
                                    // onChange={(e) => setpassword(e.target.value)}
                                    placeholder='Enter your password' 
                                    className='border border-gray-600 pl-4 py-1 rounded-lg text-black w-full'
                                />
                                <div className='flex justify-end text-gray-300 mr-2'><small>Forgot Password</small></div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Button label='Login'/>
                            </div>
                            <div className='flex justify-center items-center'>
                                <p>Not a Member ? <Link href='/signup' className='text-green-500 underline'>SignUp</Link></p>
                            </div>
                            {/* {message && <div className='text-red-500 text-center text-sm'>{message}</div>} */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginFunction;