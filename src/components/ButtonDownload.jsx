import { Button } from "./shared/Button"
import { downloadCv } from "../copys/homeCopys"

export const ButtonDownload = () => {
  return (
    <a href={"/pdf/apuntes_grid.pdf"} className="my-10 m-auto" download>
        <Button icon='cv'>
            {downloadCv}
        </Button>
    </a>
  )
}