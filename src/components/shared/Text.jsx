export const Text = ({className, children}) => {
  return (
    <p className={`whitespace-pre-line ${className}`}>
        {children}
    </p>
  )
}
