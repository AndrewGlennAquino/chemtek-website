// Library imports
import { motion } from "motion/react";

// Component imports
import { Card } from "../components/Card";

export const Home = () => {
  return (
    <main>
      <section aria-label="hero">
        <div className="bg-black bg-gradient-to-br from-teal/5 via-teal/20 to-teal/5 px-default py-16 flex flex-col gap-4">
          <p className="text-seafoam">
            <span className="font-bold">—</span> Commercial Machine Repair
          </p>

          <h1 className="text-white text-3xl font-grotesk font-bold sm:text-5xl">
            DOWNTIME IS THE ONLY <br />
            <span className="text-seafoam">REAL COST.</span>
          </h1>

          <p className="text-white/75 text-sm lg:text-base">
            Repair, preventitive maintenence, and industrial cleaning.
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

      <div className="bg-teal text-white text-nowrap px-default py-2 flex gap-4 items-center overflow-x-auto">
        <p>Independently Owned</p>
        <p>| Commercial and Industrial Cleaning |</p>
        <p>Machine Repair</p>
      </div>

      <section aria-label="What We Service">
        <div className="bg-offwhite px-default py-8 lg:py-16 flex flex-col gap-4">
          <h1 className="text-teal">
            <span className="font-bold">—</span> What We Service
          </h1>
          <h2 className="font-bold text-2xl lg:text-3xl">
            FOUR CALLS. ONE CREW.
          </h2>

          <div className="w-full grid grid-row-4 lg:grid-rows-none lg:grid-cols-4 gap-4">
            <Card title="Machine Repair">Diagnostics and repair, fast.</Card>
            <Card alt title="Preventitive Maintenance">
              Scheduled plans, fewer surprises.
            </Card>
            <Card title="Industrial Cleaning">Degreasing and sanitation.</Card>
            <Card alt title="Service Contracts">
              Fixed pricing, priority dispatch.
            </Card>
          </div>
        </div>
      </section>

      <section aria-label="Quick Facts">
        <div className="bg-offwhite px-default">
          <div className="border-black/25 border-t-1 py-8 grid grid-rows-2 sm:grid-rows-none grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <h3 className="font-bold text-2xl lg:text-3xl">2025</h3>
              <p className="text-black/50 text-sm">Founded</p>
            </div>
            <div>
              <h3 className="font-bold text-2xl lg:text-3xl">TBD</h3>
              <p className="text-black/50 text-sm">Fact</p>
            </div>
            <div>
              <h3 className="font-bold text-2xl lg:text-3xl">TBD</h3>
              <p className="text-black/50 text-sm">Fact</p>
            </div>
            <div>
              <h3 className="font-bold text-2xl lg:text-3xl">TBD</h3>
              <p className="text-black/50 text-sm">Fact</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Request Service">
        <div className="bg-gray text-white px-default py-8 lg:py-16 flex flex-col lg:grid lg:grid-cols-3 gap-4">
          <div className="flex flex-col gap-4">
            <p className="text-seafoam">
              <span className="font-bold">—</span> Commercial Machine Repair
            </p>
            <h1 className="font-bold text-2xl">TELL US WHAT IS DOWN.</h1>
            <p className="text-white/75 text-sm">
              Describe the machine and the problem. We will contact you to
              confirm details and schedule the visit.
            </p>
          </div>

          <form className="bg-[#ffffff] text-black/50 border-seafoam border-t-4 rounded-sm p-4 flex flex-col lg:grid lg:grid-rows-3 lg:grid-cols-2 gap-4 lg:col-start-2 lg:col-end-4">
            <div className="form-info">
              <label className="form-label">YOUR NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Full name"
                className="form-text-input"
              />
            </div>
            <div className="form-info">
              <label className="form-label">COMPANY</label>
              <input
                type="text"
                id="company"
                name="company"
                required
                placeholder="Business name"
                className="form-text-input"
              />
            </div>
            <div className="form-info">
              <label className="form-label">PHONE</label>
              <input
                type="text"
                id="phone"
                name="phone"
                required
                placeholder="(555) 555-5555"
                className="form-text-input"
              />
            </div>
            <div className="form-info">
              <label className="form-label">EMAIL</label>
              <input
                type="text"
                id="email"
                name="email"
                required
                placeholder="you@company.com"
                className="form-text-input"
              />
            </div>
            <div className="form-info row-span-1 col-span-full">
              <label className="form-label">MACHINE</label>
              <input
                type="text"
                id="machine"
                name="machine"
                required
                placeholder="Make, model, or type"
                className="form-text-input"
              />
            </div>
            <div className="form-info row-span-2 col-span-full">
              <label className="form-label">WHAT IS WRONG</label>
              <textarea
                id="comment"
                name="comment"
                required
                placeholder="Symptoms, malufunctions, when it started"
                className="form-text-input"
              />
            </div>
            {/* TODO: add button functionality on click */}
            <button className="primary-button w-full col-span-full">Send Request</button>
          </form>
        </div>
      </section>
    </main>
  );
};
