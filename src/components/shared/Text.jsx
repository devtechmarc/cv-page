export const Text = ({className, children, onClick}) => {
  return (
    <p className={`whitespace-pre-line text-balance ${className}`} onClick={onClick}>
        {children}
    </p>
  )
}
