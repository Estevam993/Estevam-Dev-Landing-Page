"use client"
import {Contacts, Header, Introduction, WelcomeContainer} from "@/components";
import WorkInProgress from "@/components/WorkInProgress";
import Stacks from "@/components/Stacks";

export default function Home() {
  return (
    <div className="overflow-x-hidden static">
      <Header/>
      <WorkInProgress/>
      <WelcomeContainer/>
      <div className={"h-16 welcome-container"}>
      </div>
      <Introduction/>
      <div className={"h-16 welcome-container-2"}>
      </div>
      <Stacks/>
      <div className={"h-16 welcome-container"}>
      </div>
      <Contacts/>
    </div>
  );
}
