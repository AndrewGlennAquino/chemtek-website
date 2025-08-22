import dishwasherImage from "../../assets/images/dishwasher-image.png";

/**
 * Page that can only be accessed via a promotional QR code
 */
const ChemicalProgram = () => {
  return (
    <main>
      {/* Chemical program container */}
      <article
        aria-label="First time ice machine cleaning special"
        className="container min-h-[75vh] mp-default pt-24 sm:pt-8 flex flex-col justify-center gap-8"
      >
        {/* Chemical program header */}
        <h1 className="text-balance">Dish Machine Chemical Program</h1>

        {/* Image and text container */}
        <div className="flex flex-col sm:flex-row-reverse items-center gap-4">
          {/* Image container */}
          <div className="w-full max-h-104 sm:max-w-64 lg:max-w-96 overflow-hidden rounded-md shrink-[0.75]">
            <img
              src={dishwasherImage}
              className="card-shadow w-full h-auto object-cover object-center rounded-md"
              loading="lazy"
            />
          </div>

          {/* Text container */}
          <div className="card-shadow p-4 rounded-md flex flex-col justify-center gap-4">
            <div>
              <h2>Free Labor on Repairs</h2>
              <p className="paragraph-shade">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto facere consequatur maxime iusto repellat officiis sed
                illum inventore deleniti quibusdam ullam reprehenderit
                doloremque atque quos perferendis, eum blanditiis!
              </p>
            </div>

            <div>
              <h2>Free Preventative Maintainence</h2>
              <p className="paragraph-shade">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto facere consequatur maxime iusto repellat officiis sed
                illum inventore deleniti quibusdam ullam reprehenderit
                doloremque atque quos perferendis, eum blanditiis!
              </p>
            </div>

            <div>
              <h2>10% OFF every 5th Chemical Order</h2>
              <p className="paragraph-shade">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto facere consequatur maxime iusto repellat officiis sed
                illum inventore deleniti quibusdam ullam reprehenderit
                doloremque atque quos perferendis, eum blanditiis!
              </p>
            </div>

            <div>
              <h2>Discounts on ICE machine services when applicable</h2>
              <p className="paragraph-shade">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto facere consequatur maxime iusto repellat officiis sed
                illum inventore deleniti quibusdam ullam reprehenderit
                doloremque atque quos perferendis, eum blanditiis!
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default ChemicalProgram;
