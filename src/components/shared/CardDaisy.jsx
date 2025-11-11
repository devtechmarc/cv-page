import Heading from "./Heading"

export const CardDaisy = (img, imgName, title, description, badges) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={img}
                    alt={imgName} />
            </figure>
            <div className="card-body">
                <Heading variant="h2"  className="card-title">
                    {title}
                </Heading>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {
                        badges 
                        ?
                        badges.map((badge, idx) => <div key={idx} className="badge badge-outline">{badge}</div>)

                        : 
                        null
                    }
                </div>
            </div>
        </div>
    )
}

