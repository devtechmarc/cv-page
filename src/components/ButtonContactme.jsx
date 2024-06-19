import { Link } from "react-router-dom"
import { Button } from "./shared/Button"
import { navbarCopys } from "../copys/navbarCopys"

export const ButtonContactme = () => {
  return (
    <Link to={"mailto:tucorreo@dominio.com"}>
        <Button btnDark={false} icon='mail'>
            {navbarCopys[1]}
        </Button>
    </Link>
  )
}
