import { motion } from "motion/react";
import Card from "../card/Card";
import cleanImage from "../../assets/images/clean.png";
import iceImage from "../../assets/images/ice.png";
import washImage from "../../assets/images/wash.png";

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
            title="Cleaning"
            description="We provide low cost cleaning products and services to help keep your facility clean and expenses to a minimum"
          />

          <Card
            src={iceImage}
            alt="Ice machine"
            title="Ice Machines"
            description="Our reliable and prompt service will satisfy your need for a clean and working ice machine"
          />

          <Card
            src={washImage}
            alt="Clean plate"
            title="Cleaning"
            description="Our team of experts can guarantee proper dish washer maintenance, ensuring hygienic warewashing results"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
