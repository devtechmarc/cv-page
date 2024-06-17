import Heading from "./Heading"

export const Breaker = ({children}) => {
  return (
    <div className="w-full h-20 flex flex-row justify-center items-center bg-cv-blue-800-base text-white">
      <Heading variant={'h2'}>{children}</Heading>
    </div>
  )
}
