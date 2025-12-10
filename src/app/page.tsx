import {WelcomeContainer, Projects, Stacks} from "@/components";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <WelcomeContainer/>
      <Projects />
      <Stacks />
      <div>
        Contato
      </div>
    </div>
  );
}
