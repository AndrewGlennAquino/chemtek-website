// Library imports
import { motion, stagger, type Variants } from "motion/react";
import { Link } from "react-router";

// Video imports
import heroVideo from "../assets/videos/hero-video.mp4";

// Image imports
import cleanImage from "../assets/images/clean.jpg";
import iceImage from "../assets/images/ice.jpg";
import washImage from "../assets/images/wash.jpg";
import whyChooseUs from "../assets/images/why-choose-us.jpg";

// Icon imports
import zap from "../assets/icons/zap.svg";
import tool from "../assets/icons/tool.svg";
import users from "../assets/icons/users.svg";

// Component imports
import { ImageCard } from "../components/ImageCard";
import { IconCard } from "../components/IconCard";
import { AreaCard } from "../components/AreaCard";

/**
 * Home page component
 */
export const Home = () => {
  // Parent variants to stagger children animation
  const staggerVariants: Variants = {
    animateFadeIn: {
      transition: {
        delayChildren: stagger(0.1, { startDelay: 0.25 }),
      },
    },
  };

  // Initial and animateFadeIn variants
  const fadeInVariants: Variants = {
    initial: {
      transform: "translateY(10px)",
      opacity: 0,
    },
    animateFadeIn: {
      transform: "translateY(0)",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <main>
      {/* Promotions section */}
      <section
        className="bg-linear-to-br from-chemtek to-aqua w-full py-2 flex justify-center absolute top-16 z-10"
        aria-label="Promotions"
      >
        <div className="text-night text-sm container px-4 lg:px-8 grid grid-cols-2">
          <motion.div
            className="text-balance justify-self-start self-center"
            whileHover="animateArrow"
          >
            <Link to="/promotions">
              View our promotions for first time customers{" "}
              <motion.div
                className="inline-block"
                variants={{ animateArrow: { transform: "translateX(0.5rem)" } }}
              >
                →
              </motion.div>
            </Link>
          </motion.div>

          <a
            href="tel:8472507186"
            className="cursor-pointer justify-self-end self-center"
          >
            Give us a call!
            <br />
            <span className="underline">(847) 250-7186</span>
          </a>
        </div>
      </section>

      {/* Hero section */}
      <section
        id="hero"
        aria-label="Hero"
        className="h-screen max-h-192 relative"
      >
        {/* Background video and filters */}
        <video
          className="w-full h-full object-cover object-center absolute inset-0 -z-20"
          src={heroVideo}
          aria-label="Video of someone scooping ice"
          loop
          muted
          autoPlay
          playsInline
        />
        <div className="hero-shadow bg-night/75 w-full h-full absolute inset-0 -z-20" />

        {/* Hero container */}
        <div className="container h-full mp-default grid lg:grid-cols-2">
          {/* Text container */}
          <motion.div
            className="h-full flex flex-col justify-center"
            initial="initial"
            animate="animateFadeIn"
            variants={staggerVariants}
          >
            <motion.h1
              className="text-smoke text-4xl font-bold"
              variants={fadeInVariants}
            >
              We Are <span className="gradient-text">ChemTek</span>
            </motion.h1>

            <motion.h2
              className="text-smoke text-lg font-semibold mb-4"
              variants={fadeInVariants}
            >
              Leading provider of commercial ice machine repair, commercial dish
              machine repair and cleaning solutions.
            </motion.h2>

            <motion.p className="text-smoke/75" variants={fadeInVariants}>
              Our team of experts is committed to delivering top-quality
              products and services that meet the unique needs of your business.
              Explore to learn more about our offerings and how we can help your
              business succeed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What we do section */}
      <section id="what-we-do" aria-label="What we do">
        {/* What we do container */}
        <div className="container mp-default flex flex-col gap-8">
          {/* What we do header */}
          <h1 className="">What We Do</h1>

          {/* Card container */}
          <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-4 lg:gap-8">
            <ImageCard
              src={cleanImage}
              alt="Hand wiping with towel"
              title="Cleaning Products"
              description="We provide efficient cleaning products and services to help keep your facility clean and expenses to a minimum."
            />

            <ImageCard
              src={iceImage}
              alt="Ice machine"
              title="Ice Machines"
              description="Our reliable and prompt service will satisfy your need for a clean, efficient, and higher yield ice machine."
            />

            <ImageCard
              src={washImage}
              alt="Clean plate"
              title="Dish Washers"
              description="Our team of experts can guarantee proper dish washer maintenance, ensuring hygienic warewashing results."
            />
          </div>
        </div>
      </section>

      {/* Why choose us section */}
      <section id="why-choose-us" aria-label="Why choose us">
        {/* Why choose us container spacing */}
        <div className="container mp-default">
          {/* Why choose us container with y border */}
          <div className="py-8 flex flex-col lg:grid lg:grid-rows-1 lg:grid-cols-2 gap-4 lg:gap-8">
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
                      delayChildren: stagger(0.1),
                    },
                  },
                }}
                viewport={{ amount: 0.25, once: true }}
              >
                <IconCard
                  bg="bg-yellow-300"
                  src={zap}
                  title="Realiable Products and Services"
                  desc="Our service and products are designed to be energy efficient and reliable, ensuring that your business runs smoothly and efficiently. We use only the highest quality materials and components in our products."
                />

                <IconCard
                  bg="bg-blue-300"
                  src={tool}
                  title="Installation and Maintenance"
                  desc="Our team of experienced technicians provides expert installation and maintenance services for all your ice machines and warewashing equipment. We also offer regular maintenance plans to keep your equipment running at peak performance."
                />
                <IconCard
                  bg="bg-orange-300"
                  src={users}
                  title="Exceptional Customer Service"
                  desc="We pride ourselves on providing exceptional customer service. Our team is dedicated to ensuring that our customers are satisfied with our products and services. Contact us today to experience the difference."
                />
              </motion.div>
            </div>

            {/* Image container */}
            <div className="w-full h-full rounded-lg flex justify-center items-center">
              <img
                src={whyChooseUs}
                alt="Man doing repairs"
                className="w-full h-full object-cover object-center rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service area section */}
      <section id="service-area" aria-label="Service area" className="relative">
        {/* Service area container */}
        <div className="container mp-default pt-0 flex flex-col gap-8">
          {/* Service area header */}
          <h1>Service Area</h1>

          {/* Service area animated container */}
          <div className="rounded-md card-shadow flex flex-col justify-center gap-4">
            {/* Service area text container */}
            <div className="p-4 flex flex-col gap-2">
              <h2>We Are At Your Service</h2>
              <p className="paragraph-shade">
                We serve customers across Northern Illinois, including the
                entire Chicago metro area and nearby counties, reaching from the
                Wisconsin border down through Will County, and from the Fox
                Valley west into the Rockford and DeKalb regions. Please feel
                free to look at our list of counties we service.
              </p>
            </div>

            {/* Service area list container */}
            <div className="p-4">
              <ul className="flex flex-wrap justify-center gap-2">
                <AreaCard>Cook</AreaCard>
                <AreaCard>Dupage</AreaCard>
                <AreaCard>Lake</AreaCard>
                <AreaCard>Will</AreaCard>
                <AreaCard>Kane</AreaCard>
                <AreaCard>McHenry</AreaCard>
                <AreaCard>Kendall</AreaCard>
                <AreaCard>DeKalb</AreaCard>
                <AreaCard>Boone</AreaCard>
                <AreaCard>Winnebago</AreaCard>
                <AreaCard>Ogle</AreaCard>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment section */}
      <section
        id="equipment-fianance"
        aria-label="Equipment lease and fianance"
        className="bg-linear-to-b from-transparent from-50% to-aqua/50 relative"
      >
        {/* Equipment container */}
        <div className="container mp-default flex flex-col gap-8">
          {/* Equipment header */}
          <h1 className="text-balance">Equipment Fianance</h1>

          {/* Equpment text container */}
          <div className="card-shadow rounded-lg p-4 flex flex-col gap-2">
            <h2>Powering Your Business with Reliability and Efficiency</h2>

            <p className="paragraph-shade">
              Our products are built with precision engineering to deliver
              exceptional energy efficiency and reliability so your operations
              run at peak performance. Every unit is crafted using only the
              highest quality materials and components, ensuring long-lasting
              durability and reduced maintenance costs. We understand that no
              two businesses are the same. That’s why we offer tailored
              fianancing programs designed to fit your specific operational
              needs, helping you save on money and optimize performance. From
              maintainance to installation, we’re committed to providing
              solutions that work seamlessly for you now and for years to come.
            </p>

            <motion.a
              className="ml-auto"
              href="https://financing.approvepayments.com/chemtek"
              target="_blank"
              whileHover="animateHover"
            >
              <div className="gradient-border">
                <motion.div
                  className="bg-night gradient-border-content"
                  variants={{
                    animateHover: {
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      color: "var(--color-night)",
                    },
                  }}
                >
                  Fianance Our Equipment →
                </motion.div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
};
