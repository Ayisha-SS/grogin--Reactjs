"use client"
import React from 'react';
import Button from '@/app/_component/general/button';
import { useRouter } from 'next/navigation';
import { IoWarning } from 'react-icons/io5';
import Link from 'next/link';


interface LoginPromptProps {
    closeLoginPrompt: () => void;
}


const LoginPrompt:React.FC<LoginPromptProps> = ({closeLoginPrompt}) => {

    const router = useRouter();

    // const handleSignIn = () => {
    //     closeLoginPrompt();
    //    router.push('/auth/login/login');
    // };

  return (
    <div className='absolute p-2.5 right-[160px] top-[70px]  translate-x-(32%) bg-white z-10 shadow-lg shadow-[#ccc]'>
      <div className='flex justify-between w-[150px]'>
        <h5 className='text-base font-bold'>Hi boAthead!</h5>
        <span className='font-bold text-lg cursor-pointer' onClick={closeLoginPrompt} >&times;</span>
      </div>
      <div className='mt-2 items-center ' >
        {/* {userData ? (
          <button className='w-[100%] text-lg rounded-lg items-center bg-black text-white' onClick={handleLogout}>Log Out</button>
        ) : (
          <button className='w-[100%] text-lg items-center rounded-lg bg-black text-white' onClick={() => setLogin(true)}>Log In</button>
          )} */}
        {/* <button className='w-[100%] text-lg items-center rounded-lg bg-black text-white' onClick={() => setLogin(true)}>Log In</button> */}
        <Link href='/login'>
                     <Button label='Sign In' className='w-[100%] text-lg items-center rounded-lg bg-black text-white' />
                 </Link>
      </div>
    </div>
  );
};

export default LoginPrompt;
