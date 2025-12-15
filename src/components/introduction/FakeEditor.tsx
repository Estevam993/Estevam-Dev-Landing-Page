"use client"
import {useEffect, useRef, useState} from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

function highlight(line) {
  return Prism.highlight(
    line,
    Prism.languages.javascript,
    "javascript"
  );
}

const lines = [
  "const create = new Logic();",
  " ",
  "try{ ",
  " create.newSolution(); ",
  "} catch {",
  " learn()",
  "}",
  " ",
];

export default function FakeEditor() {
  const [activeLine, setActiveLine] = useState(0);
  const [typed, setTyped] = useState("");
  const charIndex = useRef(0);


  useEffect(() => {
    const line = lines[activeLine];
    if (!line) return;

    charIndex.current = 0;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTyped("");

    const interval = setInterval(() => {
      const i = charIndex.current;

      if (i >= line.length) {
        clearInterval(interval);
        setTimeout(() => {
          setActiveLine((prev) => prev + 1);
        }, 300);
        return;
      }

      setTyped((prev) => prev + line[i]);
      charIndex.current += 1;
    }, 40);

    return () => clearInterval(interval);
  }, [activeLine]);


  return (
    <div
      className="flex-1 bg-primary/40 rounded-xl text-white font-['Fira_Code','JetBrains_Mono',monospace] text-sm p-2">
      {lines.map((line, i) => {
        const isActive = i === activeLine;
        const isFinished = i < activeLine;

        return (
          <div
            key={i}
            className="grid grid-cols-[3rem_1fr] leading-6"
          >
            {/* número */}
            <div className="select-none text-white/40 text-right pr-4">
              {i + 1}
            </div>

            {/* código */}
            <div className="whitespace-pre">
              {/* linha já finalizada */}
              {isFinished && (
                <span
                  dangerouslySetInnerHTML={{
                    __html: highlight(line),
                  }}
                />
              )}

              {/* linha ativa */}
              {isActive && (
                <span
                  dangerouslySetInnerHTML={{
                    __html: highlight(typed),
                  }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
