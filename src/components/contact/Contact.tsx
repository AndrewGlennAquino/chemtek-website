import { useState } from "react";
import { motion } from "motion/react";

/**
 * Contact component that takes user input, validates email,
 * then sends HTTP POST request to Netlify Functions endpoint
 */
const Contact = () => {
  /**
   * Store in state all form input to pass into handleSubmit.
   * Trigger rerender if a submitted property is changed, then validate input.
   */
  const [name, setName] = useState<string>();
  const [company, setCompany] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();

  // Store if the http response is successful or not
  const [success, setSuccess] = useState<boolean>();
  const [error, setError] = useState<boolean>();

  /**
   * On submit, verify if email is valid.
   * If input is invalid, do not submit post reqeust and prompt user again.
   * Otherwise, send user information to MailChimpAPI endpoint.
   */
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent page reload on click
    e.preventDefault();

    // Encapsulate form information states in submission object
    const submission = { name, company, email, phone };

    try {
      /**
       * Create HTTP POST request to endpoint, sending user data as JSON.
       * On response, set success state to true and error to false.
       * If response is not OK, set error state to true and success false.
       */
      const response = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      });

      if (response.ok) {
        console.log(response);
        setSuccess(true);
        setError(false);
      } else {
        console.log(response);
        setError(true);
        setSuccess(false);
      }
    } catch (error) {
      console.error("error during submission", error);
    }
  };

  return (
    <section
      id="contact-section"
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
          <p>
            Join our mailing list and access special offers, discounts and get
            word of new products!
          </p>
        </div>

        {/* Contact form */}
        <form
          className="w-full max-w-192 flex flex-col lg:pt-8 gap-8"
          action="/.netlify/functions/sendEmail"
          method="POST"
        >
          {/* Full name input */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
            className="contact-form-input"
            required={true}
          />

          {/* Company input */}
          <input
            type="text"
            name="company"
            placeholder="Business Name"
            onChange={(e) => setCompany(e.target.value)}
            className="contact-form-input"
            required={true}
          />

          {/* Email input */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="contact-form-input"
            required={true}
          />

          {/* Phone number input */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            className="contact-form-input"
            required={true}
          />

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Animated submit button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer border-2 border-smoke w-fit p-2 px-4 rounded-lg"
              type="submit"
              onClick={handleSubmit}
            >
              Join Now!
            </motion.button>

            {/* Give user feedback on if response is successful or not */}
            {success ? (
              <p>You have successfully signed up!</p>
            ) : error ? (
              <p>
                There was a problem signing up! Make sure your information is
                correct!
              </p>
            ) : undefined}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
