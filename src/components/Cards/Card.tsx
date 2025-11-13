import Heading from "../Heading"

interface CardProps {
    children: React.ReactNode,
    className? : string
    header? : {
        title : string
        variant : "h1" | "h2" | "h3" | "h4"
        underlined : boolean
        className? : string
    }

}

export const Card = ({ children, header, className }: CardProps) => {
    return (
        <div className={`card w-96 bg-base-100 card-md shadow-sm ${className && className}`}>
            <div className="card-body">
                {
                 header && <Heading variant={header.variant} underlined={header.underlined} className={header.className}>{header.title}</Heading>
                }
                {children}
            </div>
        </div>
    )
}
