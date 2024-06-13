import { Navbar } from "../components/shared/Navbar"
import { Footer } from "../components/shared/Footer"

export const CvLayout = ({ children }) => {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
}
