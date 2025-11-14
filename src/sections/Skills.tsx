import { Card } from "../components/Cards/Card";
import Heading from "../components/Heading";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS", "HTML5", "SEO", "JQuery", "CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Java", "Spring", "Springboot", "MongoDB", "Oracle", "MySQL", "REST APIs", "SOAP APIs"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "CI/CD", "Linux"],
    },
    {
      title: "Soft Skills",
      skills: ["Trabajo en Equipo", "Independencia", "Iniciativa propia", "Asertividad"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <Heading variant="h2" underlined className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-balance">
            Habilidades
          </Heading>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 place-items-center gap-6">
          {skillCategories.map(({skills, title}) => (
            <Card key={title} header={{ variant: "h3", title, underlined : false}}
            >
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    className="badge badge-neutral"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
