import { ArrowBigDown, ChevronDown, Github, Linkedin } from "lucide-react";
import Heading from "../components/Heading";

export const Hero = () => {
  return (
    <section className="relative flex flex-col min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center gap-2 flex-1 w-full">
        <Heading variant="h1" className="text-center">Marc Fernández</Heading>
        <p className="text-2xl md:text-3xl lg:text-4xl! text-primary font-semibold">Full Stack developer</p>
        <p className="text-xl mt-5">Creando apasionantes proyectos...🚀</p>
        <div className="w-xl">
          <div className="flex flex-col justify-center items-center gap-4 mt-2">
            <div className="flex flex-row w-full justify-center gap-4">
              <a href="#proyectos" className="btn btn-outline btn-primary btn-lg rounded-xl">Ver proyectos</a>
              <a href="#contacto" className="btn btn-outline btn-ghost btn-lg rounded-xl">Contácto</a>
            </div>
            <a className="btn btn-primary btn-lg btn-wide rounded-xl my-1">Desargar cv</a>
          </div>
          <div className="flex flex-row justify-center gap-6 mt-4">
            <Linkedin className="w-8 h-8" />
            <Github className="w-8 h-8" />
          </div>
        </div>
      </div>
      <ChevronDown className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 animate-bounce" />
    </section>
  )
}
