import { Card } from "../components/Cards/Card"
import Heading from "../components/Heading"


const education = {
    academic: [
        {
            name: 'Grado superior en Desarrollo de aplicaciones multiplataforma',
            university: 'Universidad Francisco de Vitoria',
            duration: '2016 - 2018',
        }
    ]
}


export const Education = () => {
    return (
        <section className="flex flex-col gap-7 w-full">
            <Heading variant="h2" className="text-center" underlined>Formación</Heading>
            <div className="flex flex-col justify-center items-center">
            {
                education.academic.map(({name, university, duration}) => (
                    <Card header={{ variant: 'h3', title: name, underlined : false, className: "font-medium! text-xl!"}} className="w-full max-w-4xl">
                        <p className="text-primary">{university}</p>
                        <span>{duration}</span>
                    </Card>
                ))
            }
            </div>

        </section>
    )
}
