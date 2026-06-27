import { Code2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  skills: string[];
}

const SkillTutorials = ({ skills }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = (skill: string) => {
    navigate(`/tutorials/${skill.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-")}`);
  };

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold uppercase text-slate-500">
        Skill Tutorials
      </h3>

      {skills.map((skill) => (
        <button
          key={skill}
          onClick={() => handleNavigate(skill)}
          className="flex w-full items-center gap-3 rounded-xl p-3 transition hover:bg-slate-100"
        >
          <Code2 className="h-5 w-5 text-purple-500" />

          <span className="font-medium text-slate-700">{skill}</span>
        </button>
      ))}
    </div>
  );
};

export default SkillTutorials;