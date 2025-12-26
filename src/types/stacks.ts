import {JSX, ReactNode} from "react";
import type {IconName} from "@/services/useStacksService"

type CardStackProps = {
  id: string;
  icon: JSX.Element;
  label: string;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
};

type Level = 1 | 2 | 3 | 4 | 5;
type Color = "green" | "red" | "pink" | "blue" | "yellow"

type StackLevelType = {
  icon: ReactNode;
  title: string,
  level: Level,
  color?: Color
}

type StackItemData = {
  icon: IconName;
  title: string;
  level: Level;
  color?: Color;
};

type StackLevelProps = {
  icon: ReactNode;
  title: string;
  level: Level;
  color?: Color;
};

type Stacks = {
  frontend: StackItemData[];
  backend: StackItemData[];
  data: StackItemData[];
  tools: StackItemData[];
};

export type {StackLevelType, CardStackProps, Stacks, StackLevelProps};