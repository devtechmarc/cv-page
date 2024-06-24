export const FrontImage = ({ imageUrl, height = 200, width = 200 }) => {
  return (
    <div className="relative inline-block">
      <div className="relative">
        <div className="absolute bg-cv-dark-blue-950-base top-2 sm:top-3 md:top-5 -left-2 sm:-left-3 md:-left-5 z-10 w-full h-full"></div>
        <img
          src={imageUrl}
          alt={imageUrl.slice(imageUrl.lastIndexOf("/") + 1, imageUrl.lastIndexOf("."))}
          className="relative z-20 block"
          height={height}
          width={width}
          style={{ objectFit: 'cover', width: '100%', height: '100%', maxWidth : '400px', maxHeight : '400px' }}
        />
      </div>
    </div>
  );
};
