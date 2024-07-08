import { hobbiesImgRoute, technologiesImgRoute } from "../constants"

export const Hobby = ({title}) => {
  return (
    <img alt={title} src={hobbiesImgRoute.concat(title).concat('.webp')} className="rounded-full object-cover !w-[80px] !h-[80px]"/>
  )
}
