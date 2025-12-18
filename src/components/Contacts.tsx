"use client";

import {useEffect, useRef} from "react";

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {EmailForm, GmailIcon, LinkedInIcon} from "@/components/contacts/index";

gsap.registerPlugin(ScrollTrigger);

export default function Contacts() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    tl.fromTo(
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
        duration: 1.1,
        ease: "power4.out",
      }
    )
      .from(
        socialsRef.current?.children,
        {
          y: 20,
          opacity: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        formRef.current,
        {
          x: 80,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.2"
      );

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);


  return (
    <div
      ref={sectionRef}
      id="contacts"
      className={`
        w-full h-full 
        py-24 px-4 md:px-40 lg:px-60 
        text-white 
        flex flex-col items-center gap-4
      `}
    >
      <div className={"flex flex-col lg:flex-row items-center gap-4 w-full"}>
        <div
          ref={titleRef}
          className={`
            font-bold text-4xl 
            text-center lg:text-start break-normal 
            md:text-5xl xl:text-7xl
            w-full mb-6`
          }
        >
          Get in touch through the following networks
        </div>
        <div ref={socialsRef} className={"max-w-72"}>
          <div className={'border-2 border-[var(--secondary)] w-28'}/>
          <div className={'text-2xl flex flex-row justify-center gap-4 w-full p-2'}>
            <LinkedInIcon/>
            <GmailIcon/>
          </div>
          <div className={'border-2 border-[var(--secondary)] w-28 ml-auto'}/>
        </div>
      </div>
      <div
        ref={formRef}
        className={"w-full flex justify-center lg:justify-end"}
      >
        <EmailForm/>
      </div>
    </div>
  )
}