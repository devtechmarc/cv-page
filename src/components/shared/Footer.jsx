import { iconsRoute } from "../../constants"
import { ButtonContactme } from "../ButtonContactme"
import { Logo } from "./Logo"
import { Text } from "./Text"

export const Footer = () => {
  return (
    <footer className="bg-cv-dark-blue-950-base flex flex-col py-5 gap-7 md:gap-0 sticky top-full">
      
      <div className="flex flex-col md:flex-row justify-around items-center w-full gap-7 md:gap-0">
        <div className="flex flex-row gap-8 items-center justify-center">
          <Logo/>
          <a href="https://es.linkedin.com/in/marc-fernández-pérez-7b3495164" target="_blank" rel="noopener noreferrer">
            <img src={iconsRoute.concat('linkedin.svg')} className="w-10 h-10" alt="Linkedin" />
          </a>
        </div>

        <ButtonContactme/>
      </div>

      <div className="w-full text-center">
        <Text className={'text-white'}>Created with ❤️ by Marc</Text>
      </div>
      
    </footer>
  )
}
