"use client";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import FakeEditor from "@/components/introduction/FakeEditor";
import {IconBrandTypescript} from "@tabler/icons-react";

export default function Introduction() {
  const titleRef = useRef<HTMLDivElement>(null);

  const easterEgg = () =>
    window.open(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "_blank"
    );

  useEffect(() => {
    if (!titleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      {
        y: 60,
        opacity: 0,
        clipPath: "inset(0 0 100% 0)",
      },
      {
        y: 0,
        opacity: 1,
        clipPath: "inset(0 0 0% 0)",
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div id={"introduction"}
         className="w-full h-full py-24 px-4 md:px-40 lg:px-60 bg-secondary flex flex-col lg:flex-row items-center gap-4">
      <div
        ref={titleRef}
        className={"text-white font-bold text-4xl md:text-5xl xl:text-7xl text-center lg:text-start mb-2 break-normal w-full lg:max-w-1/2 "}
      >
        Searching for another level of development?
      </div>
      <div
        className="welcome-container flex justify-center items-center backdrop-blur-xl py-12 p-4 rounded-xl w-full lg:max-w-1/2 shadow-inner shadow-secondary">
        <div className="w-full h-[18rem] bg-secondary rounded-xl p-1 flex flex-col">
          <div className={"flex flex-row py-1"}>
            <div className={"text-primary/50 pl-2 flex items-center gap-1 "}>
              <IconBrandTypescript size={"22px"}/> introduction.ts
            </div>

            <div className="w-full flex justify-end pr-4 h-6">
              <div className="flex flex-row justify-between items-center w-10 h-6">
                <div
                  className="bg-red-500 rounded-full w-2 h-2 hover:scale-180 cursor-pointer transition delay-150 duration-300 ease-in-out"
                  onClick={easterEgg}/>
                <div
                  className="bg-yellow-500 rounded-full w-2 h-2 hover:scale-180 cursor-pointer transition delay-150 duration-300 ease-in-out"/>
                <div
                  className="bg-green-500 rounded-full w-2 h-2 hover:scale-180 cursor-pointer transition delay-150 duration-300 ease-in-out"/>
              </div>
            </div>
          </div>

          <FakeEditor/>
        </div>
      </div>
    </div>

  )
}