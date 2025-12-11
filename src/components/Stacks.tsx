"use client";

import {IconBrandNodejs, IconBrowserMaximize, IconFileTypeJsx,} from "@tabler/icons-react";
import {HTMLAttributes, useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = ({children}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="card-item
      p-4
      flex items-center justify-between
      bg-[var(--background)]
      rounded-md shadow-md text-4xl cursor-pointer"
      style={{
        background: `linear-gradient(165deg , var(--background) 45%, var(--main-color) 155%) border-box`,
      }}
    >
      {children}
    </div>
  );
};

export default function Stacks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".card-item");

    // === Scroll Animation (fade + up + stagger + reverse) ===
    gsap.from(cards, {
      opacity: 0,
      x: 40,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "bottom 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          x: -6,
          duration: 0.25,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          duration: 0.25,
          ease: "power2.inOut",
        });
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[150vh] w-[100vw] p-4 stacks-container flex flex-col items-center gap-6 pt-24"
    >
      <Card>
        <IconFileTypeJsx size={"2rem"}/>
      </Card>
      <Card>
        <IconBrandNodejs size={"2rem"}/>
      </Card>
      <Card>
        <IconBrowserMaximize size={"2rem"}/>
      </Card>
    </div>
  );
}
