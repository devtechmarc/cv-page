import { Award, GraduationCap } from "lucide-react"
import { Card } from "../components/Cards/Card"
import Heading from "../components/Heading"


const education = {
    academic: [
        {
            name: 'Grado superior en Desarrollo de aplicaciones multiplataforma',
            university: 'Universidad Francisco de Vitoria',
            duration: '2016 - 2018',
        }
    ],

    certificates: [
        {
            name: 'Scrum Master 150 PDAs',
            enterprise: 'Scrummanager'
        },
        {
            name: 'Node.js: de cero a experto',
            enterprise: 'Devtalles'
        },
        {
            name: 'React: de cero a experto',
            enterprise: 'Devtalles'
        },
        {
            name: 'TanStack Query - Un poderoso gestor de estado asíncrono',
            enterprise: 'Devtalles'
        },
        {
            name: 'GIT + Github: Todo un sistema de control de versiones',
            enterprise: 'Devtalles'
        },
        {
            name: 'TypeScript: Tu completa guía y manual de mano',
            enterprise: 'Devtalles'
        },
    ]
}


export const Education = () => {
    return (
        <section className="flex flex-col gap-7 w-full max-w-4xl">
            <Heading variant="h2" className="text-center" underlined>Formación</Heading>
            <div className="space-y-10">
                <div className="flex flex-col items-center gap-6">
                    <Heading variant="h3" className="flex flex-row items-center gap-2 self-start"> <GraduationCap className="text-primary w-10 h-10" /> <span>Formación académica</span></Heading>
                    {
                        education.academic.map(({ name, university, duration }) => (
                            <Card header={{ variant: 'h4', title: name, underlined: false, className: "font-medium! text-xl!" }} className="w-full max-w-4xl">
                                <p className="text-primary">{university}</p>
                                <span>{duration}</span>
                            </Card>
                        ))
                    }
                </div>

                <div className="flex flex-col items-center gap-6">
                    <Heading variant="h3" className="flex flex-row items-center gap-2 self-start"> <Award className="text-primary w-10 h-10" /> <span>Certificados</span></Heading>
                    {
                        education.certificates.map(({ name, enterprise }) => (
                            <Card header={{ variant: 'h4', title: name, underlined: false, className: "font-medium! text-xl!" }} className="w-full max-w-4xl">
                                <p className="text-primary">{enterprise}</p>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
