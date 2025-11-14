import { Card } from "../components/Cards/Card"
import Heading from "../components/Heading"

export const WhoWeAre = () => {
    return (
        <section className="flex flex-col gap-7 w-full max-w-4xl items-center px-4">
            <Heading variant="h2" underlined>Sobre mí</Heading>
            <Card
                className="w-full space-y-12 shadow-md">
                <p>
                    Amante de la programación y el deporte. Full stack con 7 años de experiencia en entornos mutables y de
                    alta concurrencia.
                </p>
                <p>
                    Hay una cita de los boyscouts que me gusta mucho y dice así “Deja el mundo mejor que como lo encontraste”
                    Y creo que eso se puede aplicar perfectamente al código, facilitando así no solo el funcionamiento del
                    proyecto sino el trabajo futuro.
                </p>
                <p>
                    Me gusta trabajar en equipo y forjar el apoyo mutuo entre compañeros. Cada uno tiene su trabajo pero
                    siempre se puede echar tanto una mano como unas risas.
                </p>
            </Card>
        </section>
    )
}
