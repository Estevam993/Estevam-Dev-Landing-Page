import {HTMLAttributes} from "react";

type SelectProjectType = { color?: string } & HTMLAttributes<HTMLDivElement>

export default function SelectProject({color, children, ...props}: SelectProjectType) {
  let startBorderColor
  let endBorderColor
  let trueColor

  switch (color) {
    case "green":
      endBorderColor = 'rgba(143,248,173,0.44)'
      startBorderColor = '#66E18A00'
      trueColor = '#21af47'
      break
    case "red":
      endBorderColor = 'rgba(227,115,115,0.44)'
      startBorderColor = '#e1666600'
      trueColor = '#ee3131'
      break
    case "pink":
      endBorderColor = '#b866e171'
      startBorderColor = '#b866e100'
      trueColor = '#a146ce'
      break
    case "yellow":
      endBorderColor = '#e1cd6671'
      startBorderColor = '#e1cd6600'
      trueColor = '#b6a23e'
      break;
    case "purple":
      endBorderColor = 'rgba(157,53,185,0.29)'
      startBorderColor = 'rgba(103,60,115,0.01)'
      trueColor = '#791096'
      break;
    case "blue":
    default:
      endBorderColor = '#6691E171'
      startBorderColor = '#6691E100'
      trueColor = '#3268cc'
      break
  }

  return (
    <div
      className="w-14 h-14 shrink-0 flex items-center justify-center rounded-md cursor-pointer"
      style={{
        background: `linear-gradient(155deg, ${startBorderColor} 45%, ${endBorderColor} 90%) border-box`,
        color: trueColor
      }}
      {...props}
    >
      {children}
    </div>
  )
}