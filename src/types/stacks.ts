import {JSX} from "react";

type CardStackProps = {
  id: string;
  icon: JSX.Element;
  label: string;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
};

type StackLevelType = {
  icon: JSX.Element,
  title: string,
  level: Level,
  color?: Color
}

type Level = 1 | 2 | 3 | 4 | 5;
type Color = "green" | "red" | "pink" | "blue" | "yellow"

type Stacks = {
  frontend: StackLevelType[];
  backend: StackLevelType[];
  data: StackLevelType[];
  tools: StackLevelType[];
}


export type {StackLevelType, CardStackProps, Stacks};