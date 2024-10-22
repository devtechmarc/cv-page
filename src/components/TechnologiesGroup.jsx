import { technologiesImgRoute } from "../constants"
import { Button } from "./shared/Button"
import { Text } from "./shared/Text"

export const TechnologiesGroup = ({technologies = []}) => {
  return (
    <section className="flex flex-col gap-5">
        <div className="flex flex-row items-center gap-3">
            <Button className="!p-2 !pe-1 !rounded-xl cursor-auto" icon={'tecnologias'} hoverEffect={false}/>
            <Text className='font-bold text-2xl'>Tecnologías</Text>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {
                technologies.map( tech => 
                    <Button 
                        key={tech}
                        route={technologiesImgRoute}
                        icon={tech}
                        imgClassName="w-[30px] h-[30px]"
                        border
                        btnDark={false}
                        hoverEffect={false}
                    >
                        { tech }
                    </Button>
                )
            }
        </div>
    </section>
  )
}
