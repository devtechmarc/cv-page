import { Navigate, Route, Routes } from "react-router-dom"
import { ProjectPage } from "../pages/ProjectPage"

export const CvRouter = () => {
  return (
    <Routes>
        <Route path="projects/:projectId" element={<ProjectPage/>}/>
        <Route path="/*" element={<Navigate to={'/'}/>}/>
    </Routes>
  )
}
