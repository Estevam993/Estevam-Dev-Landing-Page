"use client";

import FakeEditor from "@/components/introduction/FakeEditor";
import {IconBrandTypescript} from "@tabler/icons-react";

export default function Introduction() {

  const easterEgg = () =>
    window.open(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "_blank"
    );

  return (
    <div className="w-full h-full py-24 px-4 md:px-40 lg:px-60 bg-secondary">
      <div className={"text-white font-bold text-4xl md:text-7xl text-center mb-2 break-normal "}>
        Searching for another level of development?
      </div>
      <div className="welcome-container flex justify-center items-center backdrop-blur-xl py-12 p-4 rounded-xl">
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