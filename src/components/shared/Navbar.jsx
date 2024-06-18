import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Logo } from './Logo';
import { Button } from "./Button";
import { navbarCopys } from "../../copys/navbarCopys";
import { iconsRoute } from "../../constants";

export const Navbar = () => {
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);
 
  const handleSidebarOpen = (value) => {
    document.getElementById("drawer-toggle")?.click();
    setSidebarOpen(value);
  };

  return (
    <nav className="w-full flex items-center bg-cv-dark-blue-950-base py-5 text-white">
      {/* Vista Móvil */}
      <div className="w-full flex flex-row md:hidden items-center justify-between">
        <Logo className="ms-4"></Logo>
        <label htmlFor="drawer-toggle" className="cursor-pointer" onClick={() => setSidebarOpen(prev => !prev)}>
          <img className="me-10" src={`${iconsRoute}menu-icon.svg`} alt="Menu" width={30} height={30}/>
        </label>
        {/* Sidebar */}
        <div className={` ${sidebarOpen ? "fixed" : "hidden"} top-0 left-0 w-full h-full bg-black opacity-0 z-10`} onClick={() => handleSidebarOpen(!sidebarOpen)}/>
        <input type="checkbox" id="drawer-toggle" className="hidden peer"></input>
        <div className="fixed top-0 right-0 z-20 w-64 h-full transition-all duration-500 transform translate-x-full bg-gradient-to-b from-moli-purple-300-base shadow-lg backdrop-blur-3xl peer-checked:translate-x-0">
          <div className="flex flex-col items-center gap-10 pt-10">
            {
              navbarCopys.map(copy => (
                <Link key={copy}>{copy}</Link>
              ))
            }
          </div>
        </div>
      </div>
      {/* Vista PC */}
      <div className="w-full hidden md:grid grid-cols-5">
        <div className="col-span-1 lg:col-span-2">
          <Logo className="ms-4"></Logo>
        </div>
        <div className="col-span-2 md:gap-x-8 lg:gap-x-0 flex justify-evenly items-center">
          <Link className={`text-2xl underline-purple`} href={navbarCopys[0]}>{navbarCopys[0]}</Link>
        </div>
        <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
          <Link href={navbarCopys[1]}>
            {navbarCopys[1]}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
