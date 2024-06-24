const Heading = ({ children, className = "", variant = "h1" }) => {
  const baseClass = {
    h1: "text-4xl xs:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold",
    h2: "text-2xl xl:text-4xl 2xl:text-5xl font-bold",
    h3: "text-2xl lg:text-3xl xl:text-4xl font-semibold",
  }[variant] || "text-3xl";

  const finalClass = `mb-2 ${baseClass} ${className}`;

  const HeadingElement = variant;

  return (
    <HeadingElement className={finalClass}>
      {children}
    </HeadingElement>
  );
};

export default Heading;
