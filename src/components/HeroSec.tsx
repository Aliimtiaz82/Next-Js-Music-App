"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "../components/ui/lamp";
import Link from "next/link";
import { Button } from "./ui/moving-border";

export function HeroSec() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="blue-line lg:-mt-4   bg-gradient-to-br from-slate-300 to-slate-500   bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-8xl"
      >
        Master the art of Music
        
      </motion.h1>   

      <div className=" md:w-1/2 md:-mt-20 text-sm md:text-lg lg:text-2xl text-slate-300 bg-amber-30 relative top-40 md:top-44 items-center text-center ">
        <p  >Dive into our comprehensive music course and transform your musical journey today. Whether you are a begineer or looking to refine your skills  , join us to unlock your true potential.</p>
      
      <div className="mt-5">
         <Button className="hover:cursor-pointer" ><a href="/courses">Explore Courses</a></Button>
      </div>
       
      </div> 
    </LampContainer>
  );
}


