export const Button = ({children = '', className = '', btnDark=true }) => {
  return (
    <button 
      title={children} 
      className={`px-5 py-3 rounded-3xl
                  hover:scale-110 ease-in-out duration-150
                  ${ btnDark ? 'bg-cv-dark-blue-950-base text-white' : 'bg-white'}
                  ${ className }`}
    >
      {children}
    </button>
  )
}
