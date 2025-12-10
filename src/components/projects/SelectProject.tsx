import {HTMLAttributes} from "react";

type SelectProjectType = { selected?: boolean } & HTMLAttributes<HTMLDivElement>

export default function SelectProject({selected, children, ...props}: SelectProjectType) {

  return (
    <div
      className="w-14 h-14 shrink-0 flex items-center justify-center rounded-md cursor-pointer shadow-md"
      style={{
        color: selected ? "#A8BBBF" : "#7B3B4B",
        backgroundColor: selected ? "#7B3B4B" : "#A8BBBF",
      }}
      {...props}
    >
      {children}
    </div>
  )
}