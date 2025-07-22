import { HeroSec } from "@/components/HeroSec";
import {CardList} from '@/components/CardsList'
import {StickyScrollReveal} from '@/components/StickyScroll'
import { InfiniteMovingCardsDemo } from "@/components/MovingCard";
import { cn } from "@/lib/utils";
export default function Home() {
  return (
     <>
        <div className="h-auto w-full ">
          
          <HeroSec></HeroSec>
          {/* card List  */}
          <div className="w-full">
            <div className="text-center">
              <h2 className="text-lg text-[#01BBDC] font-semibold">FEATURED COURSES</h2>
              <h2 className="text-4xl my-4">Learn with the best</h2>
            </div>
            <div className="">
            <CardList></CardList>
            </div>
            <div className="text-center">
              <button className="bg-[#01BBDC] p-3 rounded hover:text-[#01BBDC] hover:bg-white hover:cursor-pointer ">View All Courses</button>
            </div>

          </div>
          {/* Sticky scroll */}
          <div className="w-full">
            <StickyScrollReveal></StickyScrollReveal>
          </div>

          {/* moving card */}
          <div>
           
           
            <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative z-20  bg-clip-text  text-transparent">
        <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
      </p>
    </div>
           
           
           </div>
        </div>
     </>
  );
}
