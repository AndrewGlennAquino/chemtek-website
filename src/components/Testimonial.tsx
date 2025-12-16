// Icon imports
import star from "../assets/icons/star.png";

// Prop types for Testimonial
interface TestimonialProps {
  author: string;
  company: string;
  children: React.ReactElement | string;
}

/**
 * Testimonial component that takes an
 * image source, author, company, and children
 *
 * @param props image source, author, company, children
 */
export const Testimonial = ({
  author,
  company,
  children,
}: TestimonialProps) => {
  return (
    <div
      aria-label={`Testimonial from ${author} on FaceBook`}
      className="w-full h-full rounded-lg flex flex-col gap-4"
    >
      {/* Testimonial description */}
      <div>
        <div
          aria-hidden={true}
          className="testimonial-quote rotate-180 relative -left-2"
        >
          "
        </div>
        <p className="text-smoke/50 lg:px-16">{children}</p>
        <div
          aria-hidden={true}
          className="testimonial-quote ml-auto relative -right-2"
        >
          "
        </div>
      </div>

      {/* Author, company, and stars container */}
      <div className="flex flex-col justify-center items-center gap-4">
        {/* Text container */}
        <div className="flex flex-col justify-center items-center">
          {/* Testimonial author */}
          <h1 className="text-2xl font-bold leading-tight">{author}</h1>

          {/* Author's company  */}
          <h2 className="text-smoke/50 text-base font-normal leading-tight">
            {company}
          </h2>

          {/* Stars container */}
          <div className="mt-2 grid grid-cols-5 gap-4">
            <img src={star} alt="Star" className="w-12" />
            <img src={star} alt="Star" className="w-12" />
            <img src={star} alt="Star" className="w-12" />
            <img src={star} alt="Star" className="w-12" />
            <img src={star} alt="Star" className="w-12" />
          </div>
        </div>
      </div>
    </div>
  );
};
