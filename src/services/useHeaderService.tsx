import sections from "@/json/sections.json"

import {Layers, MessageCircle, Sparkles,} from "lucide-react";

const icons = {
  Sparkles,
  Layers,
  MessageCircle,
}

type IconName = keyof typeof icons;

type Section  = {
  href: string
  label: string
  icon: IconName
}

const typedSections: Section[] = sections.map((section) => ({
  ...section,
  icon: section.icon as IconName,
}));

export default function useHeaderService() {

  return {
    icons,
    sections: typedSections
  }
}