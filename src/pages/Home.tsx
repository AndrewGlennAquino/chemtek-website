// Library imports
import { motion, stagger, type Variants } from "motion/react";

// Video imports
import heroVideo from "../assets/videos/hero-video.mp4";

// Image imports
import cleanImage from "../assets/images/clean.jpg";
import iceImage from "../assets/images/ice.jpg";
import washImage from "../assets/images/wash.jpg";

// Icon imports
import zap from "../assets/icons/zap.svg";
import tool from "../assets/icons/tool.svg";
import users from "../assets/icons/users.svg";

// Component imports
import { ImageCard } from "../components/ImageCard";
import { IconCard } from "../components/IconCard";
import { AreaCard } from "../components/AreaCard";
import { Testimonial } from "../components/Testimonial";

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
          {/* Why choose us header */}
          <h1>Why Choose Us </h1>

          {/* Why choose us grid container */}
          <div className="pt-8 grid grid-rows-3 grid-cols-1 gap-4 lg:gap-8">
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
        id="equipment-finance"
        aria-label="Equipment lease and finance"
        className="relative"
      >
        {/* Equipment container */}
        <div className="container mp-default flex flex-col gap-8">
          {/* Equipment header */}
          <h1 className="text-balance">Equipment Finance</h1>

          {/* Equpment text container */}
          <div className="card-shadow rounded-lg p-4 flex flex-col gap-2">
            <h2>Powering Your Business with Reliability and Efficiency</h2>

            <p className="paragraph-shade">
              Our products are built with precision engineering to deliver
              exceptional energy efficiency and reliability so your operations
              run at peak performance. Every unit is crafted using only the
              highest quality materials and components, ensuring long-lasting
              durability and reduced maintenance costs. We understand that no
              two businesses are the same. That's why we offer tailored
              fianancing programs designed to fit your specific operational
              needs, helping you save on money and optimize performance. From
              maintainance to installation, we're committed to providing
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
                  Finance Our Equipment →
                </motion.div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section
        aria-label="Testimonials"
        id="testimonials"
        className="bg-linear-to-b from-transparent from-50% to-aqua/50"
      >
        {/* Testimonials container */}
        <div className="container mp-default flex flex-col gap-8">
          {/* Testimonials header */}
          <h1 className="content-header">Testimonials</h1>

          {/* Testimonial and button */}
          <div className="bg-night card-shadow p-4 rounded-lg">
            <Testimonial
              author="Julio B."
              company="No Manches Mexican Grill"
            >
              <>
                I rarely write reviews, but I felt compelled to share my
                experience with ChemTek because{" "}
                <strong className="text-smoke">
                  they truly stand out from the crowd
                </strong>
                . The quality of their products is consistently excellent, which
                is so important to me, and their prices are honestly some of the
                best I've found anywhere.{" "}
                <strong className="text-smoke">
                  It's clear they care about both their products and their
                  customers.
                </strong>{" "}
                I also want to give a special shoutout to Vince, the owner. He's
                one of those rare business owners who genuinely goes above and
                beyond. He's always friendly, helpful, and willing to take the
                time to make sure everything is perfect. It's obvious he's
                passionate about what he does and{" "}
                <strong className="text-smoke">
                  truly cares about his customers' satisfaction
                </strong>
                . If you're on the fence about choosing ChemTek, I can honestly
                say you won't be disappointed. Great products, amazing prices,
                and the kind of customer service that's almost impossible to
                find these days. Highly recommended!
              </>
            </Testimonial>

            {/* View all reviews button */}
            <motion.a
              href="https://www.facebook.com/61576714856145/reviews/"
              target="_blank"
              className="primary-button w-fit ml-auto mt-8"
              whileHover={{ scale: 1.1 }}
            >
              View All Reviews →
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
};
