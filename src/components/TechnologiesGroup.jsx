import { Technology } from "./Technology"
import { Button } from "./shared/Button"
import { Text } from "./shared/Text"

export const TechnologiesGroup = ({technologies = []}) => {
  return (
    <section className="flex flex-col">
        <div className="flex flex-row items-center gap-3">
            <Button className="!p-2 !pe-1 !rounded-xl" icon={'programs'}/>
            <Text className='font-bold text-2xl'>Tecnologías</Text>
        </div>
        <div className="flex flex-row gap-5">
            {
                technologies.map(tech => (
                    <Technology key={tech} title={tech} />
                ))
            }
        </div>
    </section>
  )
}
