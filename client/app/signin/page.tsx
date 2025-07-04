'use client';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { useSignIn, useClerk } from '@clerk/nextjs';

const Page = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const { openSignUp } = useClerk();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  console.log('isLoaded:', isLoaded , signIn);
  const handleLogin = async (e: React.FormEvent) => {
    console.log('handleLogin called' , e);
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const result = await signIn.create({ identifier: email, password });
      console.log('Login result:', result);
      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error : any) {
      setErr(error.errors?.[0]?.message || 'Login failed');
    }
  };

  const loginWith = (provider: 'oauth_google' | 'oauth_facebook') => {
    try {
      
      signIn?.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: '/', // ✅ change to your success Page
        redirectUrlComplete: '/',
      }
    );
    } catch (error) {
      console.error('Error during login with provider:', error);
      setErr('Login failed, please try again.');
      
    }
    
  };
  return (
    <div className="text-2xl font-bold flex justify-center items-center h-screen">
      <AnimatePresence>
        <Card className="flex justify-center w-[50%] border-[#27548A] border-4 shadow-[15px_5px_0_0px_#163f70]">
          <CardHeader className="flex flex-col">
            <CardTitle className="text-3xl">Welcome To Eduai</CardTitle>
            <CardDescription>
              Courses Education Web and AI Assistant for study
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <p className="text-lg">Email</p>
              <Input
                type="email"
                placeholder="johnDoe@gmail.com"
                className="border-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <p className="text-lg mt-2">Password</p>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
            {err && <p className="text-sm text-red-500 mt-1">{err}</p>}
            <div className="mt-2 flex justify-between items-center">
              <Button
              type='submit'
              className="
              bg-[#A4B465]
              text-white round-full 
              cursor-pointer hover:bg-[#7c884c]
              transition duration-400 "
              >
                Login
              </Button>
              <motion.a
                initial={{ scale: 1.0 }}
                whileHover={{ scale: 1.05 }}
                href="/"
                onClick={() => openSignUp()}
                className="text-sm hover:bg-[#ebd59d] duration-300 px-2 py-1 rounded-2xl"
              >
                Do you have a Account? 🤔
              </motion.a>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <p className="text-sm mb-2">BUT!! , You can login with...</p>
            <div className="flex flex-col">
              <Button
                onClick={() => loginWith('oauth_google')}
                className="bg-[#f2e5c4] flex flex-row items-center justify-center mb-2 
              cursor-pointer hover:bg-[#ebd59d] duration-400"
              >
                <FcGoogle />
                <p className="text-sm ml-2">Login With Google</p>
              </Button>
              <Button
                onClick={() => loginWith('oauth_facebook')}
                className="bg-[#f2e5c4] flex flex-row items-center justify-center cursor-pointer hover:bg-[#ebd59d] duration-400"
              >
                <FaFacebook className="text-[#1778f2]" />
                <p className="text-sm ml-2">Login With Facebook</p>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </AnimatePresence>
    </div>
  );
};

export default Page;
