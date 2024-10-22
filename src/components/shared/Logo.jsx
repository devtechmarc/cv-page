import { Link } from "react-router-dom"
import { sharedImgRoute } from "../../constants"

export const Logo = ({className = ''}) => {
  return (
    <Link to={'/'}>
      <img src={`${sharedImgRoute}logo.webp`} alt="Logo"className={`w-[100px] h-[100px] ${className}`} aria-label="Logo" />
    </Link>
  )
}
