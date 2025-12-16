"use client"
import {Introduction, WelcomeContainer} from "@/components";
import WorkInProgress from "@/components/WorkInProgress";
import Header from "../components/Header";

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
      <div>
        Contato
      </div>
    </div>
  );
}
