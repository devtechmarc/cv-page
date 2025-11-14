import { Github, Linkedin } from "lucide-react"
import { configuration } from "../configuration"
import { GithubButton } from "./buttons/GithubButton"
import { LinkedinButton } from "./buttons/LinkedinButton"

export const Footer = () => {
    return (
        <footer className="flex flex-col bg-neutral text-neutral-content justify-center items-center gap-6 p-4 mt-16">
            <div className="flex justify-center gap-8">
                <LinkedinButton />
                <GithubButton />
            </div>
                <p>Hecho con ❤️ por Marc</p>
        </footer>
    )
}
