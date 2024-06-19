const Heading = ({ children, className, variant }) => {
  const headingClass = `mb-2 ${{
    h1: "text-4xl xs:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold",
    h2: "text-2xl xl:text-4xl 2xl:text-5xl font-bold",
    h3: "text-2xl lg:text-3xl xl:text-4xl font-semibold"
  }[variant] || "text-3xl"} ${className || ""}`;

  const HeadingElement = variant;

  return (
    <HeadingElement className={`${headingClass} ${className}`}>
      {
        children
      }
    </HeadingElement>
  );
};

export default Heading;