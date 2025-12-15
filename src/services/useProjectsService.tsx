import {
  IconAlertCircle,
  IconAppWindowFilled,
  IconBrandGithub,
  IconBrandSpotify,
  IconLayoutDashboard,
  IconUserFilled,
  IconWorldWww
} from "@tabler/icons-react";
import {useRef, useState} from "react";
import {gsap} from "gsap";
import {ProjectsType, VideosProjectType} from "@/types/projects";

const projects: ProjectsType[] = [
  {
    icon: <IconAppWindowFilled/>,
    title: 'Landing Page',
    value: 'landing_page',
    color: 'blue'
  },
  {
    icon: <IconUserFilled/>,
    title: 'Admin Page',
    value: 'admin_page',
    color: 'pink'
  },
  {
    icon: <IconAlertCircle/>,
    title: 'Front End Challenge',
    value: 'front_end_challenge',
    color: 'red'
  },
  {
    icon: <IconBrandSpotify/>,
    title: 'Album Rating',
    value: 'album_rating',
    color: 'green'
  },
  {
    icon: <IconLayoutDashboard/>,
    title: 'Gdash Challenge',
    value: 'gdash_challenge',
    color: 'purple'
  },
  // {
  //   icon: <IconFileInfoFilled/>,
  //   title: "Sigmatos",
  //   value: "sigmatos"
  // }
]

const videos: VideosProjectType[] = [
  {
    src: "/videos/modelo_landing_page.mp4",
    description: "My first self-study project (2023), built with HTML, Bootstrap CSS, and JavaScript.",
    url: [
      {
        url: 'https://github.com/Estevam993/modelo_landing_page',
        label: 'modelo_landing_page',
        icon: <IconBrandGithub/>
      }
    ],
    value: 'landing_page',
  },
  {
    src: "/videos/admin_page.mp4",
    description: "Advanced full-stack project with NestJS backend (JWT auth, PostgreSQL) and Next.js frontend (MUI, Axios).",
    url: [
      {
        url: 'https://github.com/Estevam993/admin_page_back',
        label: 'admin_page_back',
        icon: <IconBrandGithub/>
      },
      {
        url: 'https://github.com/Estevam993/admin_page_front',
        label: 'admin_page_front',
        icon: <IconBrandGithub/>
      }
    ],
    value: 'admin_page',
  },
  {
    src: "/videos/front_end_challenge.mp4",
    description: "Selection process challenge: Next.js app with Marvel API integration and local storage for favorites.",
    url: [
      {
        url: 'https://frontend-challange-p2zmfeg4u-estevam993s-projects.vercel.app',
        label: 'Challenge',
        icon: <IconWorldWww/>
      }, {
        url: 'https://github.com/Estevam993/frontend-challange',
        label: 'frontend-challange',
        icon: <IconBrandGithub/>
      },
    ],
    value: 'front_end_challenge',
  },
  {
    src: "/videos/album_rating.mp4",
    description: "Backend C# application with Spotify integration for album search and custom reviews.",
    url: [{
      url: 'https://github.com/Estevam993/AlbumRating',
      label: 'album-rating',
      icon: <IconBrandGithub/>
    },
    ],
    value: 'album_rating',
  },
  {
    src: "/videos/gdash_challenge.mp4",
    description: "Full-stack challenge: Real-time weather data pipeline with Go worker, NestJS/MongoDB API, React dashboard, and AI insights. Dockerized architecture.",
    url: [{
      url: 'https://github.com/Estevam993/desafio-gdash/tree/joao-vitor-estevam-raimundo',
      label: 'gdash_challenge',
      icon: <IconBrandGithub/>
    },
    ],
    value: 'gdash_challenge',
  }
]

export default function useProjectsService() {
  const [title, setTitle] = useState<string>("")
  const [show, setShow] = useState<string>('landing_page')

  const titleRef = useRef(null);

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

  return {
    projects,
    videos,
    title,
    setTitle,
    show,
    setShow,
    titleRef,
    handleSelectProjectClick
  }
}