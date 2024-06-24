import { iconsRoute } from "../../constants"

export const Button = ({children = '', className = '', btnDark=true, icon, hoverEffect=true }) => {
  return (
    <button 
      title={children} 
      className={`px-5 py-3 rounded-3xl flex flex-row items-center font-bold
                  ${hoverEffect ? 'hover:scale-110 ease-in-out duration-150' : '' }
                  ${ btnDark ? 'bg-cv-dark-blue-950-base text-white' : 'bg-white text-black'}
                  ${ className }`}
    >
      <img src={`${iconsRoute}${icon}.svg`} alt={icon} className="mr-2" />
      {children}
    </button>
  )
}
