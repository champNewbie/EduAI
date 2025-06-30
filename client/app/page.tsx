'use client'
import React from 'react';
import {
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import Image from 'next/image';
import {Button} from "@/components/ui/button"
import { useRouter } from 'next/navigation';

const Page = () => {
  const route = useRouter()
  const routeSignInPage = () => {
    route.push('/signin')
  }
  const routeSignUpPage = () => {
    route.push('/signup')
  }
  return (
    <div className="flex items-center justify-between">
      <div className='mx-5'>
        <Image alt="Logo" src="/EDUAI.svg" width={100} height={100} />
      </div> 

      <div className='flex justify-around px-10 py-5 bg-blue-500 w-[40%]'>
        <div className=' hover:[&>*:nth-child(2)]:translate-x-12.5 hover:[&>*:nth-child(2)]:opacity-100
        hover:[&>*:nth-child(1)]:-translate-x-5 hover:[&>*:nth-child(1)]:opacity-0 
        duration-300 flex z-100 bg-red-500 items-center cursor-pointer'>
          <Image alt='Home' src="/house.svg" width={20} height={20} 
          className='duration-300 relative left-4.5'/>
          <p className='duration-300 relative right-15 opacity-0'>Home</p>
        </div>
        <div className='hover:[&>*:nth-child(2)]:translate-x-12.5 hover:[&>*:nth-child(2)]:opacity-100
        hover:[&>*:nth-child(1)]:-translate-x-5 hover:[&>*:nth-child(1)]:opacity-0 
        duration-300 flex z-100 bg-red-500 items-center cursor-pointer'>
          <Image alt='Home' src="/house.svg" width={20} height={20} 
          className='duration-300 relative left-4.5'/>
          <p className='duration-300 relative right-15 opacity-0'>Home</p>
        </div>
        <div className='hover:[&>*:nth-child(2)]:translate-x-12.5 hover:[&>*:nth-child(2)]:opacity-100
        hover:[&>*:nth-child(1)]:-translate-x-5 hover:[&>*:nth-child(1)]:opacity-0 
        duration-300 flex z-100 bg-red-500 items-center cursor-pointer'>
          <Image alt='Home' src="/house.svg" width={20} height={20} 
          className='duration-300 relative left-4.5'/>
          <p className='duration-300 relative right-15 opacity-0'>Home</p>
        </div>
        <div className='hover:[&>*:nth-child(2)]:translate-x-12.5 hover:[&>*:nth-child(2)]:opacity-100
        hover:[&>*:nth-child(1)]:-translate-x-5 hover:[&>*:nth-child(1)]:opacity-0 
        duration-300 flex z-100 bg-red-500 items-center cursor-pointer'>
          <Image alt='Home' src="/house.svg" width={20} height={20} 
          className='duration-300 relative left-4.5'/>
          <p className='duration-300 relative right-15 opacity-0'>Home</p>
        </div>
        <div className='hover:[&>*:nth-child(2)]:translate-x-12.5 hover:[&>*:nth-child(2)]:opacity-100
        hover:[&>*:nth-child(1)]:-translate-x-5 hover:[&>*:nth-child(1)]:opacity-0 
        duration-300 flex z-100 bg-red-500 items-center cursor-pointer'>
          <Image alt='Home' src="/house.svg" width={20} height={20} 
          className='duration-300 relative left-4.5'/>
          <p className='duration-300 relative right-15 opacity-0'>Home</p>
        </div>
      </div>
     
      <div className="flex items-center my-2 mr-2 justify-between w-50">
        <SignedOut>
          <div className='flex items-center'>
            <Button onClick={routeSignInPage} className='cursor-pointer'>Sign In</Button>
          </div>
          
          <div>
            <button className="bg-[#6c47ff] 
            text-white rounded-full font-medium 
            text-sm sm:text-base
            h-10 sm:h-10 px-1 sm:px-3 
            cursor-pointer" onClick={routeSignUpPage}>
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

export default Page;
