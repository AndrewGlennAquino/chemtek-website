/**
 * Icon card that takes a color, image source, title, and description
 *
 * @param props tailwind background color, image source, title, description
 */
export const IconCard = ({
  bg,
  src,
  title,
  desc,
}: {
  bg: string;
  src: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="card-shadow w-full h-full p-4 rounded-lg flex flex-col md:flex-row items-center gap-8">
      {/* Image with background color */}
      <div className={`${bg} w-fit h-fit p-1 shrink-0 rounded-lg`}>
        <img src={src} alt={`Image of ${title}`} loading="lazy" />
      </div>

      {/* Card text container */}
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-smoke/50">{desc}</p>
      </div>
    </div>
  );
};
