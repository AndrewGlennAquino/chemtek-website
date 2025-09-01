/**
 * Contact component that uses CRM provided form
 */
const Contact = () => {
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

        {/* Provided iframe form and script file from CRM provider */}
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/MazOKEtrfPdf9LgmrG3N"
          className="w-full lg:w-[50vh] lg:max-w-192 h-full"
          id="inline-MazOKEtrfPdf9LgmrG3N"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Contact Us"
          data-height="651"
          data-layout-iframe-id="inline-MazOKEtrfPdf9LgmrG3N"
          data-form-id="MazOKEtrfPdf9LgmrG3N"
          title="Contact Us"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
