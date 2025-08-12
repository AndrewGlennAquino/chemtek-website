import { motion, MotionConfig, stagger, type Variants } from "motion/react";
import heroVideo from "../../../public/hero-video.mp4";

/**
 * Hero component for Home page
 */
const Hero = () => {
  // Parent animation variants to stagger children animation
  const staggerVariants: Variants = {
    animateFadeIn: {
      transition: {
        delayChildren: stagger(0.1, { startDelay: 0.5 }),
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
      <div className="hero-shadow bg-night/75 w-full h-full absolute inset-0 -z-20" />

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
              We Are{" "}
              <span className="bg-linear-to-r from-chemtek to-aqua bg-clip-text text-transparent">
                ChemTek
              </span>
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
    </section>
  );
};

export default Hero;
