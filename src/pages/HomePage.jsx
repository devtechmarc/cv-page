import { Education } from "../sections/Education"
import { Hero } from "../sections/Hero"
import Portfolio from "../sections/Portfolio"
import Skills from "../sections/Skills"
import { WhoWeAre } from "../sections/WhoWeAre"
import { Footer } from "../components/Footer"
import { CVButton } from "../components/buttons/CVButton"

export const HomePage = () => {
  return (
    <>
      <div className="container w-full m-auto flex flex-col items-center">
        <Hero />
        <WhoWeAre />
        <Portfolio />
        <Education />
        <Skills />
        <CVButton/>
      </div>
      <Footer />
    </>
  )
}
