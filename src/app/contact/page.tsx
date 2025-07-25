"use client";
import {SignupFormDemo} from  '@/components/ContactUSForm'
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Page = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center mt-20 px-4"
      >
        <div className=" font-bold dark:text-white text-center ">
          <SignupFormDemo></SignupFormDemo>
        </div>
        
      </motion.div>
    </AuroraBackground>
  );
};

export default Page;
