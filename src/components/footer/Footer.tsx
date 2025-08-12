import { motion } from "motion/react";
import facebookIcon from "../../assets/icons/facebook.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-chemtek/50 text-smoke text-sm">
      {/* Footer container */}
      <div className="container mp-default flex flex-col gap-4">
        {/* Social media container */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold flex">Socials</h2>

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

        <a href="https://www.flaticon.com/" title="Icons">
          Icons created by Freepik - Flaticon
        </a>
      </div>
    </footer>
  );
};

export default Footer;
