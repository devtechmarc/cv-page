import { technologiesImgRoute } from "../constants"

export const Technology = ({title, width=60, height=60}) => {
  return (
    <img alt={title} src={technologiesImgRoute.concat(title).concat('.png')} className="rounded-full hover:scale-110 ease-in-out duration-150" width={width} height={height}/>
  )
}
