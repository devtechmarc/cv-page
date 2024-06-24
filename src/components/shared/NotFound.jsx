import { Button } from "./Button"
import Heading from "./Heading"
import { Text } from "./Text"

export const NotFound = ({title, description, btnTitle, btnIcon}) => {
  return (
    <section className="w-full container m-auto flex flex-col">
        <Heading variant="h1">{title}</Heading>
        <Text>{description}</Text>
        <Button icon={btnIcon}>{btnTitle}</Button>
    </section>
  )
}
