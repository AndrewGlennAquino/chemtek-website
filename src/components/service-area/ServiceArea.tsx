import { motion } from "motion/react";

// Props for AreaCard component
interface AreaCardProps {
  children: string;
}

/**
 * AreaCard component that takes a children as props
 */
const AreaCard = ({ children }: AreaCardProps) => {
  return (
    <li className="card-shadow font-semibold p-4 rounded-md">
      {children}
    </li>
  );
};

/**
 * Service area component that list all reachable counties
 */
const ServiceArea = () => {
  return (
    <section aria-label="Service Area" className="relative">
      {/* Service area container */}
      <div className="container mp-default pt-0 flex flex-col gap-8">
        {/* Service area header */}
        <h1>Service Area</h1>

        {/* Service area text container */}
        <motion.div
          className="flex flex-col justify-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.5, duration: 0.4, ease: "easeOut" },
          }}
          viewport={{ once: true }}
        >
          <p>
            We serve customers across Northern Illinois, including the entire
            Chicago metro area and nearby counties, reaching from the Wisconsin
            border down through Will County, and from the Fox Valley west into
            the Rockford and DeKalb regions. Please feel free to look at our
            list of counties we service.
          </p>

          {/* Service area list container */}
          <div className="card-shadow p-4">
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
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceArea;
