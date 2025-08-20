import { motion } from "motion/react";
import facebookIcon from "../../assets/icons/facebook.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-chemtek/50 text-smoke text-sm">
      {/* Footer container */}
      <div className="container mp-default flex flex-col gap-8">
        {/* Social media and conctact flexbox */}
        <div className="flex gap-8 md:gap-16">
          {/* Social media container */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Socials</h2>

            {/* Links flexbox */}
            <div className="flex gap-4">
              {/* Facebook link */}
              <motion.a
                href="https://www.facebook.com/641706522363028"
                target="_blank"
                className="social-media-link"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={facebookIcon}
                  alt="Facebook logo"
                  className="w-full h-full"
                />
              </motion.a>

              {/* LinkedIn link */}
              <motion.a
                href="https://www.linkedin.com/company/chemtek-llc/"
                target="_blank"
                className="social-media-link"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn logo"
                  className="w-full h-full"
                />
              </motion.a>
            </div>
          </div>

          {/* Contact container */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Contacts</h2>

            {/* Contact flexbox */}
            <div className="flex flex-col gap-1">
              <motion.a
                href="tel:2246590548"
                className="underline"
                whileHover={{ scale: 1.1 }}
              >
                (224) 659-0548
              </motion.a>

              <motion.a
                href="mailto:chemtekllc@gmail.com"
                className="underline"
                whileHover={{ scale: 1.1 }}
              >
                chemtekllc@gmail.com
              </motion.a>
            </div>
          </div>
        </div>

        {/* Accredation and copyright */}
        <div className="flex flex-col items-center">
          {/* Accredation to Flaticon */}
          <a href="https://www.flaticon.com/" title="Icons">
            Icons created by Freepik - Flaticon
          </a>
          <p>Copyright © 2025 Chemtek - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
