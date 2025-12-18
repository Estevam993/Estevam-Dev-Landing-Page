"use client"
import {Introduction, WelcomeContainer, Header, Contacts} from "@/components";
import WorkInProgress from "@/components/WorkInProgress";

export default function Home() {
  return (
    <div className="overflow-x-hidden static">
      <Header />
      <WorkInProgress/>
      <WelcomeContainer/>
      <div className={"h-16 welcome-container"}>
      </div>
      <Introduction/>
      <div className={"h-16 welcome-container-2"}>
      </div>
      <Contacts />
    </div>
  );
}
