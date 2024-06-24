import { FrontImage } from "../components/FrontImage"
import { Presentation } from "../components/home/Presentation"
import { sharedImgRoute } from "../constants"

export const HeroSection = () => {
  return (
    <section className={`w-full flex flex-col md:flex-row gap-8 lg:gap-0 container m-auto`}>
        <div className="w-full md:w-2/5">
            <FrontImage imageUrl={sharedImgRoute.concat('Marc.png')}/>
        </div>
        <div className="w-full md:w-3/5">
          <Presentation/>
        </div>
    </section>
  )
}
