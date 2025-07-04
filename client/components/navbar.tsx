'use client';
import React from 'react';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const route = useRouter();
  const routeSignInPage = () => {
    route.push('/signin');
  };
  const routeSignUpPage = () => {
    route.push('/signup');
  };
  return (
    <div className="flex items-center justify-around px-5 py-4">
      <div className="mx-5 flex w-full">
        <Image alt="Logo" src="/EDUAI.svg" width={100} height={100} />
        <div className="flex justify-around items-center ml-5 ">
          <Link
            href={'/'}
            className="border-[#27548A] border mr-2 rounded-xl hover:bg-[#27548A] hover:text-white duration-300"
          >
            <Button className="text-md cursor-pointer">Home</Button>
          </Link>
          <Link
            href={'/courses'}
            className="border-[#27548A] border mr-2 rounded-xl hover:bg-[#27548A] hover:text-white duration-300"
          >
            <Button className="text-md cursor-pointer">Courses</Button>
          </Link>
          <Link
            href={'/ai-assistant'}
            className="border-[#27548A] border mr-2 rounded-xl hover:bg-[#27548A] hover:text-white duration-300"
          >
            <Button className="text-md cursor-pointer">AI</Button>
          </Link>
          <Link
            href={'/contract'}
            className="border-[#27548A] border rounded-xl hover:bg-[#27548A] hover:text-white duration-300"
          >
            <Button className="text-md cursor-pointer">Contract</Button>
          </Link>
        </div>
      </div>

      <div className="flex items-center my-2 mr-2 justify-between w-1/6">
        <SignedOut>
          <div 
          className="flex items-center font-medium hover:bg-[#626F47] 
          hover:text-white rounded-full duration-200
          py-[2px]">
            <Button onClick={routeSignInPage} className="cursor-pointer">
              Sign In
            </Button>
          </div>

          <div>
            <button
              className="bg-[#A4B465] 
            text-white rounded-full font-medium 
            text-sm 
            h-10 sm:h-10 px-1 sm:px-3 border border-[#A4B465] hob
            cursor-pointer hover:bg-transparent hover:text-black duration-300"
              onClick={routeSignUpPage}
            >
              Sign Up
            </button>
          </div>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
