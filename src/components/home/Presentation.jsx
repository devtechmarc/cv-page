import { homeDescription, homeTitle, technologies } from "../../copys/homeCopys"
import { Technology } from "../Technology"
import Heading from "../shared/Heading"
import { Text } from "../shared/Text"
import parse from 'html-react-parser'

export const Presentation = () => {
  return (
    <div className="w-full flex flex-col justify-end gap-10">
        <Heading variant={'h1'} className={'md:!text-4xl xl:!text-6xl'} textLg={false}>{homeTitle}</Heading>
        <Text>{parse(homeDescription) }</Text>
        <div className="w-full flex flex-row justify-center gap-x-4">
            {
                technologies.map(tech => (
                    <Technology title={tech} key={tech}/>
                ))
            }
        </div>
    </div>
  )
}
