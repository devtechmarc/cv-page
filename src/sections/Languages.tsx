import Heading from "../components/Heading"

export const Languages = () => {
    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center space-y-8">
                    <Heading variant="h2" underlined className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-balance">
                        Idiomas
                    </Heading>
                    <div>
                        <p className="text-xl!">Español: Nativo</p>
                        <p className="text-xl!">Ingles: B2</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
