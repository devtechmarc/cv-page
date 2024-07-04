import { Timeline } from "../components/Timeline"
import { Breaker } from "../components/shared/Breaker"
import { homeSubtitle, homeSubtitle2, homeSubtitle3, homeSubtitle4, laboralExperience, studies } from "../copys/homeCopys"
import { CvLayout } from "../layouts/CvLayout"
import { HeroSection } from "../sections/HeroSection"
import { ProjectsSection } from "../sections/ProjectsSection"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { TechnologiesSection } from "../sections/TechnologiesSection"
import Seo from "../components/shared/Seo"
import { ButtonDownload } from "../components/ButtonDownload"



export const HomePage = () => {

  const { hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <CvLayout>
      <Seo title={'Marc Fernández'} description={'Amante de la programación y el deporte, siempre he estado metido detrás del muro trabajando de Backend developer con Java. Ahora, directo a full stack. Mis 6 años de experiencia me han preparado para adaptarme a las situaciones y peculiaridades de cada proyecto, así como a tirar del hilo en busca de la mejor solución. En cada uno de mis proyectos me he dedicado al desarrollo de evolutivos y correctivos. Así como de hablar con el cliente sobre la opción más viable acorde a lo que necesitaba en cada momento.'} image={'todo'} keywords={'programación, full stack, developer, backend developer, experiencia, proyectos'} url={'todo'} />
      <div className="w-full flex py-14 gap-7 flex-col">
        <HeroSection/>
        
        <Breaker>{homeSubtitle4}</Breaker>

        <TechnologiesSection/>
        
        <Breaker>{homeSubtitle}</Breaker>
          
        <Timeline events={laboralExperience}/>
        
        <Breaker>{homeSubtitle2}</Breaker>
         
        <Timeline events={studies}/>

        <ButtonDownload/>
        
        <Breaker>{homeSubtitle3}</Breaker>

        <ProjectsSection/>

        <h1>TODO SECTION:</h1>
        <ul>
          <li>PASAR LAS IMG A WEBP</li>
          <li>TERMINAR LOS TAGS SEO (CON EL COMPONENTE SEO EN LAS PAGES.JSX)</li>
          <li>METER ANIMACIONES</li>
          <li>BOTON DE DESCARGAR EL CV</li>
          <li>VER SI METER LAS FOTOS EN CLOUDINARY</li>
          <li>BUSCAR EN EL PROYECTO LA PALABRA TODO PARA REVISAR LO QUE QUEDA POR HACER</li>
          <li>revisar los metatags de https://github.com/alexcanDvlpr/alexcantongarcia/blob/main/components/AlexCantonHead.js</li>
        </ul>

      </div>
    </CvLayout>
  )
}
