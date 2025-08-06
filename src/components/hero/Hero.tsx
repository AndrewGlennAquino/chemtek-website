import { motion, MotionConfig, type Variants } from "motion/react";
import heroVideo from "../../../public/hero-video.mp4";
import chevron from "../../assets/icons/chevron-down.svg";

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
      {/* Hero background video and filters */}
      <video
        className="w-full h-full object-cover object-center absolute inset-0 -z-20"
        src={heroVideo}
        aria-label="Video of someone scooping ice"
        loop
        muted
        autoPlay
        playsInline
      />
      <div className="bg-gradient-to-b from-chemtek/50 to-transparent w-full h-full absolute inset-0 -z-10" />
      <div className="bg-night/75 w-full h-full absolute inset-0 -z-20" />

      {/* Hero container */}
      <div className="container h-full mp-default grid lg:grid-cols-2">
        {/* Text container */}
        <MotionConfig reducedMotion="user">
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
              We Are ChemTek
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
        </MotionConfig>
      </div>

      {/* Animated pointer to indicate to scroll down for device width < 1024px */}
      <motion.div
        className="lg:hidden absolute right-1/2 bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <img
          className="w-8 h-8 object-cover object-center"
          src={chevron}
          alt="Downards chevron indicator to scroll down"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
