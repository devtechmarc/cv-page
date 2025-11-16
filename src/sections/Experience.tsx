import { Award, GraduationCap } from "lucide-react"
import { Card } from "../components/Cards/Card"
import Heading from "../components/Heading"


const experience = [
    {
        name: 'Full stack developer',
        enterprise: 'Grupo Onetec',
        duration: 'Mar 2021 - Actual',
    },
    {
        name: 'Backend developer',
        enterprise: 'NTT Data (Everis)',
        duration: 'Jul 2018 - Mar 2021',
    },
    {
        name: 'SAP Developer (Prácticas)',
        enterprise: 'NTT Data (Everis)',
        duration: 'Mar 018 - Jun 2018',
    },
];


export const Experience = () => {
    return (
        <section className="flex flex-col gap-7 w-full max-w-4xl px-4 mb-20">
            <Heading variant="h2" className="text-center" underlined>Experiencia</Heading>
            <div className="flex flex-col items-center gap-6">
                {
                    experience.map(({ name, enterprise, duration }) => (
                        <Card header={{ variant: 'h4', title: name, underlined: false, className: "font-medium! text-xl!" }} className="w-full max-w-4xl">
                            <p className="text-primary">{enterprise}</p>
                            <span>{duration}</span>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}
