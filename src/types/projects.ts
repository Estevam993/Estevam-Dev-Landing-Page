import {JSX} from "react";

type ProjectsType = {
  icon: JSX.Element;
  title: string;
  value: string;
  color?: string;
}

type VideosProjectType = {
  src: string
  description: string
  url: {
    url: string
    label: string
    icon: JSX.Element
  }[]
  value: string
}

export type {ProjectsType, VideosProjectType}