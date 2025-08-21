import { motion } from "motion/react";

/**
 * Equipment component that describes equipment leasing and fianancing
 */
const Equipment = () => {
  return (
    <section aria-label="Equipment lease and fianance" className="relative">
      {/* Equipment container */}
      <div className="container mp-default flex flex-col gap-8">
        {/* Equipment header */}
        <h1 className="text-balance">Equipment Lease/Fianance</h1>

        {/* Equpment text container */}
        <motion.div
          className="card-shadow rounded-lg p-4 flex flex-col gap-2"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
          viewport={{ amount: 0.25, once: true }}
        >
          <h2 className="subheader-shade">
            Powering Your Business with Reliability and Efficiency
          </h2>

          <p>
            Our products are built with precision engineering to deliver
            exceptional energy efficiency and reliability so your operations run
            at peak performance. Every unit is crafted using only the highest
            quality materials and components, ensuring long-lasting durability
            and reduced maintenance costs. We understand that no two businesses
            are the same. That’s why we offer tailored fianancing programs
            designed to fit your specific operational needs, helping you save on
            money and optimize performance. From maintainance to installation,
            we’re committed to providing solutions that work seamlessly for you
            now and for years to come.
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
        </motion.div>
      </div>
    </section>
  );
};

export default Equipment;
