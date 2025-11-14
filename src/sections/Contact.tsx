import { CVButton } from "../components/buttons/CVButton"
import Heading from "../components/Heading"

export const Contact = () => {
    return (
        <section className="flex flex-col gap-7 justify-center items-center mb-16">
            <Heading variant="h2" underlined>Contacto</Heading>

            <p>¿Cual va a ser nuestro próximo proyecto?</p>

            <CVButton />

        </section>
    )
}
