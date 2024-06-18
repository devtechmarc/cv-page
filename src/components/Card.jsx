const Card = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg p-4 shadow-lg cursor-pointer">
      <div className="relative overflow-hidden rounded-lg bg-purple-100">
        <img src={imageUrl} alt="Card Image" className="w-full" />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-xl font-bold mb-2 relative inline-block group">
          {title}
          <span className="block h-0.5 bg-black absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
        </h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
