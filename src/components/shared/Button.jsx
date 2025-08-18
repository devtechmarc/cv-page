import { iconsRoute } from "../../constants"

export const Button = ({children = '', className = '', btnDark=true, icon, hoverEffect=true, onClickAction, route= `${iconsRoute}`, format='svg', imgClassName='', border=false, style = {}}) => {
  return (
    <button 
      title={children}
      onClick={onClickAction}
      style={style}
      className={`px-5 py-3 rounded-3xl flex flex-row items-center font-bold
                  ${hoverEffect ? 'hover:scale-110 ease-in-out duration-150' : 'cursor-auto' }
                  ${ btnDark ? 'bg-cv-dark-blue-950-base text-white' : 'bg-white text-black'}
                  ${ border ? 'border-2 border-cv-dark-blue-950-base' : ''}
                  ${ className }`}
    >
      {
       icon && <img src={`${route}${icon}.${format}`} alt={icon} className={`mr-2 ${imgClassName}`} />
      }
      {children}
    </button>
  )
}
