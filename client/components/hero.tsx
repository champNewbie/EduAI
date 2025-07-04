import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center py-auto h-10/12 w-[60%] mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold whitespace-normal leading-snug"
      >
        Study Everywhere{' '}
        <span className="inline-block">EveryTime and Everything With</span>
        <span
          className={cn(
            'bg-gradient-to-r bg-clip-text text-transparent from-[#27548A] to-[#A4B465]',
          )}
        >
          EduAI
        </span>
      </motion.h1>
      <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-2 leading-tight">
        Eduai is a Educational Web Platform that aggregates courses into one
        platform and
        <span className="inline-block">
          AI-powered that summarized lessons and answer the questions for users.
        </span>
      </motion.p>
    </div>
  );
};

export default Hero;
