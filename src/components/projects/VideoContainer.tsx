"use client"
import {JSX, useEffect, useRef} from "react";
import {gsap} from "gsap";
import {IconQuestionMark} from "@tabler/icons-react";
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"

type VideoContainerType = {
  video: {
    src: string,
    description: string,
    url: {
      url: string,
      label: string,
      icon: JSX.Element
    }[],
    value: string
  },
  show: string,
}

export default function VideoContainer({video, show}: VideoContainerType): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show === video.value) {
      gsap.fromTo(
        ref.current,
        {opacity: 0, x: 20},
        {opacity: 1, x: 0, duration: 0.6, ease: "power2.out"}
      );
    }
  }, [show, video.value]);

  return (
    <div
      className={`${show === video.value ? 'block' : 'hidden'} flex flex-col gap-4`}
    >
      <div className={"w-full flex justify-center items-center"}>
        <div
          className={"max-w-[62rem]"}
          ref={ref}
          data-video={video.value}
        >
          <video controls width="100%">
            <source src={video.src} type="video/mp4"/>
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <div
            className={`
            w-8 h-8 
            shrink-0 
            flex items-center justify-center 
            bg-[var(--main-color)] text-white
            rounded-full 
            cursor-pointer 
            `}
          >
            <IconQuestionMark/>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className={"p-2 rounded-lg h-max"}>
            <div className={"text-xl "}>
              {video.description}
            </div>
            <div style={{marginTop: '1rem'}} className={'flex flex-col gap-2'}>
              {video.url.map((url, index) => (
                <a
                  key={index}
                  className="flex items-center flex-row gap-2 rounded-md"
                  href={url.url}
                  target={'_blank'}
                >
                  {url.icon}
                  {url.label}
                </a>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}