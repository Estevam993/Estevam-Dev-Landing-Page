"use client";

import {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useProjectsService} from "@/services";
import {SelectProject} from "./projects/index";
import VideoContainer from "./projects/VideoContainer";
import {IconX} from "@tabler/icons-react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const {
    projects,
    videos,
    title,
    setTitle,
    show,
    setShow,
    titleRef,
    handleSelectProjectClick
  } = useProjectsService()

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
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [titleRef]);

  return (
    <div className="w-full min-h-[14rem] py-4 px-4 md:px-60">
      <div className="flex flex-col" ref={titleRef}>
        <div className={"text-lg font-bold text-center"}>
          {title || "Projects"}
        </div>
        <div className={"flex flex-row justify-between items-center h-full w-full"}>
          <div className="flex flex-row gap-2 p-2 overflow-x-auto">
            {Object.entries(projects).map(([, project], index) => (
              <SelectProject
                key={index}
                color={project.color}
                selected={show == project.value}
                onClick={(e) => {
                  handleSelectProjectClick(e.currentTarget, project.value, project.title);
                }}
              >
                {project.icon}
              </SelectProject>
            ))}
          </div>
          <div
            className={"w-8 h-8 shrink-0 flex items-center justify-center rounded-full cursor-pointer shadow-md"}
            onClick={() => {
              setTitle("")
              setShow("")
            }}
          >
            <IconX/>
          </div>
        </div>
        <div className={'flex flex-col'}>
          {videos.map((video, index) => (
            <VideoContainer video={video} show={show} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}
