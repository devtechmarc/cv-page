import { Card } from "../components/Card"
import { projects } from "../copys/ProjectsCopys"

export const ProjectsSection = () => {
  return (
    <section className="w-full container m-auto flex flex-col md:flex-row justify-center items-center fade-in-up-1000" id="portfolio">
        {
            projects.map(({title, subtitle, img, id}) => (
                <Card key={title} title={title} subtitle={subtitle} imageUrl={img} id={id}/>
            ))
        }
    </section>
  )
}
