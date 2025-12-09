"use client";

import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useProjectsService} from "@/services";
import {SelectProject} from "./projects/index";
import VideoContainer from "./projects/VideoContainer";
import {IconX} from "@tabler/icons-react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const {projects, videos} = useProjectsService()

  const [title, setTitle] = useState<string>("")
  const [show, setShow] = useState<string>('')

  const titleRef = useRef(null);

  useEffect(() => {
    const element = titleRef.current;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 10%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleSelectProjectClick = (target: EventTarget & HTMLDivElement, value: string, title: string): void => {
    gsap.fromTo(
      target,
      {scale: 1},
      {scale: 0.85, duration: 0.15, yoyo: true, repeat: 1}
    );

    const current = document.querySelector(`[data-video="${show}"]`);

    if (current) {
      gsap.to(current, {
        opacity: 0,
        x: -20,
        duration: 0.3,
        onComplete: () => {
          setShow(value);
          setTitle(title)
        },
      });
    } else {
      setShow(value);
      setTitle(title)
    }
  }

  return (
    <div className="h-[100vh] w-[100vw] p-4">
      <div className="flex flex-col">
        <div className={"text-lg font-bold text-center mb-2"}>
          {title}
        </div>
        <div className={"flex flex-row justify-between items-center h-full w-full"}>
          <div className="flex flex-row gap-2 overflow-x-auto">
            {Object.entries(projects).map(([, project], index) => (
              <SelectProject
                color={project.color}
                key={index}
                onClick={(e) => {
                  handleSelectProjectClick(e.currentTarget, project.value, project.title);
                }}
              >
                {project.icon}
              </SelectProject>
            ))}
          </div>
          <div
            className={"w-8 h-8 shrink-0 flex items-center justify-center rounded-md cursor-pointer"}
            onClick={() => {
              setTitle("")
              setShow("")
            }}
          >
            <IconX/>
          </div>
        </div>
        <div className={'flex flex-col'} style={{marginTop: '1rem'}}>
          {videos.map((video, index) => (
            <VideoContainer video={video} show={show} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}
