import { motion } from "motion/react";
import userIcon from "../../assets/icons/user.svg";

// Prop types for Testimonial
interface TestimonialProps {
  src: string;
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
const Testimonial = ({ src, author, company, children }: TestimonialProps) => {
  return (
    <article
      aria-label={`Testimonial from ${author} on FaceBook`}
      className="bg-night card-shadow w-full h-full p-6 rounded-lg flex flex-col gap-4"
    >
      {/* Testimonial description */}
      <div>
        <div aria-hidden={true} className="testimonial-quote rotate-180 relative -left-2">"</div>
        <p className="lg:px-16">{children}</p>
        <div aria-hidden={true} className="testimonial-quote ml-auto relative -right-2">"</div>
      </div>

      {/* Image, author, and company container */}
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="bg-chemtek/25 w-32 h-32 rounded-full flex justify-center items-center">
          <img
            src={src}
            alt="Temporary user image"
            className="border-4 border-chemtek w-full h-full rounded-full object-cover"
          />
        </div>

        {/* Text container */}
        <div className="flex flex-col justify-center items-center">
          {/* Testimonial author */}
          <h1 className="text-2xl font-bold leading-tight">{author}</h1>

          {/* Author's company  */}
          <h2 className="text-night/60 leading-tight">{company}</h2>
        </div>
      </div>
    </article>
  );
};

/**
 * Testimonials component for Home page
 */
const Testimonials = () => {
  return (
    <section aria-label="Testimonials" className="bg-night/5">
      {/* Testimonials container */}
      <div className="container mp-default flex flex-col gap-4">
        {/* Testimonials header */}
        <h1 className="content-header">Testimonials</h1>

        {/* Testimonial cards */}
        <div>
          <Testimonial
            src={userIcon}
            author="Julio B."
            company="No Manches Mexican Grill"
          >
              <>
                I rarely write reviews, but I felt compelled to share my
                experience with ChemTek because they <strong>truly stand out from the
                crowd</strong>. The quality of their products is consistently excellent,
                which is so important to me, and their prices are honestly some
                of the best I’ve found anywhere. <strong>It’s clear they care about both
                their products and their customers.</strong> I also want to give a
                special shoutout to Vince, the owner. He’s one of those rare
                business owners who genuinely goes above and beyond. He’s always
                friendly, helpful, and willing to take the time to make sure
                everything is perfect. It’s obvious he’s passionate about what
                he does and <strong>truly cares about his customers’ satisfaction</strong>. If
                you’re on the fence about choosing ChemTek, I can honestly say
                you won’t be disappointed. Great products, amazing prices, and
                the kind of customer service that’s almost impossible to find
                these days. Highly recommended!
              </>
          </Testimonial>
        </div>

        {/* View all reviews button */}
        <motion.a
          href="https://www.facebook.com/61576714856145/reviews/"
          target="_blank"
          className="primary-button w-fit ml-auto"
          whileHover={{ scale: 1.1 }}
        >
          View All Reviews →
        </motion.a>
      </div>
    </section>
  );
};

export default Testimonials;
