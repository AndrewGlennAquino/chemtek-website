/**
 * ImageCard component that takes an image sourc, alt, title, and description
 *
 * @param props src, alt, title, description
 */
export const ImageCard = ({
  src,
  alt,
  title,
  description,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="card-shadow rounded-lg flex flex-col">
      <img 
        src={src}
        alt={alt}
        className="w-full h-full max-h-64 object-cover rounded-t-lg"
      />

      <div className="p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-smoke/50">{description}</p>
      </div>
    </div>
  );
};
