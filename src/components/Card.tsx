import Image from "next/image";

interface CardProps {
  venueName: string;
  imgSrc: string;
}

export default function Card({ venueName, imgSrc }: CardProps) {
  return (
    <div className="pb-4 rounded-lg max-w-[20rem] bg-white shadow-lg hover:bg-gray-100 transition-colors duration-300">
      <Image
        src={imgSrc}
        alt="Card Image"
        height={200}
        width={300}
        className="h-[15vh] mb-2 rounded-t-lg"
      />
      <p className="text-gray-800 px-10 text-center">{venueName}</p>
    </div>
  );
}
