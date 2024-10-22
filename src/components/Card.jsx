import { useNavigate } from "react-router-dom";
import { Text } from "./shared/Text";
import Heading from "./shared/Heading";

export const Card = ({ imageUrl, title, subtitle, id }) => {

  const navigate = useNavigate();

  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow group cursor-pointer" onClick={() => navigate(`/projects/${id}`)}>
      <div className="relative overflow-hidden rounded-lg">
        <img src={imageUrl} alt="Card Image" className="w-full" loading="lazy" />
      </div>
      <div className="mt-4 text-center">
        <Heading variant="h2" className="!text-xl font-bold mb-2 relative inline-block">
          {title}
          <span className="block h-0.5 bg-black absolute bottom-0 left-1/2 w-0 group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
        </Heading>
        <Text className="text-gray-600">{subtitle}</Text>
      </div>
    </div>
  );
};