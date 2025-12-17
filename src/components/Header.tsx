import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

import Image from "next/image"
import logo from "../../public/images/logo.png"
import {IconMenu2} from "@tabler/icons-react";

export default function Header() {

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
        <Image src={logo} alt={"logo"} fill/>
      </div>
      <div className={"block lg:hidden"}>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <IconMenu2/>
            </MenubarTrigger>
            <MenubarContent>
              <a href={"#welcome"}>
                <MenubarItem>
                  Welcome
                </MenubarItem>
              </a>
              <MenubarSeparator/>
              <a href={"#introduction"}>
                <MenubarItem>
                  Introduction
                </MenubarItem>
              </a>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      <div className={"hidden lg:flex items-center justify-center gap-4 lg:w-full"}>
        <a href={"#welcome"}>
          <div
            className={`
              text-white
              hover:text-blue-400
              hover:scale-115 cursor-pointer transition delay-150 duration-300 ease-in-out
            `}
          >
            Welcome
          </div>
        </a>
        <a href={"#introduction"}>
          <div
            className={`
              text-white
              hover:text-blue-400
              hover:scale-115 cursor-pointer transition delay-150 duration-300 ease-in-out
            `}
          >
            Introduction
          </div>
        </a>

      </div>
    </header>
  )
}