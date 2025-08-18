import { Button } from "../components/shared/Button"
import { technologiesImgRoute } from "../constants"
import { technologies } from "../copys/homeCopys"

export const TechnologiesSection = () => {
  return (
    <section className="w-full container m-auto gap-5 py-10 flex flex-col sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 px-8">
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
                    className="max-w-52 2xl:max-w-72 self-center md:max-w-full w-full"
                >
                    { tech }
                </Button>
            )
        }
        
        
    </section>
  )
}
