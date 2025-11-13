import { CardPortfolio } from "../components/Cards/CardPortfolio";
import Heading from "../components/Heading";

const Portfolio = () => {
  const projects = [
    {
      title: "Moli creative Studio",
      description: "Realicé el desarrollo de la web para la agencia de Moli Creative Studio. Dando a conocer sus servicios, portfolio y la forma de contactar con ellos.",
      tech: ["Next.js", "Node.js", "Tailwindcss", "TypeScript"],
      url: "https://molicreativestudio.com",
    },
    {
      title: "Rank my bootcamp",
      description: "Web encargada de reunir y resumir las características de las distintas empresas que venden cursos y agrupar opiniones reales y sinceras de antiguos alumnos.",
      tech: ["Next.js", "MongoDB", "Node.js", "Tailwind", "TypeScript"],
      url: "https://rankmybootcamp.com",
    },
    {
      title: "Contador Personas piscina",
      description: "Web realizada para ver cuantas personas hay en tiempo real en la piscina de una comunidad de vecinos.",
      tech: ["Next.js", "MongoDB", "Node.js", "Tailwind", "TypeScript"],
      github: "https://github.com",
    },
  ];

  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <Heading variant="h2" underlined className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-balance">
            Portafolio
          </Heading>
          <div className="w-24 h-1mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(({title, description, tech, url, github}) => (
            <CardPortfolio
            key={title}
            title={title}
            text={description} 
            tools={tech}
            url={url}
            github={github}
            />
              
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
