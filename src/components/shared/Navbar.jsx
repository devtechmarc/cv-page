import { useState } from "react";
import { Logo } from './Logo';
import { navbarCopys } from "../../copys/navbarCopys";
import { iconsRoute } from "../../constants";
import { ButtonContactme } from "../ButtonContactme";
import { Text } from "./Text";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSidebarOpen = (value) => {
    document.getElementById("drawer-toggle")?.click();
    setSidebarOpen(value);
  };

  const handleForceNavigateToPortfolio = () => {
    // need to force manually scroll because the router dont 'refresh' de page more of 1 times with the same path
    if( '#portfolio' === window.location.hash){
      document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    }else{
      navigate('/#portfolio');
    }
  }

  return (
    <nav className="w-full flex items-center bg-cv-dark-blue-950-base py-5 text-white">
      {/* Vista Móvil */}
      <div className="w-full flex flex-row md:hidden items-center justify-between">
        <Logo className="ms-4"></Logo>
        <label htmlFor="drawer-toggle" className="cursor-pointer" onClick={() => setSidebarOpen(prev => !prev)}>
          <img className="me-10 text-white" src={`${iconsRoute}menu-icon.svg`} alt="Menu" width={30} height={30}/>
        </label>
        {/* Sidebar */}
        <div className={` ${sidebarOpen ? "fixed" : "hidden"} top-0 left-0 w-full h-full bg-black opacity-0 z-40`} onClick={() => handleSidebarOpen(!sidebarOpen)}/>
        <input type="checkbox" id="drawer-toggle" className="hidden peer"></input>
        <div className="fixed top-0 right-0 z-50 w-64 h-full transition-all duration-500 transform translate-x-full bg-gradient-to-b shadow-lg backdrop-blur-3xl peer-checked:translate-x-0">
          <div className="flex flex-col items-center gap-10 pt-10">
            <div className="col-span-2 md:gap-x-8 lg:gap-x-0 flex justify-evenly items-center">
              <span className={`text-2xl hover:underline cursor-pointer`} onClick={handleForceNavigateToPortfolio}>{navbarCopys[0]}</span>
            </div>
            <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
              <ButtonContactme/>
            </div>
          </div>
        </div>
      </div>
      {/* Vista PC */}
      <div className="w-full hidden md:grid grid-cols-5">
        <div className="col-span-1 lg:col-span-2">
          <Logo className="ms-4"></Logo>
        </div>
        <div className="col-span-2 md:gap-x-8 lg:gap-x-0 flex justify-evenly items-center">
          <span className={`text-2xl hover:underline cursor-pointer`} onClick={handleForceNavigateToPortfolio}>{navbarCopys[0]}</span>
        </div>
        <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
          <ButtonContactme/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
