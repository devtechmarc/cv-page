import { Linkedin } from "lucide-react"
import { configuration } from "../../configuration"

export const LinkedinButton = () => {
    return (
        <a href={configuration.author.linkedinUrl} target="_blank" rel="noopener noreferrer" title="Link a mi perfil de Linkedin">
            <Linkedin className="w-8 h-8" />
        </a>
    )
}
