import {

  Code2,
} from "lucide-react";

interface Props {
  skills: string[];
}

const SkillTutorials = ({
  skills,
}: Props) => {
  return (
    <div className="space-y-2">

      <h3 className="text-sm font-semibold text-slate-500 uppercase">
        Skill Tutorials
      </h3>

      {skills.map((skill) => (
        <button
          key={skill}
          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 transition"
          onClick={() =>
            console.log(
              `GET TUTORIAL API => ${skill}`
            )
          }
        >
          <Code2 className="h-4 w-4 text-purple-500" />

          <span>{skill}</span>
        </button>
      ))}
    </div>
  );
};

export default SkillTutorials;