"use client"
import stacks from "@/json/stacks.json"

import {useRef, useState} from "react";

import {
  IconBrandCSharp,
  IconBrandCss3,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
  IconLayout,
  IconServer,
  IconTerminal
} from "@tabler/icons-react";
import type {Stacks} from "@/types/stacks"

const typedStacks: Stacks = stacks

const icons = {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandTailwind,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandLaravel,
  IconBrandCSharp,
  IconBrandMysql,
  IconServer,
  IconBrandGit,
  IconBrandGithub,
  IconBrandVercel,
  IconBrandDocker,
  IconTerminal,
  IconBrandFigma,
  IconLayout,
  IconBrandMongodb
}

export default function useStacksService() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  return {
    icons,
    stacks: typedStacks,
    containerRef,
    activeId,
    setActiveId,
  }
}