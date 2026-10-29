type CardProps = {
  alt?: boolean;
  title: string;
  children: string;
};

export function Card({ alt, title, children }: CardProps) {
  if (alt) {
    return (
      <div
        className={`bg-[#ffffff] border-seafoam border-l-4 sm:border-l-0 sm:border-t-4 rounded-sm p-4 grid grid-row-2 gap-2`}
      >
        <h3 className="font-bold lg:text-lg">{title}</h3>
        <p className="text-black/75 text-sm lg:text-base">{children}</p>
      </div>
    );
  } else {
    return (
      <div
        className={`bg-[#ffffff] border-teal border-l-4 sm:border-l-0 sm:border-t-4 rounded-sm p-4 grid grid-row-2 gap-2`}
      >
        <h3 className="font-bold lg:text-lg">{title}</h3>
        <p className="text-black/75 text-sm lg:text-base">{children}</p>
      </div>
    );
  }
}
