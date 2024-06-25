const Heading = ({ children, className = "", variant = "h1" }) => {
  const baseClass = {
    h1: "text-3xl md:text-4xl lg:text-5xl font-bold",
    h2: "text-xl xl:text-3xl  font-bold",
    h3: "text-lg xl:text-2xl font-semibold",
  }[variant] || "text-base";

  const finalClass = `mb-2 text-balance ${baseClass} ${className}`;

  const HeadingElement = variant;

  return (
    <HeadingElement className={finalClass}>
      {children}
    </HeadingElement>
  );
};

export default Heading;
