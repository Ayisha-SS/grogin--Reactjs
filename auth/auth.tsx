'use client'
import React, { useEffect, ComponentType } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const auth = <P extends object>(WrappedComponent: ComponentType<P>): React.FC<P> => {
  const AuthComponent: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get('token');
      if (!token) {
        alert('You need to login to access this page.');
        router.replace('/login');
      }
    }, [router]);

    const token = Cookies.get('token');
    if (!token) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default auth;
