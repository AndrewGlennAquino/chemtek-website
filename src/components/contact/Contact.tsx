import { motion } from "motion/react";

const Contact = () => {
  return (
    <section
      aria-label="Contact us"
      className="bg-linear-to-b from-aqua/50 to-chemtek/50 text-smoke"
    >
      {/* Contact container */}
      <div className="container mp-default flex flex-col lg:flex-row lg:justify-between gap-8">
        {/* Contact text container */}
        <div className="flex flex-col gap-2">
          {/* Contact header */}
          <h1 className="content-header">Contact Us</h1>

          {/* Contact call to action */}
          <p>Join our mailing list and access special offers and discounts!</p>
        </div>

        {/* Contact form */}
        <form className="w-full max-w-192 flex flex-col lg:pt-8 gap-8">
          <input
            type="input"
            name="first-name"
            placeholder="First Name"
            className="contact-form-input"
          />
          <input
            type="input"
            name="last-name"
            placeholder="Last Name"
            className="contact-form-input"
          />
          <input
            type="input"
            name="email"
            placeholder="Email"
            className="contact-form-input"
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer border-2 border-smoke w-fit p-2 px-4 rounded-lg"
          >
            Join Now!
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
