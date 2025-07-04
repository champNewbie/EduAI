'use client';
import React from 'react';
import Navbar from '@/components/navbar';
import Hero from "@/components/hero"

const Page = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <Hero />
      <div className="flex justify-center items-center h-9/12">
        <h1 className="text-2xl font-bold">Welcome to EduAI</h1>
      </div>
    </div>
  );
};

export default Page;
