import { ButtonContactme } from "../ButtonContactme"
import { Logo } from "./Logo"
import { Text } from "./Text"

export const Footer = () => {
  return (
    <footer className="bg-cv-dark-blue-950-base flex flex-col py-5">
      
      <div className="flex flex-col md:flex-row justify-around items-center w-full">
        <Logo/>
        <ButtonContactme/>
      </div>

      <div className="w-full text-center">
        <Text className={'text-white'}>Created with ❤️ by Marc</Text>
      </div>
      
    </footer>
  )
}
