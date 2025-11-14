import { Github } from "lucide-react"
import { configuration } from "../../configuration"

export const GithubButton = () => {
    return (
        <a href={configuration.author.githubUrl} target="_blank" rel="noopener noreferrer" title="Link a mi perfil de Guthub">
            <Github className="w-8 h-8" />
        </a>
        )
}
