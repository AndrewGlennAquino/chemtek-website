// Library imports
import { motion } from "motion/react";

/**
 * Home page component that contains hero, summary of services, and basic facts
 */
export const Home = () => {
  return (
    <main>
      <section aria-label="hero">
        <div className="bg-black bg-gradient-to-br from-teal/5 via-teal/20 to-teal/5 px-4 lg:px-8 py-16 flex flex-col gap-4">
          <p className="text-seafoam">— Commercial Machine Repair</p>

          <h1 className="text-white text-3xl font-grotesk font-bold sm:text-5xl">
            DOWNTIME IS THE ONLY <br />
            <span className="text-seafoam">REAL COST.</span>
          </h1>

          <p className="text-white/75 text-sm">
            Repair, preventitive maintenence, and industrial cleaning
          </p>

          <div className="sm:max-w-max flex flex-col sm:flex-row gap-2">
            {/* TODO: add functionality to buttons */}
            <motion.button
              className="primary-button"
              whileHover={{ scale: 1.05 }}
            >
              Schedule a Repair
            </motion.button>
            <motion.button
              className="secondary-button"
              whileHover={{ scale: 1.025 }}
            >
              View Service Plans
            </motion.button>
          </div>
        </div>
      </section>

      <section className="bg-red-500 w-screen min-h-screen"></section>
    </main>
  );
};
