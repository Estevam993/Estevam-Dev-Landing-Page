"use client"
import {Introduction, Stacks, WelcomeContainer} from "@/components";
import WorkInProgress from "@/components/WorkInProgress";

export default function Home() {
  return (
    <div className="overflow-x-hidden static">
      <WorkInProgress/>
      <WelcomeContainer/>
      <Introduction />
      <Stacks/>
      <div>
        Contato
      </div>
    </div>
  );
}
