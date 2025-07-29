const Hero = () => {
  return (
    <section aria-label="Hero" className="w-full h-screen max-h-192 relative -z-10 overflow-hidden">
      {/* Hero container */}
      <div className="container h-full mp-default flex justify-between items-center">
        {/* Text container */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold">
            We are <br /> ChemTek
          </h1>
          <h2 className="text-night/75 text-xl">
            Our team of experts is committed to delivering top-quality products
            and services that meet the unique needs of your business. Explore
            our website to learn more about our offerings and how we can help
            your business succeed.
          </h2>
        </div>

        {/* Video container */}
        <div className="w-full h-full">

        </div>
      </div>
    </section>
  );
};

export default Hero;
