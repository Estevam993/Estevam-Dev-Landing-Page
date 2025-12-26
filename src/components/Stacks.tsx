"use client";
import { useEffect } from "react";

import { Database, Proportions, Server, Settings } from "lucide-react";

import { CardStack } from "@/components/stacks/index";
import StackContainer from "./stacks/StackContainer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStacksService } from "@/services/index";

gsap.registerPlugin(ScrollTrigger);

export default function Stacks() {
  const {
    containerRef,
    activeId,
    setActiveId,
  } = useStacksService();

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".stacks-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".stack-card",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".stack-container",
          {
            x: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      id="stacks"
      className="w-full h-full py-24 px-4 md:px-40 lg:px-55 bg-secondary flex flex-col items-center gap-4 text-white"
    >
      <div className="stacks-title text-center font-bold text-4xl md:text-5xl xl:text-7xl">
        Want to explore my tech stack?
        <div className="text-xl font-light text-white/70">
          See it below.
        </div>
      </div>

      <div
        className="
          w-full h-full
          bg-secondary
          flex flex-col lg:flex-row
          items-center lg:items-start
          gap-4
          text-white
        "
      >
        <div className="flex flex-col items-center lg:items-start lg:w-full lg:max-w-[20rem] gap-4">
          <div className="stack-card lg:w-full">
            <CardStack
              id="frontend"
              activeId={activeId}
              setActiveId={setActiveId}
              icon={<Proportions size="2rem" />}
              label="Front-End"
            />
          </div>

          <div className="stack-card lg:w-full">
            <CardStack
              id="backend"
              activeId={activeId}
              setActiveId={setActiveId}
              icon={<Server size="2rem" />}
              label="Back-End"
            />
          </div>

          <div className="stack-card lg:w-full">
            <CardStack
              id="data"
              activeId={activeId}
              setActiveId={setActiveId}
              icon={<Database size="2rem" />}
              label="Data"
            />
          </div>

          <div className="stack-card lg:w-full">
            <CardStack
              id="tools"
              activeId={activeId}
              setActiveId={setActiveId}
              icon={<Settings size="2rem" />}
              label="Tools"
            />
          </div>
        </div>

        <div className="stack-container w-full">
          <StackContainer activeId={activeId} />
        </div>
      </div>
    </div>
  );
}
