'use client';
import Login from '@/components/login/login';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [token, setToken] = useState(null);
  console.log(token, 'token>>');

  const router = useRouter();

  useEffect(() => {
    // Make a request to the API to retrieve the token
    fetch('/api/token')
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'data>>');
        console.log(data.token, 'data.token>>');
        if (data.token) {
          setToken(data.token);
        }
        if (data.token === undefined) {
          router.push('/login');
        }
      })
      .catch((error) => {
        console.error('Error fetching token:', error);
      });
  }, []);
  // if (token === null)
  //   return <h1 className="text-white text-4xl h-screen">Login</h1>;
  return <h1 className="text-white text-4xl h-screen">Dashboard</h1>;
};

export default Page;
