import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {useHeaderService} from "@/services";

import Image from "next/image"
import logo from "../../public/images/logo.png"
import {IconMenu2} from "@tabler/icons-react";

export default function Header() {
  const {sections, icons} = useHeaderService()

  return (
    <header className="
      fixed top-0 left-0 z-50
      h-16 w-full
      bg-primary/30
      backdrop-blur-md
      flex flex-row items-center justify-between
      p-2
    ">
      <div className={"relative w-22 h-22"}>
        <a href={"#welcome"}>
          <Image src={logo} alt={"logo"} fill/>
        </a>
      </div>
      <div className={"block lg:hidden"}>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <IconMenu2/>
            </MenubarTrigger>
            <MenubarContent>
              {sections.map((section, i) => {
                const Icon = icons[section.icon]

                return (
                  <div key={i}>
                    <a href={section.href}>
                      <MenubarItem>
                        <Icon/>
                        {section.label}
                      </MenubarItem>
                    </a>
                    {
                      sections.length !== i + 1 && (
                        <MenubarSeparator/>
                      )
                    }
                  </div>
                )
              })}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      <div className={"hidden lg:flex items-center justify-center gap-4 lg:w-full"}>
        {sections.map((section, i) => {
          const Icon = icons[section.icon]

          return (
            <a key={i} href={section.href}>
              <div
                className={`
                  text-white
                  hover:text-blue-400
                  hover:scale-115 cursor-pointer transition delay-150 duration-300 ease-in-out
                  flex gap-2
                `}
              >
                <Icon/>
                {section.label}
              </div>
            </a>
          )
        })}
      </div>
    </header>
  )
}