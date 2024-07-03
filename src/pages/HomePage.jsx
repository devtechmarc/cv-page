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
      <Seo title={'aa'} description={'aa'} image={'aa'} keywords={'aa'} url={'aa'} />
      <div className="w-full flex py-14 gap-7 flex-col">
        <HeroSection/>
        
        <Breaker>{homeSubtitle4}</Breaker>

        <TechnologiesSection/>
        
        <Breaker>{homeSubtitle}</Breaker>
          
        <Timeline events={laboralExperience}/>
        
        <Breaker>{homeSubtitle2}</Breaker>
         
        <Timeline events={studies}/>
        
        <Breaker>{homeSubtitle3}</Breaker>

        <ProjectsSection/>

        <h1>TODO SECTION:</h1>
        <ul>
          <li>PASAR LAS IMG A WEBP</li>
          <li>TERMINAR LOS TAGS SEO (CON EL COMPONENTE SEO EN LAS PAGES.JSX)</li>
          <li>METER FOTO EN LA SECCION DE PROYECTO NO ENCONTRADO</li>
          <li>METER ANIMACIONES</li>
          <li>BOTON DE DESCARGAR EL CV</li>
          <li>VER SI METER LAS FOTOS EN CLOUDINARY</li>
        </ul>

      </div>
    </CvLayout>
  )
}
