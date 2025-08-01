import { motion, MotionConfig, type Variants } from "motion/react";
import { Link } from "react-router";

/**
 * Hero component for Home page
 */
const Hero = () => {
  // Parent animation variants to stagger children animation
  const staggerVariants: Variants = {
    animateFadeIn: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  // Animate fade in for hero content
  const fadeInVariants: Variants = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animateFadeIn: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section aria-label="Hero" className="h-screen max-h-192 relative">
      {/* Hero background image and filters */}
      <div className="bg-[url(./assets/images/hero-image.webp)] bg-cover bg-center w-full h-full absolute inset-0 -z-20" />
      <div className="bg-gradient-to-b from-chemtek/35 to-transparent w-full h-full absolute inset-0 -z-10" />
      <div className="bg-night/75 w-full h-full absolute inset-0 -z-20" />

      {/* Hero container */}
      <div className="container h-full mp-default grid lg:grid-cols-2">
        {/* Text container */}
        <MotionConfig reducedMotion="user">
          <motion.div
            className="h-full flex flex-col justify-center gap-4"
            initial="initial"
            animate="animateFadeIn"
            variants={staggerVariants}
          >
            <motion.h1
              className="text-smoke text-5xl font-bold"
              variants={fadeInVariants}
            >
              We are ChemTek
            </motion.h1>

            <motion.p
              className="text-smoke/55 text-lg"
              variants={fadeInVariants}
            >
              We are a leading provider of commercial ice machine repair,
              commercial dish machine repair and cleaning solutions. Our team of
              experts is committed to delivering top-quality products and
              services that meet the unique needs of your business. Explore to
              learn more about our offerings and how we can help your business
              succeed.
            </motion.p>
          </motion.div>
        </MotionConfig>
      </div>
    </section>
  );
};

export default Hero;
