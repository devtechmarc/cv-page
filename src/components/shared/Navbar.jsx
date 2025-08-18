import { Logo } from './Logo';
import { navbarCopys } from "../../copys/navbarCopys";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {

  const navigate = useNavigate();

  const handleForceNavigateToPortfolio = () => {
    // need to force manually scroll because the router dont 'refresh' de page more of 1 times with the same path
    if ('#portfolio' === window.location.hash) {
      document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#portfolio');
    }
  }

  return (
    <nav className="navbar bg-cv-dark-blue-950-base text-white h-32">
      <div className="m-auto container flex flex-row justify-between items-center">
        <Logo />
        <span className={`text-2xl hover:underline cursor-pointer`} onClick={handleForceNavigateToPortfolio}>{navbarCopys[0]}</span>
      </div>
    </nav>
  );
};

export default Navbar;
