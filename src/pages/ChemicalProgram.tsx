import dishwasherImage from "../assets/images/dishwasher-image.png";

/**
 * Page that can only be accessed via a promotional QR code
 */
export const ChemicalProgram = () => {
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
                Reduce your repair costs by signing up for our program, where you
                will only pay for any necessary parts. This approach will not
                only save you money but will also ensure that you, our valued
                customer, gets the most out of your investment.
              </p>
            </div>

            <div>
              <h2>Free Preventative Maintainence</h2>
              <p className="paragraph-shade">
                Our chemical program includes complementary preventative
                maintainence services. This is yet another opportunity for us to
                help you save money and to begin helping you keep your equipment
                in optimal condition, as well as reducing the risk of any
                unexpected breakdowns.
                <br />
                <br />
                Don't miss out on this chance to enhance the longevity and
                efficiency of your assets!
              </p>
            </div>

            <div>
              <h2>10% OFF every 5th Chemical Order</h2>
              <p className="paragraph-shade">
                Sign up today & enjoy an additoinal customer perk which includes
                10% off every 5th chemical order.
                <br />
                <br />
                Experience the benefits of our rewards program for every
                purchase you make*
                <br />
                <br />
                <span className="text-xs">
                  *Offer subject to change - terms and conditions may apply
                </span>
              </p>
            </div>

            <div>
              <h2>Discounts on ICE machine services when applicable</h2>
              <p className="paragraph-shade">
                Our chemical program will allow you to enjoy exclusive discounts
                on ice machine services*
                <br />
                <br />
                <span className="text-xs">
                  *Offer subject to change - terms and conditions may apply
                </span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};
