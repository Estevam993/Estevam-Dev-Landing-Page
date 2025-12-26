import {JSX} from 'react';
import type {StackLevelProps} from "@/types/stacks"

export default function StackLevel({icon, title, level, color}: StackLevelProps) {
  let iconColor
  let blockBgColor
  let startColor
  let endColor

  switch (color) {
    case "green":
      iconColor = '#66e18a'
      startColor = '#66E18A01'
      endColor = '#66E18A3C'
      blockBgColor = 'bg-[#66e18a]'
      break
    case "red":
      iconColor = '#e16666'
      startColor = '#e1666601'
      endColor = '#e166663c'
      blockBgColor = 'bg-[#e16666]'
      break
    case "pink":
      iconColor = '#b866e1'
      startColor = '#b866e101'
      endColor = '#b866e13c'
      blockBgColor = 'bg-[#b866e1]'
      break
    case "yellow":
      iconColor = '#e1cd66'
      startColor = '#e1cd6601'
      endColor = '#e1cd663c'
      blockBgColor = 'bg-[#e1cd66]'
      break;
    case "blue":
    default:
      iconColor = '#6691e1'
      startColor = '#6691e101'
      endColor = '#6691e13c'
      blockBgColor = 'bg-[#6691e1]'
      break
  }

  type Block = { active?: boolean }

  const Block = ({active = true}: Block): JSX.Element => {
    if (!active)
      return (
        <div className={'blocks w-[20px] h-[14px] bg-[#2A2A2A]'}>
        </div>
      )

    return (
      <div className={'blocks w-[20px] h-[14px] ' + blockBgColor}>
      </div>
    )
  }

  return (
    <div
      className={'flex flex-row justify-between items-center rounded-br-md rounded-tr-md p-4 gap-2 w-full max-w-none'}
      style={{
        background: `linear-gradient(90deg, ${startColor}, ${endColor})`
      }}
    >
      <div className={'flex flex-row'}>
        <div style={{color: iconColor, marginRight: '.2rem'}}>
          {icon}
        </div>
        <p>{title}</p>
      </div>
      <div className={'flex flex-row gap-2 items-center justify-center'}>
        {
          Array(level).fill(null).map((_, i) => (
            <Block key={i} active={true}/>
          ))
        }
        {
          Array(5 - level).fill(null).map((_, i) => (
            <Block key={i} active={false}/>
          ))
        }

      </div>
    </div>
  )
}