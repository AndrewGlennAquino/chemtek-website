import { motion } from "motion/react";
import cleanImage from "../../assets/images/clean.jpg";
import iceImage from "../../assets/images/ice.jpg";
import washImage from "../../assets/images/wash.jpg";

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
    <div className="card-shadow rounded-lg flex flex-col">
      {/* Card image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full max-h-64 object-cover rounded-t-lg "
        loading="lazy"
      />

      {/* Card text */}
      <div className="p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-smoke/50">{description}</p>
      </div>
    </div>
  );
};

/**
 * What We Do component for Home page
 */
const WhatWeDo = () => {
  return (
    <section aria-label="What we do">
      {/* What We Do container */}
      <div className="container mp-default flex flex-col gap-8">
        {/* What We Do Header */}
        <h1 className="">What We Do</h1>

        {/* Card container */}
        <motion.div
          className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-4 lg:gap-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.5, duration: 0.4, ease: "easeOut" },
          }}
          viewport={{ once: true }}
        >
          <Card
            src={cleanImage}
            alt="Hand wiping with towel"
            title="Cleaning Products"
            description="We provide low cost cleaning products and services to help keep your facility clean and expenses to a minimum."
          />

          <Card
            src={iceImage}
            alt="Ice machine"
            title="Ice Machines"
            description="Our reliable and prompt service will satisfy your need for a clean, efficient, and higher yield ice machine."
          />

          <Card
            src={washImage}
            alt="Clean plate"
            title="Dish Washers"
            description="Our team of experts can guarantee proper dish washer maintenance, ensuring hygienic warewashing results."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
