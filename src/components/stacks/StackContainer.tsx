import StackLevel from "@/components/stacks/StackLevel";
import {useStacksService} from "@/services/index";

export default function StackContainer({activeId}: { activeId: string }) {
  const {
    icons,
    stacks
  } = useStacksService()

  return (
    <div
      id={"stack-level"}
      className="flex flex-col items-stretch gap-4 w-full"
    >
      {
        Object.entries(stacks).map(([key, items]) => (
          <div
            key={key}
            className={`
              ${activeId === key ? "grid" : "hidden"}
                  grid
                  grid-cols-1
                  xl:grid-cols-2
                  gap-4
                  w-full
                  place-items-center
            `}
          >
            {items.map((item, index) => {
              const Icon = icons[item.icon]

              return (
                <StackLevel
                  key={index}
                  icon={<Icon/>}
                  title={item.title}
                  level={item.level}
                  color={item.color}
                />
              )
            })}
          </div>
        ))
      }
    </div>
  )
}