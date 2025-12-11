
import {IconAlertTriangleFilled} from "@tabler/icons-react";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

const WorkInProgress = () => {
  return (
    <div className={"fixed z-40 bottom-2 right-2"}>
      <div className={"hidden md:block"}>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex items-center justify-center rounded-full bg-yellow-500 w-12 h-12 ">
              <IconAlertTriangleFilled/>
            </div>
            <TooltipContent className={"text-white"}>
              Work in progress
            </TooltipContent>
          </TooltipTrigger>
        </Tooltip>
      </div>
      <div className={"block md:hidden"}>
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center justify-center rounded-full bg-yellow-500 w-12 h-12 ">
              <IconAlertTriangleFilled/>
            </div>
          </PopoverTrigger>
          <PopoverContent>
            Work in progress
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export default WorkInProgress;