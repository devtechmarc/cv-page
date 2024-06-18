export const FrontImage = ({ imageUrl, height = 200,  width = 200}) => {
  return (
    <div className="relative inline-block">
      <div className={`absolute bg-cv-dark-blue-950-base top-5 -left-5 z-10`} style={{width : width , height :height}}></div>
      <img src={imageUrl} alt="Marc Fernández" className="relative z-20" height={height} width={width} />
    </div>
  );
};