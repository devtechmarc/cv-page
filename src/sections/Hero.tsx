import { ChevronDown } from "lucide-react";
import Heading from "../components/Heading";
import { CVButton } from "../components/buttons/CVButton";
import { LinkedinButton } from "../components/buttons/LinkedinButton";
import { GithubButton } from "../components/buttons/GithubButton";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <section className="relative flex flex-col min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center gap-2 flex-1 w-full">
        <Heading variant="h1" className="text-center">Marc Fernández</Heading>
        <p className="text-2xl md:text-3xl lg:text-4xl! text-primary font-semibold">Full Stack developer</p>
        {/* <p className="text-xl mt-5">Creando apasionantes proyectos...🚀</p> */}
        <p className="text-xl">
          <Typewriter
            options={{
              delay: 50,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  'Trabajando en mi nueva <span class="text-secondary font-semibold">idea</span>'
                )
                .pauseFor(1500)
                .deleteAll()
                .typeString(
                  'Mejorando mis habilidades de <span class="text-info font-semibold">React</span>'
                )
                .pauseFor(1500)
                .deleteChars(5)
                .typeString(
                  '<span class="text-neutral font-semibold">Next.js</span>'
                )
                .pauseFor(1500)
                .deleteChars(7)
                .typeString(
                  '<span class="text-slate-500 font-semibold">Express</span>'
                )
                .pauseFor(1500)
                .deleteAll()
                .typeString(
                  'Pausa para el <span class="text-amber-800 font-semibold">café</span> ☕️'
                )
                .pauseFor(1500)
                .deleteAll()

                .start()
            }}
          />
        </p>
        <div className="w-full max-w-xl">
          <div className="flex flex-col justify-center items-center gap-4 mt-2">
            <a href="#proyectos" className="btn btn-outline btn-wide btn-neutral btn-lg rounded-xl">Ver proyectos</a>
            <CVButton />
          </div>
          <div className="flex flex-row justify-center gap-6 mt-4">
            <LinkedinButton />
            <GithubButton />
          </div>
        </div>
      </div>
      <ChevronDown className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 animate-bounce" />
    </section>
  )
}
