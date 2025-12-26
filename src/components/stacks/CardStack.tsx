import {useEffect, useRef} from "react";
import type {CardStackProps} from "@/types/stacks"
import gsap from "gsap";

export default function CardStack({
                                    id,
                                    icon,
                                    label,
                                    activeId,
                                    setActiveId,
                                  }: CardStackProps) {
  const labelRef = useRef<HTMLSpanElement>(null);
  const isActive = activeId === id;

  useEffect(() => {
    if (!labelRef.current) return;

    gsap.to(labelRef.current, {
      opacity: isActive ? 1 : 0,
      width: isActive ? "auto" : 0,
      x: isActive ? 0 : -8,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isActive]);

  return (
    <div
      onClick={() => setActiveId(isActive ? null : id)}
      className="
        p-2 rounded-md cursor-pointer select-none
        shadow-primary/15 shadow-sm
        lg:w-full lg:max-w-78
      "
    >
      <div
        className="
          border-2 border-primary/40 p-2
          border-t-transparent border-r-transparent
          rounded-md rounded-t-none rounded-r-none
          flex items-center gap-2
          hover:scale-[1.03] transition-transform
          active:scale-95
        "
      >
        <span className="text-4xl">{icon}</span>

        <span className="hidden lg:inline font-medium">
          {label}
        </span>

        <span
          ref={labelRef}
          className="lg:hidden overflow-hidden whitespace-nowrap"
        >
          {label}
        </span>
      </div>
    </div>
  );
}
