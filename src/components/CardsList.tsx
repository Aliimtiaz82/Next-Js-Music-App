"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from '../data/music_courses.json'
import { Interface } from "readline";

interface Course{
    id: number;
    title:string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean
}

export function CardList() {
  const FeaturedCourses =    courseData.courses.filter((course:Course) => course.isFeatured)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 my-15  ">
      {FeaturedCourses.map((course:Course) => (
         <BackgroundGradient key={course.id} className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
         {course.title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {course.description}
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            ${course.price}
          </span>
        </button>
      </BackgroundGradient>
      ))}
      
     
    </div>
  );
}
