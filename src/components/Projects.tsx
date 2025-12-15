"use client";

import {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useProjectsService} from "@/services";
import {SelectProjectContainer} from "./projects/index";
import VideoContainer from "./projects/VideoContainer";

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
    <div className="w-full h-[75vh] py-4 px-4 md:px-60 bg-secondary">
      <div className={"text-lg text-white font-bold text-center"}>
        {title || "Projects"}
      </div>
      <div className="flex flex-col lg:flex-row " ref={titleRef}>
        <SelectProjectContainer
          projects={projects}
          setTitle={setTitle}
          setShow={setShow}
          show={show}
          handleSelectProjectClick={handleSelectProjectClick}
        />
        <div className={'flex flex-col'}>
          {videos.map((video, index) => (
            <VideoContainer video={video} show={show} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}
