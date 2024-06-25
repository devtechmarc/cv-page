import { CvLayout } from "../layouts/CvLayout";
import { useParams } from "react-router-dom";
import { TechnologiesGroup } from "../components/TechnologiesGroup";
import { useEffect, useState } from "react";
import { projects } from "../copys/ProjectsCopys";
import { Button } from "../components/shared/Button";
import { NotFound } from "../components/shared/NotFound";
import { Text } from "../components/shared/Text";
import Heading from "../components/shared/Heading";

export const ProjectPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (projectId) {
      setProject(projects.find(project => project.id === projectId));
    }
  }, [projectId]);

  return (
    <CvLayout>
      {project ? (
          <main className="w-full flex flex-col 2xl:container 2xl:m-auto 2xl:mt-10" >
            <figure className="w-full">
              <img src={project.imgFrontPage} alt={`Imagen de ${project.title}` } className="w-full 2xl:shadow-lg rounded-xl" />
            </figure>
            <div className="w-full m-auto container flex flex-col gap-10 my-10">
              <section className="w-full flex flex-col">
                <div className="w-full flex flex-col justify-center">
                  <Heading variant="h1" className="text-center">{project.title}</Heading>
                  <Heading variant="h2" className="text-center">{project.subtitle}</Heading>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-between">
                  <TechnologiesGroup technologies={project.technologies} />
                  <a href={project.url} target="_blank" rel="noopener">
                    <Button className="h-fit" icon={'internet'}>Ir a la web</Button>
                  </a>
                </div>
              </section>

              <section className="w-full flex flex-col m-auto gap-10">
                <Text>{project.description}</Text>
                <Button className="w-fit m-auto" icon={'cv'}>Descargar mi CV</Button>
              </section>

            </div>
        </main>
      ) : (
        <NotFound btnTitle={'Más proyectos'} title={'Proyecto no encontrado'} description={'El proyecto que buscas no existe o no se encuentra disponible. ¿Te gustaría ver otros? ¡Pincha abajo!'} />
      )}
    </CvLayout>
  );
};
