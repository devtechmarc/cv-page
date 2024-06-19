import { Link } from "react-router-dom"
import { sharedImgRoute } from "../../constants"

export const Logo = ({className = ''}) => {
  return (
    <Link to={'/'}>
      <img src={`${sharedImgRoute}logo.svg`} alt="Logo"className={`${className}`} aria-label="Logo" />
    </Link>
  )
}
