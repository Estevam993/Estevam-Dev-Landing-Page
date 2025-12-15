import {HTMLAttributes} from "react";
import {IconX} from "@tabler/icons-react";
import {ProjectsType} from "@/types/projects";

type SelectProjectType = { selected?: boolean } & HTMLAttributes<HTMLDivElement>

function SelectProject({selected, children, ...props}: SelectProjectType) {
  return (
    <div
      className={`
        w-14 h-14 
        lg:w-full lg:max-w-[230px]
        shrink-0 
        lg:shrink
        flex items-center justify-center 
        lg:justify-start 
        lg:gap-4 lg:p-2
        rounded-md 
        cursor-pointer 
        ${selected ? 'shadow-sm shadow-secondary/40' : "shadow-sm shadow-primary/40"}
      `}
      style={{
        color: "white",
        backgroundColor: selected ? "var(--primary)" : "transparent",
      }}
      {...props}
    >
      {children}
    </div>
  )
}

type SelectProjectContainerProps = {
  projects: ProjectsType[];
  setTitle: (title: string) => void;
  setShow: (show: string) => void;
  show: string;
  handleSelectProjectClick: (target: EventTarget & HTMLDivElement, value: string, title: string) => void
}

export default function SelectProjectContainer({
                                                 projects,
                                                 setTitle,
                                                 setShow,
                                                 show,
                                                 handleSelectProjectClick
                                               }: SelectProjectContainerProps) {

  return (
    <div
      className={`
        flex flex-row lg:flex-col-reverse 
        justify-between items-center lg:items-start 
        h-full w-full
      `}
    >
      <div
        className={`
          flex flex-row lg:flex-col 
          gap-4 p-2 
          overflow-x-auto lg:overflow-x-visible 
          lg:whitespace-normal lg:flex-wrap 
          lg:max-h-[380px]
        `}
      >
        {Object.entries(projects).map(([, project], index) => (
          <SelectProject
            key={index}
            selected={show == project.value}
            onClick={(e) => {
              handleSelectProjectClick(e.currentTarget, project.value, project.title);
            }}
          >
            {project.icon}
            <div className={"hidden lg:block"}> {project.title} </div>
          </SelectProject>
        ))}
      </div>
      <div
        className={`
          w-8 h-8 lg:w-14 lg:h-14 
          lg:m-2
          shrink-0
          lg:shrink
          flex items-center justify-center
          rounded-full 
          cursor-pointer 
          shadow-sm shadow-red-500/30 
          text-red-600/65
        `}
        onClick={() => {
          setTitle("")
          setShow("")
        }}
      >
        <IconX/>
      </div>
    </div>
  )
}