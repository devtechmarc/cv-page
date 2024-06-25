import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
import Heading from "./Heading"
import { Text } from "./Text"

export const NotFound = ({title, description, btnTitle, btnIcon}) => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/#portfolio')
  }

  return (
    <section className="w-full container m-auto flex flex-col my-20">
        <Heading variant="h1" className='!text-2xl md:!text-3xl lg:!text-4xl'>{title}</Heading>
        <Text>{description}</Text>
        <Button className="w-fit text-center" icon={btnIcon} onClickAction={handleNavigation}>{btnTitle}</Button>
    </section>
  )
}
