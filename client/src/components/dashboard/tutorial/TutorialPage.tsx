import { useMemo } from "react";
import { useParams } from "react-router-dom";

import {
  Atom,
  BookOpen,
  BrainCircuit,
  Database,
  Server,
  Trophy,
} from "lucide-react";

import QuestionAccordion from "./QuestionAccordion";
import { tutorialData } from "@/data/tutorialData";

const TutorialPage = () => {
  const { skill } = useParams();

  const tutorial = useMemo(() => {
    return tutorialData.find(
      (item) =>
        item.name
          .toLowerCase()
          .replace(".", "")
          .replace(/\s/g, "") === skill
    );
  }, [skill]);

  if (!tutorial) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-2xl">
        <h1 className="text-3xl font-bold text-slate-900">
          Tutorial Not Found
        </h1>
      </div>
    );
  }

  const icon =
    tutorial.name === "Node.js" ? (
      <Server className="h-10 w-10 text-green-500" />
    ) : tutorial.name === "React.js" ? (
      <Atom className="h-10 w-10 text-sky-500" />
    ) : (
      <Database className="h-10 w-10 text-blue-500" />
    );

  return (
    <div className="mx-auto max-w-7xl space-y-8">

      {/* Hero */}

      <section className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">

        <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-10">

          {/* Background Blur */}

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="absolute -bottom-20 left-20 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}

            <div className="max-w-2xl">

              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-xl">

                {icon}

              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">

                Career Pilot Tutorial

              </p>

              <h1 className="text-5xl font-bold text-white">

                {tutorial.name}

              </h1>

              <p className="mt-5 text-lg leading-8 text-slate-300">

                Learn the most frequently asked interview
                questions with concise explanations,
                practical answers, and interview tips.
                Build confidence before your next interview.

              </p>

            </div>

            {/* Right Stats */}

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

                <BookOpen className="mb-4 h-8 w-8 text-blue-400" />

                <p className="text-3xl font-bold text-white">

                  {tutorial.questions.length}

                </p>

                <p className="mt-1 text-sm text-slate-300">

                  Questions

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

                <BrainCircuit className="mb-4 h-8 w-8 text-green-400" />

                <p className="text-lg font-semibold text-white">

                  Easy → Hard

                </p>

                <p className="mt-1 text-sm text-slate-300">

                  Difficulty

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

                <Trophy className="mb-4 h-8 w-8 text-yellow-400" />

                <p className="text-lg font-semibold text-white">

                  Interview Ready

                </p>

                <p className="mt-1 text-sm text-slate-300">

                  Practice

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

                {icon}

                <p className="mt-4 text-lg font-semibold text-white">

                  {tutorial.name}

                </p>

                <p className="mt-1 text-sm text-slate-300">

                  Technology

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* Questions */}

      <QuestionAccordion
        questions={tutorial.questions}
      />

    </div>
  );
};

export default TutorialPage;