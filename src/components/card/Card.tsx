// Prop types for image source, card title, and description
interface CardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

/**
 * Card component that takes an image, title, description
 * @param props image source, card title, and card description
 */
const Card = ({ src, alt, title, description }: CardProps) => {
  return (
    <div className="card-shadow p-4 rounded-lg flex flex-col gap-4 lg:gap-8 justify-center">
      {/* Card image */}
      <img src={src} alt={alt} className="w-40 h-auto mx-auto" />

      {/* Card text */}
      <div>
        <h2 className="text-chemtek text-2xl font-bold">{title}</h2>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default Card;
