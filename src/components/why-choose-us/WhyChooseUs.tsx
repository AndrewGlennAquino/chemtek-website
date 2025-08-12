import { motion, type Variants, stagger } from "motion/react";
import whyChooseUs from "../../assets/images/why-choose-us.jpg";
import zap from "../../assets/icons/zap.svg";
import tool from "../../assets/icons/tool.svg";
import users from "../../assets/icons/users.svg";

interface WhyChooseUsCardProps {
  bg: string;
  src: string;
  title: string;
  desc: string;
  variants: Variants;
}

const WhyChooseUsCard = ({
  bg,
  src,
  title,
  desc,
  variants,
}: WhyChooseUsCardProps) => {
  return (
    <motion.div
      className="card-shadow w-full h-full p-4 rounded-lg flex flex-col md:flex-row items-center gap-8"
      variants={variants}
    >
      {/* Image with background color */}
      <div className={`${bg} w-fit h-fit p-1 shrink-0 rounded-lg`}>
        <img src={src} alt={`Image of ${title}`} loading="lazy" />
      </div>

      {/* Card text container */}
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-smoke/50">{desc}</p>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  // Animation variants for card fade in
  const fadeInVariants: Variants = {
    initial: { y: 25, opacity: 0 },
    animateFadeIn: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section aria-label="Why choose us">
      {/* Why choose us container spacing */}
      <div className="container mp-default">
        {/* Why choose us container with y border */}
        <div className="border-y-2 border-night-shade py-8 mb-8 flex flex-col lg:grid lg:grid-rows-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {/* Text container */}
          <div className="flex flex-col justify-center gap-8">
            {/* Why choose us header */}
            <h1>Why Choose Us </h1>

            {/* Why choose us grid container */}
            <motion.div
              className="grid grid-rows-3 grid-cols-1 gap-4 lg:gap-8"
              initial="initial"
              whileInView="animateFadeIn"
              variants={{
                animateFadeIn: {
                  transition: {
                    delayChildren: stagger(0.1, {startDelay: 0.1}),
                  },
                },
              }}
              viewport={{ amount: 0.25, once: true }}
            >
              <WhyChooseUsCard
                bg="bg-yellow-300"
                src={zap}
                title="Realiable Products and Services"
                desc="Our service and products are designed to be energy efficient and reliable, ensuring that your business runs smoothly and efficiently. We use only the highest quality materials and components in our products."
                variants={fadeInVariants}
              />

              <WhyChooseUsCard
                bg="bg-blue-300"
                src={tool}
                title="Installation and Maintenance"
                desc="Our team of experienced technicians provides expert installation and maintenance services for all your ice machines and warewashing equipment. We also offer regular maintenance plans to keep your equipment running at peak performance."
                variants={fadeInVariants}
              />
              <WhyChooseUsCard
                bg="bg-orange-300"
                src={users}
                title="Exceptional Customer Service"
                desc="We pride ourselves on providing exceptional customer service. Our team is dedicated to ensuring that our customers are satisfied with our products and services. Contact us today to experience the difference."
                variants={fadeInVariants}
              />
            </motion.div>
          </div>

          {/* Image container */}
          <div className="w-full h-full rounded-lg flex justify-center items-center">
            <img
              src={whyChooseUs}
              alt="Man doing repairs"
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
