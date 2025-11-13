interface CardProps {
    title: string,
    text: string,
    tools: string[],
    url?: string,
    github?: string

}

export const CardEducation = ({ title, text, tools, url, github }: CardProps) => {
    return (
        <div className="card w-96 bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
                {

                    tools && 
                    <div className="flex flex-row">
                        {tools.map(tool => <span className="badge badge-info">{tool}</span>)}
                    </div>
                }
                {
                    url || github &&
                    <div className="w-full card-actions justify-between">
                        {
                            url &&
                            <button className="btn btn-neutral">
                                Link
                            </button>
                        }
                        {
                            github &&
                            <button className="btn btn-neutral">
                                Github
                            </button>
                        }
                    </div>


                }

            </div>
        </div>
    )
}
