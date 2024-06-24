import { CvLayout } from "../layouts/CvLayout";
import { useParams } from "react-router-dom";
import { TechnologiesGroup } from "../components/TechnologiesGroup";
import { useEffect, useState } from "react";
import { projects } from "../copys/ProjectsCopys";
import { Button } from "../components/shared/Button";
import { NotFound } from "../components/shared/NotFound";

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
        <div className="w-full m-auto container flex flex-col">
          {/* Aquí ponemos la imagen (arriba) */}
          <figure>
            <img src={project.img} alt="Imagen del proyecto" className="w-full rounded-lg shadow-lg mb-4" />
            <figcaption className="text-center text-sm text-gray-500">{project.title}</figcaption>
          </figure>

          <div className="w-full flex flex-col md:flex-row justify-center md:justify-around">
            <TechnologiesGroup technologies={project.technologies} />
            <Button icon={'internet'}>Ir a la web</Button>
          </div>

          {/* Aquí el texto descriptivo */}
          <p className="text-center text-gray-700 mt-4">{project.description}</p>

          {/* Aquí el botón de descargar CV si aplica */}
          {/* <Button icon={'download'}>Descargar CV</Button> */}
        </div>
      ) : (
        <NotFound btnIcon={'mail'} btnTitle={'Más proyectos'} title={'Proyecto no encontrado'} description={'El proyecto que buscas no existe o no se encuentra disponible. ¿Te gustaría ver otros? ¡Pincha abajo!'} />
      )}
    </CvLayout>
  );
};
