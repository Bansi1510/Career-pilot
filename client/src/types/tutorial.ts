export type Difficulty = "Easy" | "Medium" | "Hard";

export interface TutorialQuestion {
  id: number;
  question: string;
  answer: string;
  difficulty: Difficulty;
  category: string;
}

export interface TutorialSkill {
  id: number;
  name: string;
  icon: string;
  color: string;
  questions: TutorialQuestion[];
}