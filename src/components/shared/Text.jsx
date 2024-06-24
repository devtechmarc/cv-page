export const Text = ({className, children}) => {
  return (
    <p className={`whitespace-pre-line text-balance ${className}`}>
        {children}
    </p>
  )
}
