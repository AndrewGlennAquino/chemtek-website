const Contact = () => {
  return (
    <section
      aria-label="Contact us"
      className="bg-linear-to-t from-chemtek to-[#225313] text-smoke"
    >
      {/* Contact container */}
      <div className="container mp-default flex flex-col lg:flex-row lg:justify-between gap-8">
        {/* Contact text container */}
        <div className="flex flex-col gap-2">
          {/* Contact header */}
          <h1 className="content-header">Contact Us</h1>

          {/* Contact call to action */}
          <p>
            Join our mailing list and access special offers and discounts!
          </p>
        </div>

        {/* Contact form */}
        <form className="w-full max-w-192 flex flex-col gap-8">
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

          <button onClick={(e) => { e.preventDefault() }} className="border-2 border-smoke w-fit p-2 px-4 rounded-full">Join Now!</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
