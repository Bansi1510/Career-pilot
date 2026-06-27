import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

import type { TutorialQuestion } from "@/types/tutorial";

interface Props {
  questions: TutorialQuestion[];
}

const getDifficultyColor = (
  difficulty: TutorialQuestion["difficulty"]
) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-500";

    case "Medium":
      return "bg-yellow-500";

    case "Hard":
      return "bg-red-500";

    default:
      return "bg-slate-400";
  }
};

const QuestionAccordion = ({
  questions,
}: Props) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

      {/* Header */}

      <div className="border-b bg-slate-50 px-8 py-5">

        <h2 className="text-xl font-bold text-slate-900">
          Interview Questions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Click any question to reveal the answer.
        </p>

      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full"
      >
        {questions.map((question, index) => (
          <AccordionItem
            key={question.id}
            value={String(question.id)}
            className="border-b last:border-b-0"
          >
            <AccordionTrigger className="px-8 py-6 hover:bg-slate-50 hover:no-underline">

              <div className="flex w-full items-center gap-5">

                {/* Number */}

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">

                  {index + 1}

                </div>

                {/* Question */}

                <div className="flex-1 text-left">

                  <h3 className="text-lg font-semibold text-slate-900">
                    {question.question}
                  </h3>

                  <div className="mt-2 flex items-center gap-3 text-sm">

                    <div className="flex items-center gap-2">

                      <span
                        className={`h-2.5 w-2.5 rounded-full ${getDifficultyColor(
                          question.difficulty
                        )}`}
                      />

                      <span className="font-medium text-slate-700">
                        {question.difficulty}
                      </span>

                    </div>

                    <span className="text-slate-300">
                      •
                    </span>

                    <span className="text-slate-500">
                      {question.category}
                    </span>

                  </div>

                </div>

              </div>

            </AccordionTrigger>

            <AccordionContent>

              <div className="border-t bg-slate-50 px-8 py-7">

                {/* Answer */}

                <div>

                  <div className="mb-4 flex items-center gap-2">

                    <CheckCircle2 className="h-5 w-5 text-green-500" />

                    <h4 className="font-semibold text-slate-900">
                      Answer
                    </h4>

                  </div>

                  <p className="leading-8 text-slate-600">
                    {question.answer}
                  </p>

                </div>

                {/* Tip */}

                <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">

                  <div className="mb-3 flex items-center gap-2">

                    <Lightbulb className="h-5 w-5 text-amber-500" />

                    <h4 className="font-semibold text-amber-700">
                      Interview Tip
                    </h4>

                  </div>

                  <p className="leading-7 text-slate-600">

                    Don't memorize this answer word-for-word.
                    Understand the concept and explain it in your
                    own words. If possible, mention where you've
                    used it in your projects to make your answer
                    stronger.

                  </p>

                </div>

              </div>

            </AccordionContent>

          </AccordionItem>
        ))}
      </Accordion>

    </div>
  );
};

export default QuestionAccordion;