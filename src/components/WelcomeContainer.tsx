"use client";

import {useEffect, useRef} from "react";
import {gsap} from "gsap";

import Image from "next/image";
import eu from "../../public/images/eu desenho.png"

function yearSince(dataString: string): number {
  const [dia, mes, ano] = dataString.split("/").map(Number);

  const hoje = new Date();
  const dataBase = new Date(ano, mes - 1, dia);

  let anos = hoje.getFullYear() - dataBase.getFullYear();

  const aniversarioEsteAno = new Date(
    hoje.getFullYear(),
    dataBase.getMonth(),
    dataBase.getDate()
  );

  if (hoje < aniversarioEsteAno) {
    anos--;
  }

  return anos;
}


export default function WelcomeContainer() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.from(boxRef.current, {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: "power1.out",
    });
  }, []);

  return (
    <div id={"welcome"} className="bg-secondary w-full py-24 px-4 md:px-20 lg:px-60 flex flex-col items-center gap-4">
      <div
        className={"flex lg:flex-row flex-col w-full justify-around"}
        ref={boxRef}
      >
        <div
          ref={boxRef}
          className={"text-white text-center lg:text-start text-4xl lg:text-5xl xl:text-7xl"}
        >
          <div className={"block lg:hidden"}>
            Your best friend <br/>
            in the <br/>
            development area

          </div>
          <div className={"hidden lg:block"}>
            Your best friend
            in the<br/>
            development area

          </div>
        </div>
        <div className="flex justify-center lg:justify-end w-full">
          <div className="relative min-w-[200px] max-w-[400px] w-full h-86">
            <Image src={eu} alt="Eu" fill className="object-contain"/>
          </div>
        </div>
      </div>
      <div className={"flex flex-col lg:flex-row items-center gap-4 w-full"}>
        <div className={"text-white text-3xl"}>
          {yearSince('09/09/2003')} years of learning, <br/>
          {yearSince('17/01/2023')} years of experience
        </div>
        <div className={"flex flex-col gap-4"}>
          <div
            className={`
            w-full max-w-96 h-14 p-4
            flex items-center justify-center
            bg-primary rounded-lg 
            shadow-sm shadow-primary/40 
            text-white text-2xl
            hover:scale-115 cursor-pointer transition delay-150 duration-300 ease-in-out
          `}
          >
            I wish to get in touch.
          </div>
          <div
            className={`
            w-full max-w-96 h-14 p-4
            flex items-center justify-center
            rounded-lg 
            shadow-sm shadow-primary/40 
            text-white text-2xl
            hover:scale-115 cursor-pointer transition delay-150 duration-300 ease-in-out
          `}
          >
            Just taking a look
          </div>
        </div>

      </div>
    </div>
  );
}
