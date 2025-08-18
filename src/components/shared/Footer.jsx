import { Logo } from "./Logo"
import { Linkedin } from "lucide-react"


export const Footer = () => {
  return (
    <footer className="bg-cv-dark-blue-950-base flex flex-col py-5 gap-7">
      
      <div className="flex flex-col md:flex-row justify-evenly items-center w-full gap-7 md:gap-0 container m-auto">
          <Logo/>
          <a href="https://es.linkedin.com/in/marc-fernández-pérez-7b3495164" target="_blank" rel="noopener noreferrer">
            <Linkedin color="white" height={40} width={40} />
          </a>
      </div>

      
    </footer>
  )
}
