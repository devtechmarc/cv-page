import { Navigate, Route, Routes } from "react-router-dom"
import { ProjectPage } from "../pages/ProjectPage"
import { HomePage } from "../pages/HomePage"

export const CvRouter = () => {
  return (
    <Routes>
        <Route path="/projects/:projectId" element={<ProjectPage/>}/>
        <Route path="/projects" element={<Navigate to={'/#portfolio'}/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/*" element={<Navigate to={'/'}/>}/>
    </Routes>
  )
}
