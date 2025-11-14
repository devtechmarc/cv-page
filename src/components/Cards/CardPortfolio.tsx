import { Eye, Github } from "lucide-react"

interface CardProps {
    title: string,
    text: string,
    tools: string[],
    url?: string,
    github?: string

}

export const CardPortfolio = ({ title, text, tools, url, github }: CardProps) => {
    return (
        <div className="card w-full bg-base-200 card-md shadow-sm rounded-2xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
                {

                    tools &&
                    <div className="flex flex-row gap-2 flex-wrap">
                        {tools.map(tool => <span className="badge badge-outline badge-info">{tool}</span>)}
                    </div>
                }
                {
                    (url || github) &&
                    <div className="w-full card-actions justify-start pt-4 gap-4">
                        {
                            url &&
                            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Ver proyecto de ${title}`} className="btn btn-ghost btn-outline flex flex-row justify-center items-center rounded-xl">
                                <Eye />
                                <span>Ver</span>
                            </a>
                        }
                        {
                            github &&
                            <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`Abrir repositorio GitHub de ${title}`} className="btn btn-ghost btn-outline flex flex-row justify-center items-center rounded-xl">
                                <Github />
                                <span>Github</span>
                            </a>
                        }
                    </div>


                }

            </div>
        </div>
    )
}
