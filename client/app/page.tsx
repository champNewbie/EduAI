'use client'
import React from 'react';
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
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {AnimatePresence ,motion} from 'framer-motion'

const page = () => {
  return (
    <div className="text-2xl font-bold flex justify-center items-center h-screen">
      <AnimatePresence>
      <Card className="flex justify-center w-[50%] border-[#27548A] border-4 shadow-[15px_5px_0_0px_#163f70]">
        <CardHeader className="flex flex-col">
          <CardTitle className="text-3xl">Welcome To Eduai</CardTitle>
          <CardDescription>Courses Education Web and AI Assistant for study</CardDescription>
        </CardHeader>
        <CardContent>
          <form action="">
            <p className="text-lg">Email</p>
            <Input
              type="email"
              placeholder="johnDoe@gmail.com"
              className="border-none"
            />
            <p className="text-lg mt-2">Password</p>
            <Input type="password" />
          </form>
          <div className="mt-2 flex justify-between items-center">
              <Button className="
              bg-[#A4B465]
              text-white round-full 
              cursor-pointer hover:bg-[#7c884c]
              transition duration-400 shadow-[0_0_0_3px_#000000_inset] ">
                Login
              </Button>
            <motion.a
            initial={{scale : 1.0}}
            whileHover={{scale : 1.1}}
            href="#" className="text-sm hover:bg-[#ebd59d] duration-100 px-2 py-1 rounded-2xl">
              Do you have a Account? 🤔
            </motion.a>
          </div>
        </CardContent>
        <CardFooter className='flex flex-col'>
            <p className="text-sm mb-2">BUT!! , You can login with...</p>
            <div className='flex flex-col'>
              <Button className='bg-[#f2e5c4] flex flex-row items-center justify-center mb-2 
              cursor-pointer hover:bg-[#ebd59d] duration-400'>
                <FcGoogle />
                <p className='text-sm ml-2'>Login With Google</p>
              </Button>
              <Button className='bg-[#f2e5c4] flex flex-row items-center justify-center cursor-pointer hover:bg-[#ebd59d] duration-400'>
                <FaFacebook className='text-[#1778f2]'/>
                <p className='text-sm ml-2'>Login With Facebook</p>
              </Button>
            </div>    
        </CardFooter>
      </Card>
      </AnimatePresence>
    </div>
  );
};

export default page;
