import Heading from "./shared/Heading";
import { Text } from "./shared/Text";

const TimelineItem = ({ date, title, description }) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-8 h-8  rounded-full mt-4 -start-4-and-half bg-cv-dark-blue-950-base"></div>
      <time className="mb-1 text-base font-normal leading-none">{date}</time>
      <Heading variant="h3" className="font-semibold">{title}</Heading>
      <Text className="mb-4 font-normal">{description}</Text>
    </li>
  );
};

export const Timeline = ({ events }) => {
  return (
    <div className="w-full m-auto container py-8">
      <ol className="relative border-s-4 border-gray-200 xl:m-0 dark:border-gray-700 m-4 ps-2">
        {events.map((event, index) => (
          <TimelineItem
            key={index}
            date={event.date}
            title={event.title}
            description={event.description}
          />
        ))}
      </ol>
    </div>
  );
};

