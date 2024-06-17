import { Link } from "react-router-dom"

export const Logo = ({className = ''}) => {
  return (
    <Link to={'/'}>
      <img src="/img/logo.svg" alt="Logo"className={`${className}`} aria-label="Logo" />
    </Link>
  )
}
