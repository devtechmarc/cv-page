import { Button } from "../components/shared/Button"
import { technologiesImgRoute } from "../constants"
import { technologies } from "../copys/homeCopys"

export const TechnologiesSection = () => {
  return (
    <section className="w-full container m-auto flex flex- flex-wrap justify-center md:justify-around gap-5 py-10">
        {
            technologies.map( tech => 
                <Button 
                    key={tech}
                    route={technologiesImgRoute}
                    icon={tech}
                    imgClassName="w-[30px] h-[30px]"
                    border
                    btnDark={false}
                >
                    { tech }
                </Button>
            )
        }
        
        
    </section>
  )
}
