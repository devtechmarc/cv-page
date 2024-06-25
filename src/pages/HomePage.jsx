import { Timeline } from "../components/Timeline"
import { Breaker } from "../components/shared/Breaker"
import { homeSubtitle, homeSubtitle2, homeSubtitle3, laboralExperience, studies } from "../copys/homeCopys"
import { CvLayout } from "../layouts/CvLayout"
import { HeroSection } from "../sections/HeroSection"
import { ProjectsSection } from "../sections/ProjectsSection"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"



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
      <div className="w-full flex py-14 gap-7 flex-col">
        <HeroSection/>
        
        <Breaker>{homeSubtitle}</Breaker>
          
        <Timeline events={laboralExperience}/>
        
        <Breaker>{homeSubtitle2}</Breaker>
         
        <Timeline events={studies}/>
        
        <Breaker>{homeSubtitle3}</Breaker>

        <ProjectsSection/>

      </div>
    </CvLayout>
  )
}
