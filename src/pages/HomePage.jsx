import { Education } from "../sections/Education"
import { Experience } from "../sections/Experience"
import { Hero } from "../sections/Hero"
import Portfolio from "../sections/Portfolio"
import Skills from "../sections/Skills"
import { WhoWeAre } from "../sections/WhoWeAre"
import { Footer } from "../components/Footer"
import { CVButton } from "../components/buttons/CVButton"
import { Languages } from "../sections/Languages"

export const HomePage = () => {
  return (
    <>
      <div className="container w-full m-auto flex flex-col items-center">
        <Hero />
        <WhoWeAre />
        <Portfolio />
        <Experience/>
        <Education />
        <Skills />
        <Languages/>
        <CVButton/>
      </div>
      <Footer />
    </>
  )
}
