"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Image from "next/image";
import logo from "../../public/images/logo_2.png";

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
    <div className="welcome-container h-[100vh] w-[100vw] flex justify-center items-center">
      <div
        ref={boxRef}
        className="w-[28rem] h-[14rem] flex justify-center items-center backdrop-blur-xl shadow-xl"
      >
        <div>
          <Image src={logo} alt="Estevam Dev" className="logo w-full h-full" />
        </div>
      </div>
    </div>
  );
}
