
interface HeadingProps {
  children: React.ReactNode,
  className?: string,
  variant: "h1" | "h2" | "h3" | "h4",
  underlined?: boolean
}

const Heading = ({ children, className = "", variant, underlined = false }: HeadingProps) => {
  const baseClass = {
    h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight",
    h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight",
    h3: "text-xl sm:text-2xl md:text-3xl font-semibold leading-snug",
    h4: "text-lg sm:text-xl md:text-2xl font-semibold leading-snug",
  }[variant] || "text-base";

  const finalClass = `mb-2 text-pretty text-balance ${baseClass} ${className}`;

  const HeadingElement = variant;

  return (
    underlined ?

      <div className="text-center space-y-4">
        <HeadingElement className={finalClass}>
          {children}
        </HeadingElement >
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      </div>
      :
      <HeadingElement className={finalClass}>
        {children}
      </HeadingElement>
  );
};

export default Heading;
