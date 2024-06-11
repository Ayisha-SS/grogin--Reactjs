"use client"
import React,{useState,useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Cookies from 'js-cookie';
import Button from '@/app/_component/general/button';


interface LoginPromptProps {
    closeLoginPrompt: () => void;
}


const LoginPrompt:React.FC<LoginPromptProps> = ({closeLoginPrompt}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get('token');
      const storedUser = Cookies.get('user');
      if (storedUser) {
          const userData = JSON.parse(storedUser);
          setUsername(userData.username);
      }
      setIsLoggedIn(!!token);
  }, []);

 

  const handleLogout = () => {
    Cookies.remove('token');
    setIsLoggedIn(false);
    closeLoginPrompt();
    router.push('/');
};

  return (
    <div className='absolute p-2.5 right-[160px] top-[70px]  translate-x-(32%) bg-[#d0c2ec] z-10 shadow-lg shadow-[#ccc] ' >
      <div className='flex ml-4 justify-between w-[13rem] pb-2'>
        <h5 className='text-base font-bold mt-6'>Hi, {isLoggedIn ? username : 'boAthead'} !</h5>
        <span className='font-bold text-lg cursor-pointer' onClick={closeLoginPrompt} >&times;</span>
      </div>
      <div className='mt-2 items-center ' >
      {isLoggedIn ? (
                    <Button
                        label='Log Out'
                        className=' text-lg items-center rounded-lg bg-[#634C9F] text-white float-right'
                        onClick={handleLogout}
                    />
                ) : (
                    <Link href='/login'>
                        <Button label='Sign In' className='w-[100%] text-lg items-center rounded-lg bg-[#634C9F] text-white' />
                    </Link>
                )}
      </div>
    </div>
  );
};

export default LoginPrompt;
