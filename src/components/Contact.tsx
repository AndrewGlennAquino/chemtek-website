// Library imports
import { useState } from "react";

/**
 * Contact component that uses Mailchimp API to sign users up to audience
 */
export const Contact = () => {
  // Hold in state the current user input for name, email, and message
  const [name, setName] = useState("Test Name");
  const [email, setEmail] = useState("Test Email");
  const [message, setMessage] = useState("Test Message");

  // Hold in state if the API request was a success or failure
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  // Handle submit by taking user input and try to POST to Netlify Function
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent default button click behavior
    e.preventDefault();

    // Package name, email, and message in object
    const submission = { name: name, email: email, message: message };

    /**
     * Try POST request to Netlify Function. On 200 status code response,
     * setSuccess to true and setFaliure to false. On 500 status code response,
     * setSuccess to false, setFailure to true, and log error.
     */
    try {
      const response = await fetch("/.netlify/functions/postNewContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      });

      if (response.ok) {
        setSuccess(true);
        setFailure(false);
      } else {
        setSuccess(false);
        setFailure(true);
      }
    } catch (err) {
      setSuccess(false);
      setFailure(true);
      console.log(err);
    }
  };

  return (
    <section
      id="contact"
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
          <p>Contact us to recieve exlcusive offers and deals!</p>
        </div>

        {/* Contact form container */}
        <div>
          <form className="w-full flex flex-col gap-8">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="contact-form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="contact-form-input"
            />
            <textarea
              rows={5}
              cols={64}
              name="message"
              placeholder="Message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="contact-form-input"
            />

            <button
              onClick={handleSubmit}
              className="font-bold cursor-pointer w-fit"
            >
              Submit
            </button>
          </form>

          {/* Success and failure text */}
          <div>
            {success && "Success!"}
            {failure && "Something went wrong during submission"}
          </div>
        </div>
      </div>
    </section>
  );
};
