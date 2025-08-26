import iceMachine from "../../assets/images/first-time-cleaning-image.webp";

/**
 * Page that can only be accessed via a promotional QR code
 */
const FirstTimeCleaning = () => {
  return (
    <main>
      {/* First time cleaning container */}
      <article
        aria-label="First time ice machine cleaning special"
        className="container min-h-[75vh] mp-default pt-24 sm:pt-8 flex flex-col justify-center gap-8"
      >
        {/* First time cleaning header */}
        <h1 className="text-balance">
          First Time Ice Machine Cleaning Special
        </h1>

        {/* Image and text container */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-4">
          {/* Image container */}
          <div className="w-full sm:max-w-64 lg:max-w-96 relative">
            <img
              src={iceMachine}
              className="card-shadow w-full h-auto object-cover object-center rounded-md"
              loading="lazy"
            />
            {/* Sticker overlay */}
            <div className="bg-radial from-chemtek to-aqua text-night font-bold w-32 h-32 rounded-full flex justify-center items-center absolute top-0 right-0">
              <p className="text-xl">
                Only $80
                <span className="text-xs relative bottom-1">*</span>
              </p>
            </div>
          </div>

          {/* Text container */}
          <div className="card-shadow p-4 rounded-md flex flex-col justify-center gap-4">
            <div>
              <h2>First Time Saving</h2>
              <p className="paragraph-shade">
                Here at ChemTek we prioritize saving our customers as much money
                as possible. With our first time cleaning special, our first
                time customers get to experience even more savings.
              </p>
            </div>

            <div>
              <h2>FREE Inspection Included</h2>
              <p className="paragraph-shade">
                Our specialized technicians will complete a full FREE first time
                inspection allowing you to know how well your ice machine is
                running as well as saving you any potential future breakdowns!
                If any issues are found at this point, our technicians can help
                make sure your business is running somoothly by giving you
                solutions at hand!
              </p>
            </div>

            <div>
              <h2>Why Routine Maintainance & Cleaning Matter</h2>
              <p className="paragraph-shade">
                Commercial ice machines must be serviced at LEAST every 3-6
                months to maintain cleanliness and prevent hard water build up.
                This service can help prevent unexpected breakdowns, maintain
                ice quality, and also extend the lifespan of your ice machine.
                Ask how ChemTek can help keep your machine up to date!
              </p>
            </div>

            <div>
              <h2>10 Day Warranty</h2>
              <p className="paragraph-shade">
                Experience peace of mind with our 10-day warranty, designed to
                ensure your satisfaction and confidence in your purchase. This
                guarantee reflects our commitment to quality and customer care,
                allowing you to shop with assurance**
              </p>
            </div>

            <div>
              <span className="paragraph-shade text-xs">
                *Terms and conditions may apply
              </span>
              <br />
              <span className="paragraph-shade text-xs">
                **10 day warranty only applies to cleaning related defects and
                not sudden part failures
              </span>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default FirstTimeCleaning;
