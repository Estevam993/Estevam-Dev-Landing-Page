import {Projects, Stacks, WelcomeContainer} from "@/components";
import WorkInProgress from "@/components/WorkInProgress";


export default function Home() {
  return (
    <div className="overflow-x-hidden static">
      <WorkInProgress/>
      <WelcomeContainer/>
      <Projects/>
      <Stacks/>
      <div>
        Contato
      </div>
    </div>
  );
}
